import { useCallback, useEffect, useState } from 'react';
// Importing words im going to use.
import words from './data/wordList.json';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  // Using a function to get a random word from list.
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // Tracking which letter we have guessed
  const [guessedLetter, setGuessedLetters] = useState<string[]>([]);

  // Amount of incorrect letter the user has.
  const incorrectLetters = guessedLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  // Checking if user lost the match. when the amount of incorrect letters reach 6 (max
  // amount of body parts)
  const isLoser = incorrectLetters.length === 6;

  // Same for winner.
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetter.includes(letter));

  // Every time the component is rerendered the useEffect hook is recreating
  // this function and re-running the event handler.
  // We only want it to run when the component inside this function changes,
  // in this case when 'guessedLetter' changes.
  // Thats why we use 'useCallback'.
  const addGuessedLetter = useCallback(
    (pressedKey: string) => {
      if (guessedLetter.includes(pressedKey) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, pressedKey]);
    },
    [guessedLetter, isLoser, isWinner]
  );

  // Handling the event in where we press a letter on the keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      // We are checking if the pressed key is a letter.
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    // On keypress we are calling the handler
    document.addEventListener('keypress', handler);

    // When the key is released, we want to clean the event listener.
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetter]);

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>
        {isWinner && 'Winner - Refresh to try again'}
        {isLoser && 'Nice Try - Refresh to try again'}
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetter}
      />

      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetter={guessedLetter.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
