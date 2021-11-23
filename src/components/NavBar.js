import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1>Goal Maker App</h1>
        <div className="buttons">
          <button>Settings</button>
          <button>Log out</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
