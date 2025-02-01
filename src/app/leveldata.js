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
            grid: [4,5],
            obst: [5],
            corr: [3]
        },
        3: {
            grid: [4,7],
            obst: [3,9],
            corr: [7]

        }
    };

    return levelData[level];
} 


export default LevelData;