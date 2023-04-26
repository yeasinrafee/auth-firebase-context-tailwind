import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const loggedOut = result.user;
        console.log("User Logged out", loggedOut);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <a className="btn btn-ghost normal-case text-xl" href="/">
        Authentication
      </a>
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        Home
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="login">
        Login
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="register">
        Register
      </Link>
      {user ? (
        <>
          <>{user.email}</>{" "}
          <button onClick={handleLogOut} className="ml-5 font-bold">
            Sign Out
          </button>
        </>
      ) : (
        <Link to="/login">Log in</Link>
      )}
    </div>
  );
};

export default Header;
