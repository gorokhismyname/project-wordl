import React from "react";

function GuessInput({ value, setValue, guessList, setGuessList }) {
  function handleNewValue(guess) {
    const randKey = crypto.randomUUID();
    const newLocal = { key: randKey, guess: guess };
    setValue(newLocal);
  }

  function updateList() {
    const updatedGuessList = [...guessList, value];
    setGuessList(updatedGuessList);
  }

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          if (!value.guess || value.guess.trim() === "") {
            alert("Input cannot be empty!");
            return;
          }
          updateList();
          handleNewValue("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={value.guess}
          pattern="^.{5,5}$"
          onChange={(event) => {
            const uppercasedValue = event.target.value.toUpperCase();
            handleNewValue(uppercasedValue);
          }}
        ></input>
      </form>
    </>
  );
}

export default GuessInput;
