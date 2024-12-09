import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import ConditionalBanner from "../ConditionalBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [value, setValue] = React.useState({ key: "", guess: "" });
  const [guessList, setGuessList] = React.useState([]);
  const [isDisabled, setDisabled] = React.useState(false);

  return (
    <>
      <div className="guess-results">
        <GuessList guessList={guessList} answer={answer} />
      </div>
      <ConditionalBanner
        guessList={guessList}
        answer={answer}
        setInputDisabled={setDisabled}
      />
      <div className="guess">
        <GuessInput
          value={value}
          setValue={setValue}
          guessList={guessList}
          setGuessList={setGuessList}
          isDisabled={isDisabled}
        />
      </div>
    </>
  );
}

export default Game;
