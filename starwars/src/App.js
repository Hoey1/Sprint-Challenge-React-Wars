import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const url = "https://swapi.dev/api/people/"; // I'd like to see if this custom shortened link tracks clicks for API's https://bit.ly/reactWars
  const [characterData, setCharacterData] = useState({});
  const [currentURL, setCurrentURL] = useState(url);

  const Buttons = styled.button`
    background-color: gray;
    border-color: gray;
    border-radius: 8px;
    width: 75px;
    height: 20px;
    margin: 5px;
  `;

  useEffect(() => {
    axios
      .get(currentURL)
      .then((res) => {
        setCharacterData(res.data);
      })
      .catch((err) => {
        console.log("An error retrieving the data there was. Hrmmm.");
      });
  }, [currentURL]);

  if (!characterData.results) {
    return <h3>While this loads please wait. Yes, hrrrm</h3>;
  } else {
    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        {characterData.results.map((char) => {
          return <Character char={char} />;
        })}
        <Buttons
          onClick={() => {
            characterData.previous
              ? setCurrentURL(characterData.previous)
              : setCurrentURL(url);
          }}
        >
          Previous
        </Buttons>
        <Buttons
          onClick={() => {
            characterData.next
              ? setCurrentURL(characterData.next)
              : setCurrentURL(url);
          }}
        >
          Next
        </Buttons>
      </div>
    );
  }
};

export default App;
