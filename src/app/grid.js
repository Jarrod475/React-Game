import React from 'react';
import Tile from "./grid-tile";
import Player from './player';
const TileGrid = ({ rows, columns ,playerPos, obstacles}) => {
  const totalTiles = rows * columns;

// ok so the '_' is used when you arent interested in that value,
//  when calling some function and it requires more than one parameter you arent gona use
const tiles = Array.from({ length: totalTiles }, (_, index) => {
  let tyleType = 'dirt'; 
  //set the tyle type to rock if its ID is part of the obstacles array.
  if (index === obstacles.find((obst)=> obst === index)){
    console.log('found obstacle at :' , index);
    tyleType = 'rock';
  }
  return <Tile tileID={index} type={tyleType} key={index} className="tile" />;
});
  //this creates an array of 'potential' player positions.
  //if the tile isPlayer is set to true, the player tile is rendered.
  const player = Array.from({ length: totalTiles }, (_, index) => (
    <Player isPlayer={playerPos===index?true:false} tileID={index} key={index}  />
  ));


  return (
    <div>
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
          top: '50px',
          left: '10%',
          zIndex: 2 // Ensure background tiles are below the player
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
          top: '50px',
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
