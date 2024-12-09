import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Extracted function to safely get a letter from the guess list
function getLetter(guessList, num, index) {
  if (guessList && guessList[num] && guessList[num][index]) {
    return guessList[num][index];
  }
  return "";
}

// Function to handle cells for a single row
function handleCells(checkedGuessList, num) {
  return range(0, 5).map((index) => {
    const letter = getLetter(checkedGuessList, num, index);
    let cellClassName = `cell ${letter.status}`;
    return (
      <span className={cellClassName} key={index}>
        {letter.letter}
      </span>
    );
  });
}

// Function to draw the entire grid
function drawGrid(checkedGuessList) {
  return range(0, NUM_OF_GUESSES_ALLOWED).map((num) => (
    <p className="guess" key={num}>
      {handleCells(checkedGuessList, num)}
    </p>
  ));
}

// Main GuessList component
function GuessList({ guessList, answer }) {
  let checkedGuessList = guessList.map((guess) => {
    return checkGuess(guess.guess, answer);
  });
  return <div className="guess-results">{drawGrid(checkedGuessList)}</div>;
}

export default GuessList;
