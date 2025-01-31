const LevelData = (level) => {
    const levelData = 
    {
        0:{
            grid: [4,4],
            obst: [5],
            corr: [3]
        },
        1 : {
            grid: [4,4],
            obst: [5],
            corr: [3]
        },
        2 : {
            rid: [4,4],
            obst: [5],
            corr: [3]
        },
    };

    return levelData[level];
} 


export default LevelData;