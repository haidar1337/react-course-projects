import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  });

  const {
    mutate,
    isLoading: isUpdateLoading,
    isError: isUpdateError,
    error: updateError,
  } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;

      await queryClient.cancelQueries({ queryKey: ["events", params.id] });
      const previous = queryClient.getQueryData(["events", params.id]);

      queryClient.setQueryData(["events", params.id], newEvent);

      return { previous };
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(["events", params.id], context.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events", params.id]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isLoading || isUpdateLoading) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error has occurred!"
        message={
          error.info?.message ||
          "Failed to fetch event, please try again later."
        }
      >
        <Link to="../"> Okay</Link>
      </ErrorBlock>
    );
  }

  if (isUpdateError) {
    content = (
      <ErrorBlock
        title="An error has occurred!"
        message={
          updateError.info?.message ||
          "Failed to update event, please try again later."
        }
      >
        <Link to="../"> Okay</Link>
      </ErrorBlock>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
