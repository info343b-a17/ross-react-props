import React, { Component } from 'react';
import Button from "./components/Button";
import Card from "./components/Card";

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
    //{...btn} is an ES6 destructing
    //assignment. It's short-hand for 
    //manually typing:
    //caption={btn.caption} type={btn.type} size={btn.size}
    return (
      <div className="container">
        {buttons.map(btn => <Button {...btn} />)}
        <div>
          <Card title="My Fun Card" imgsrc="pumpkin.jpg" imgalt="jack-o-lantern"
          width={400}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid facilis neque quis fuga saepe error culpa odit possimus, repudiandae dolorum autem animi eaque velit architecto totam obcaecati modi. Quod, sint!</p>
            <Button type="primary" caption="Click Me"/>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
