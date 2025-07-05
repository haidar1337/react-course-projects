import { useSelector } from "react-redux";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const email = useSelector((state) => state.auth.email);
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <p>Email Address: {email}</p>
    </main>
  );
};

export default UserProfile;
