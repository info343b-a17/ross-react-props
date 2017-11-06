import React, { Component } from 'react';
import Button from "./components/Button";

let buttons = [
  {
    key: 1,
    caption: "Save",
    type: "primary",
    size: "lg"
  },
  {
    key: 2,
    caption: "Cancel",
    type: "secondary",
    size: "lg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="container">
        {buttons.map(btn => <Button {...btn} />)}
      </div>
    );
  }
}

export default App;
