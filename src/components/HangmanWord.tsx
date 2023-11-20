interface Props {
  wordToGuess: string;
  guessedLetters: string[];
}

const HangmanWord = ({ wordToGuess, guessedLetters }: Props) => {
  const lettersToFill = wordToGuess.split('');

  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {lettersToFill.map((letter, ind) => (
        // This span is used to display all letters and the line below each letter
        <span style={{ borderBottom: '.1em solid black' }} key={ind}>
          {/* The next span is used to hide the letters */}
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? 'visible'
                : 'hidden',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
