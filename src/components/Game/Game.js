import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [value, setValue] = React.useState({ key: "", guess: "" });
  const [guessList, setGuessList] = React.useState([]);

  return (
    <>
      <div className="guess-results">
        <GuessList guessList={guessList} answer={answer} />
      </div>
      <div className="guess">
        <GuessInput
          value={value}
          setValue={setValue}
          guessList={guessList}
          setGuessList={setGuessList}
        />
      </div>
    </>
  );
}

export default Game;
