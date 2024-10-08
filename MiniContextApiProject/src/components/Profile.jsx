import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h3>pls Login</h3>;

  return (
    <p>
      wellcome {user.userName} and {user.password}
    </p>
  );
}

export default Profile;
