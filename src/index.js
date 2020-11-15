import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <App/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));