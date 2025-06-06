import React from "react";

class UserCalss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummy_photo.jpg",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rupasreeH");
    const json = await data.json();
    console.log();
    this.setState({ userInfo: json });

    this.timer = setInterval(() => {
      console.log("RR1");
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count != prevState.count ||
      this.state.count != prevState.count
    ) {
      //code}
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @Roopa123</h4>
      </div>
    );
  }
}
export default UserCalss;
