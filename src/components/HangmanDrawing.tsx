// Creating the individual parts of the body to show when the users
// gets a letter wrong.
const head = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    }}
  />
);

const body = (
  <div
    style={{
      height: '100px',
      width: '10px',
      background: 'black',
      position: 'absolute',
      top: '120px',
      right: 0,
    }}
  />
);

const rightArm = (
  <div
    style={{
      height: '10px',
      width: '100px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const leftArm = (
  <div
    style={{
      height: '10px',
      width: '100px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const rightLeg = (
  <div
    style={{
      height: '10px',
      width: '100px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: '10px',
      rotate: '-45deg',
      transformOrigin: 'right top',
    }}
  />
);

const leftLeg = (
  <div
    style={{
      height: '10px',
      width: '100px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: '-100px',
      rotate: '45deg',
      transformOrigin: 'left top',
    }}
  />
);

const HangmanDrawing = () => {
  return (
    // Using relative positioning in order to make absolute positioning
    // all different hangman parts inside this container.
    <div style={{ position: 'relative' }}>
      {head}
      {body}
      {rightArm}
      {leftArm}
      {rightLeg}
      {leftLeg}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />

      <div
        style={{
          background: 'black',
          height: '10px',
          width: '200px',
          marginLeft: '120px',
        }}
      />

      <div
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />

      <div style={{ background: 'black', height: '10px', width: '250px' }} />
    </div>
  );
};

export default HangmanDrawing;
