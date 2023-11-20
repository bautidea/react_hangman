import { useState } from 'react';
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

  console.log(wordToGuess);

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
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetter} />

      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
