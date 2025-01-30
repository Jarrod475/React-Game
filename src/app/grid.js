import React from 'react';
import Tile from "./grid-tile";
import Player from './player';
import Corruption from './corruption';
const TileGrid = ({ rows, columns ,playerPos, obstacles, corruptions}) => {
  const totalTiles = rows * columns;
// ok so the '_' is used when you arent interested in that value,
//  when calling some function and it requires more than one parameter you arent gona use
const tiles = Array.from({ length: totalTiles }, (_, index) => {
  let tyleType = 'dirt'; 
  //set the tyle type to rock if its ID is part of the obstacles array.
  if (index === obstacles.find((obst)=> obst === index)){
    tyleType = 'rock';
  }else if (index === totalTiles - 1){
    tyleType = 'door';
  }
  return <Tile tileID={index} type={tyleType} key={index} className="tile" />;
});
  //this creates an array of 'potential' player positions.
  //if the tile isPlayer is set to true, the player tile is rendered.
  const player = Array.from({ length: totalTiles }, (_, index) => (
    <Player isPlayer={playerPos===index?true:false} tileID={index} key={index}  />
  ));

  const corruption = Array.from({ length: totalTiles }, (_, index) => {
    let state = 0;
    if (index === corruptions[corruptions.length - 1]){
      state = 2;
    }else if (index === corruptions.find((corr)=> corr === index)){
      state = 1;
    }else{
      state = 0;
    }
   return <Corruption corrupted={state} tileID={index} key={index}  />
});



  return (
    <div>
      <div //tile grid for corruption
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '5px',
          rowGap: '1px',
          width: 'auto',
          height: 'auto',
          position: 'absolute',
          top: '130px',
          left: '10%',
          zIndex: 2 // Ensure background tiles are below the player
        }}>
        {corruption}

      </div>
      <div //tile grid for player
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '5px',
          rowGap: '1px',
          width: 'auto',
          height: 'auto',
          position: 'absolute',
          top: '130px',
          left: '10%',
          zIndex: 3 // Ensure background tiles are below the player
        }}>
        {player}

      </div>
      <div //tile grid for background tiles
      // we use inline css here so that we
      //  can set the grid size dynamically based on how many tiles we need
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '5px',
          rowGap: '1px',
          width: 'auto',
          height: 'auto',
          position: 'absolute',
          top: '130px',
          left: '10%',
          zIndex: 1 // Ensure player is above the background tiles
        }}
      >
        {tiles}
      </div>
    </div>
  );
};

export default TileGrid;
