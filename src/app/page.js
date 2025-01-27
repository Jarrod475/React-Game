'use client'
import styles from "./page.module.css";
import Grid from "./grid.js";
import { useState,useEffect } from "react";

export default function Home() {
  //this bad boy is the player position!
  const [playerPos, setPlayerPos] = useState(0);
  const [gridSize, setGridSize] = useState([5, 5]);
  //this function is called when a key is pressed
  const handleKeyDown = (event) => {
    setPlayerPos((prevPos) => {
      switch (event.key) {
        case 'ArrowUp':
          return prevPos - gridSize[1] >= 0 ? prevPos - gridSize[1] : prevPos;
        case 'ArrowDown':
          return prevPos + gridSize[1] < (gridSize[1] * gridSize[0]) ? prevPos + gridSize[1] : prevPos;
        case 'ArrowLeft':
          return prevPos % gridSize[1] !== 0 ? prevPos - 1 : prevPos;
        case 'ArrowRight':
          return (prevPos + 1) % gridSize[1] !== 0 ? prevPos + 1 : prevPos;
        default:
          return prevPos;
      }
    });
  };
  //this is a hook that listens for keydown events, and then calls the handleKeyDown function
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <div className={styles.page}>
      <Grid rows={gridSize[0]} columns={gridSize[1]} playerPos={playerPos} />
    </div>
  );
}
