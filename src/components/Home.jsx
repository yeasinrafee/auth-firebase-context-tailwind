import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <h3>Home {user && <span>{user.displayName}</span>}</h3>
    </div>
  );
};

export default Home;
