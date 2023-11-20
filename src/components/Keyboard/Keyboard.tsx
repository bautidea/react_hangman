import keys from '../../data/keys.json';
import styles from './Keyboard.module.css';

const Keyboard = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem',
      }}
    >
      {keys.map((letter) => (
        <button key={letter} className={styles.btn}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
