import React, { useEffect } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function ConditionalBanner({ answer, guessList, setInputDisabled }) {
  let hasAnswer = guessList.some((guess) => guess.guess === answer);
  let noAttemptsLeft = guessList.length === NUM_OF_GUESSES_ALLOWED;

  useEffect(() => {
    if (hasAnswer || noAttemptsLeft) {
      setInputDisabled(true);
    }
  }, [hasAnswer, noAttemptsLeft, setInputDisabled]);

  if (hasAnswer) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessList.length} guesses</strong>.
        </p>
      </div>
    );
  }
  if (noAttemptsLeft) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default ConditionalBanner;
