import { useEffect, useState } from "react";
const User = (props) => {
  const [count1] = useState(0);
  const [count2] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer called");
    }, 1000);
    console.log("useEffect called");

    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count1 = {count1}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name:{props.name}</h2>
      <h3>Location: USA</h3>
      <h4>Contact: @Roopa123</h4>
    </div>
  );
};
export default User;
