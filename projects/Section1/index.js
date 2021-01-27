// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create e react component
const App = () => {
  const button = { text: 'Click Me!'};
  const labelText = 'Enter Name:';

  return <div>
    <label className="label" htmlFor="name">{labelText}</label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: 'blue', color: 'white' }}>
      {button.text}
    </button>
  </div>;
};

// Take the component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
