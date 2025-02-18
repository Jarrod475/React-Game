'use client'
import styles from "./page.module.css";

import Grid from "./grid.js";
import { useState,useEffect,useRef } from "react";
import LevelData from "./leveldata";

export default function Home() {
  const [level, setLevel] = useState(1);
  const [playerPos, setPlayerPos] = useState(0);
  const [gridSize, setGridSize] = useState([4,4]);
  const [obstacles, setObstacles] = useState([5]);
  const [grass,setGrass] = useState([]);
  const [corruption,setCorruption] = useState([3]);
  const [moves,setMoves] = useState(-2);
  const [totalmoves,setTotalMoves] = useState(0);
  const [gameover,setGameOver] = useState(false);
  




// Function to manually reload level data
const reloadLevelData = () => {
  let currentLevel = level;
  setLevel(null);  // Clear the state first
  setTimeout(() => setLevel(currentLevel), 0); // Re-fetch data
};


//this hook will load a level based on the level number
useEffect(() => {

  if (level === 6) {
    setGameOver(true);
    return;
  }
  if(level === null){return}
  let data =  LevelData(level);
  setGridSize(data.grid);
  setPlayerPos(0);
  setObstacles(data.obst);
  setCorruption(data.corr);
  setGrass(data.grass);
  setTotalMoves((prevTotalMoves)=> prevTotalMoves + moves);
  setMoves(0);
}, [level]);



  //this function is called when a key is pressed
  const handleKeyDown = (event) => {
    //this function moves the player
    setPlayerPos((prevPos) => {
      console.log("i am running!");
      let newpos = prevPos;
      //this switch statement handles the arrow key input and moves the player accordingly
      switch (event.key) {
        case 'ArrowUp':
          newpos = (prevPos - gridSize[1] >= 0) ? (prevPos - gridSize[1]) : prevPos;
          setMoves((prevMoves)=> prevMoves + 0.5);
          break;
        case 'ArrowDown':
          newpos =  (prevPos + gridSize[1] < (gridSize[1] * gridSize[0])) ? (prevPos + gridSize[1]) : prevPos;
          setMoves((prevMoves)=> prevMoves + 0.5);
          break;
        case 'ArrowLeft':
          newpos =  (prevPos % gridSize[1] !== 0) ? (prevPos - 1) : prevPos;
          setMoves((prevMoves)=> prevMoves + 0.5);
          break;
        case 'ArrowRight':
          newpos = ((prevPos + 1) % gridSize[1] !== 0) ? (prevPos + 1) : prevPos;
          setMoves((prevMoves)=> prevMoves + 0.5);
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
      if(newCorruptionPoint === grass.find((gras)=> gras === newCorruptionPoint)){
        return prevCorruption;
      } else if (newCorruptionPoint != prevCorruption[prevCorruption.length-1]){
        return [...prevCorruption,newCorruptionPoint];
      }else{
        return prevCorruption;
      }
    });
  };
  //this hook checks to see if the player completed the level by reaching the last tile or touched corruption
  useEffect(() => {
    if (playerPos === corruption.find((corr)=> corr === playerPos)) {
      //if the player touches corruption, the level is reset
      reloadLevelData();
    }

    if (playerPos === gridSize[0] * gridSize[1] - 1) {
      setLevel((prevLevel) => prevLevel + 1);
    }
  }, [playerPos,corruption]);

  //this is a hook that listens for keydown events, and then calls the handleKeyDown function
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gridSize]);


// We destructure this component for easier access inside of it!
return (
  <div className={styles.page}>
    {!gameover ? (
      <div>
        <p>Level: {level} Moves: {moves}</p>
        <Grid rows={gridSize[0]} columns={gridSize[1]} playerPos={playerPos} obstacles={obstacles} corruptions={corruption} grass={grass} />
      </div>
    ) : (
      <div>
        <h1>YOU WIN!!!</h1>
        <p>Total Moves: {totalmoves}</p>
      </div>
    )}
  </div>
);
}
