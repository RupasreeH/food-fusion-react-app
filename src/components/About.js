import { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <h2>This is About Food app</h2>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2>{loggedInUser}</h2>
      <User />
      {/* <UserClass name={"Roopa(class)"} location={"USA"} /> */}
    </div>
  );
};
export default About;
