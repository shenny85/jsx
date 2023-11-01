//          5 REQUIRED STEPS
// 1) import the React and ReactDOM libraries
// 2) Get a reference to the div with ID root
// 3) Tell React to take control of that element
// 4) Create a component
// 5) Show the component on the screen


// 1) import the React and ReactDOM libraries
import React from 'react';            //make components work together
import ReactDOM from 'react-dom/client';   // get component to show up in the browser
import App from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);


// 4) Show the component on the screen
root.render(<App />);