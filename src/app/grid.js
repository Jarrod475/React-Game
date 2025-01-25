import React from 'react';
import Tile from "./grid-tile";

const TileGrid = ({ rows, columns }) => {
  const totalTiles = rows * columns;

// ok so the '_' is used when you arent interested in that value,
//  when calling some function and it requires more than one parameter you arent gona use
  const tiles = Array.from({ length: totalTiles }, (_, index) => (
    <Tile key={index} className="tile" />
  ));

  return (
    <div
      className="grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '5px',
        rowGap: '1px',
        width: 'auto',
        height: 'auto'
      }}
    >
      {tiles}
    </div>
  );
};

export default TileGrid;
