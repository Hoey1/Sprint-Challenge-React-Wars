import React, { useState, useEffect } from "react";
import "./App.css";
// import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const url = "https://bit.ly/reactWars"; // I'd like to see if this custom shortened link tracks clicks for API's
  const [characterData, setCharacterData] = useState({});
  const [currentURL, setCurrentURL] = useState(url);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
};

export default App;
