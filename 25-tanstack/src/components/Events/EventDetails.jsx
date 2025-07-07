import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["event-details"],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const {
    mutate,
    isLoading: isDeletionLoading,
    isError: isDeletionError,
    error: deletionError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  function handleDelete() {
    mutate({ id });
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {(isLoading || isDeletionLoading) && <LoadingIndicator />}
      {isError && (
        <ErrorBlock
          title="An error has occurred!"
          message={
            error.info?.message ||
            "Failed to fetch event details, please try again later."
          }
        />
      )}
      {isDeletionError && (
        <ErrorBlock
          title="An error has occurred!"
          message={
            deletionError.info?.message ||
            "Failed to delete event, please try again later."
          }
        />
      )}
      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img
              src={`http://localhost:3000/${data.image}`}
              alt="Event Image"
            />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date} at {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
