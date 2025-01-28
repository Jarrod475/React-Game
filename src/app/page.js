'use client'
import styles from "./page.module.css";
import Grid from "./grid.js";
import { useState,useEffect } from "react";

export default function Home() {
  //this bad boy is the player position!
  const [playerPos, setPlayerPos] = useState(0);
  const [gridSize, setGridSize] = useState([5, 5]);
  const [obstacles, setObstacles] = useState([3,4]);
  //this function is called when a key is pressed
  const handleKeyDown = (event) => {
    setPlayerPos((prevPos) => {
      let newpos = prevPos;
      switch (event.key) {
        case 'ArrowUp':
          newpos = (prevPos - gridSize[1] >= 0) ? (prevPos - gridSize[1]) : prevPos;
          break;
        case 'ArrowDown':
          newpos =  (prevPos + gridSize[1] < (gridSize[1] * gridSize[0])) ? (prevPos + gridSize[1]) : prevPos;
          break;
        case 'ArrowLeft':
          newpos =  (prevPos % gridSize[1] !== 0) ? (prevPos - 1) : prevPos;
          break;
        case 'ArrowRight':
          newpos = ((prevPos + 1) % gridSize[1] !== 0) ? (prevPos + 1) : prevPos;
          break;
        default:
          newpos =  prevPos;
          break;
      }
      if (newpos === obstacles.find((obst)=> obst === newpos)){
        return prevPos;
      }else{
        return newpos;
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

//we destructure this component for easier access inside of it!
  return (
    <div className={styles.page}>
      <Grid  rows={gridSize[0]} columns={gridSize[1]} playerPos={playerPos} obstacles={obstacles}/>
    </div>
  );
}
