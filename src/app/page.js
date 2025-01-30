'use client'
import styles from "./page.module.css";

import Grid from "./grid.js";
import { useState,useEffect } from "react";

export default function Home() {
  const [level, setLevel] = useState(0);
  const [playerPos, setPlayerPos] = useState(1);
  const [gridSize, setGridSize] = useState([]);
  const [obstacles, setObstacles] = useState([5]);
  const [corruption,setCorruption] = useState([3])



//this hook will load a level based on the level number
useEffect(() => {
  console.log("level is ", level);
  let randColl = Math.floor(Math.random() * 5) + 3;
  setPlayerPos(0);
  setGridSize([4,randColl]);
  setObstacles([5]);
  setCorruption([3]);

}, [level]);


  //this function is called when a key is pressed
  const handleKeyDown = (event) => {
    //this function moves the player
    setPlayerPos((prevPos) => {
      let newpos = prevPos;
      //this switch statement handles the arrow key input and moves the player accordingly
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
    //this function moves the corruption
    setCorruption((prevCorruption)=>{
      let newCorruptionPoint = prevCorruption[prevCorruption.length-1];
      switch (event.key) {
        case 'ArrowUp':
          newCorruptionPoint = (newCorruptionPoint - gridSize[1] >= 0) ? (newCorruptionPoint - gridSize[1]) : newCorruptionPoint;
          console.log("new corruption point after arrow up is ",newCorruptionPoint);
          break;
        case 'ArrowDown':
          newCorruptionPoint =  (newCorruptionPoint + gridSize[1] < (gridSize[1] * gridSize[0])) ? (newCorruptionPoint + gridSize[1]) : newCorruptionPoint;
          break;
        case 'ArrowLeft':
          newCorruptionPoint =  (newCorruptionPoint % gridSize[1] !== 0) ? (newCorruptionPoint - 1) : newCorruptionPoint;
          break;
        case 'ArrowRight':
          newCorruptionPoint = ((newCorruptionPoint + 1) % gridSize[1] !== 0) ? (newCorruptionPoint + 1) : newCorruptionPoint;
          break;
        default:
          newCorruptionPoint =  newCorruptionPoint;
          break;
      }
      if (newCorruptionPoint != prevCorruption[prevCorruption.length-1]){
        return [...prevCorruption,newCorruptionPoint];
      }else{
        return prevCorruption;
      }
    });
  };
  //this hook checks to see if the player completed the level by reaching the last tile
  useEffect(() => {
    if (playerPos === gridSize[0] * gridSize[1] - 1) {
      setLevel((prevLevel) => prevLevel + 1);
    }
  }, [playerPos]);

  //this is a hook that listens for keydown events, and then calls the handleKeyDown function
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gridSize,obstacles]);



//we destructure this component for easier access inside of it!
  return (
    <div className={styles.page}>
      <h1>Level {level}</h1>
      <Grid  rows={gridSize[0]} columns={gridSize[1]} playerPos={playerPos} obstacles={obstacles} corruptions={corruption}/>
    </div>
  );
}
