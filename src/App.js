import React, { useState } from "react";
import "./App.css";
import Paddle from "./paddle";
import Ball from "./ball";

const App = () => {
  const initialBallState = { x: 300, y: 200, speedX: 5, speedY: 5 };
  const initialPaddleState = { left: 150, right: 150 };
  const [ball, setBall] = useState(initialBallState);
  const [paddles, setPaddles] = useState(initialPaddleState);
  const [gameOver, setGameOver] = useState(false);
  const [setGameRunning] = useState(false);

  const startGame = () => {
    setGameRunning(true);
  };

  const restartGame = () => {
    setBall(initialBallState);
    setPaddles(initialPaddleState);
    setGameOver(false);
  };

  const pauseGame = () => {
    setGameRunning(false);
  };

  return (
    <div className="ping-pong-container" tabIndex="0">
      <Paddle position={paddles.left} side="left" />
      <Paddle position={paddles.right} side="right" />
      <Ball position={ball} />
      <div className="controls">
        <button onClick={startGame}>Start</button>
        <button onClick={restartGame}>Restart</button>
        <button onClick={pauseGame}>Pause</button>
      </div>
      {gameOver && <div className="game-over">Game Over</div>}
    </div>
  );
};

export default App;
