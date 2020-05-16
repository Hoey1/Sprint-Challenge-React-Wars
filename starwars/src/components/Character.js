// Write your Character component here
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-direction: column;
`;
const CharacterContainer = styled.div`
  border: 4px solid white;
  margin: 8px auto;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  /* border-radius: 50%; */
  &:hover {
    border: 4px solid black;
    margin: 8px auto;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: white;
  }
`;

const CharacterName = styled.h1`
  font-family: "Ubuntu", sans-serif;
  /* text-decoration: underline overline wavy white; */
`;

const CharacterStats = styled.p`
  font-family: "Ubuntu", sans-serif;
`;

const StyledImage = styled.img`
  /* border-radius: 50%; */
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

function Character(props) {
  if (!props.char) {
    return <h3>Patience You Need</h3>;
  } else {
    return (
      <Container>
        <CharacterContainer>
          <CharacterName>{props.char.name}</CharacterName>
          <CharacterStats>Status: {props.char.status}</CharacterStats>
          <CharacterStats>Species: {props.char.species}</CharacterStats>
          <CharacterStats>Gender: {props.char.gender}</CharacterStats>
        </CharacterContainer>
      </Container>
    );
  }
}

export default Character;
