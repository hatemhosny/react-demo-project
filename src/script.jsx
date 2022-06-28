import React, { useState } from "react";
import ReactDOM from "react-dom";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Hello, {props.name}!</h1>
      <img className="logo" src="http://127.0.0.1:8080/livecodes/assets/templates/react.svg" />
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
ReactDOM.render(<App name="React" />, document.querySelector("#app"));
