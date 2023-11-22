import keys from '../../data/keys.json';
import styles from './Keyboard.module.css';

interface Props {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (pressedKey: string) => void;
}

const Keyboard = ({
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
}: Props) => {
  const renderKey = (letter: string) => {
    const isActive = activeLetter.includes(letter);
    const isInactive = inactiveLetters.includes(letter);

    return (
      <button
        key={letter}
        className={`${styles.btn} ${isActive ? styles.active : ''} ${
          isInactive ? styles.inactive : ''
        }`}
        onClick={() => addGuessedLetter(letter)}
        disabled={isActive || isInactive}
      >
        {letter}
      </button>
    );
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem',
      }}
    >
      {keys.map((letter) => renderKey(letter))}
    </div>
  );
};

export default Keyboard;
