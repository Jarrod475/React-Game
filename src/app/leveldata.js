const LevelData = (level) => {
    const levelData = 
    {
        0:{
            grid: [4,4],
            obst: [5],
            corr: [3],
            grass: []
        },
        1 : {
            grid: [4,4],
            obst: [5],
            corr: [3],
            grass: []
        },
        2 : {
            grid: [4,5],
            obst: [4,5,12],
            corr: [3],
            grass: []
        },
        3: {
            grid: [4,7],
            obst: [4,9],
            corr: [7],
            grass: [10]
        },
        4: {
            grid: [7,7],
            obst: [9],
            corr: [7],
            grass: [10]
        },
        5: {
            grid: [7,7],
            obst: [5,6,9],
            corr: [7],
            grass: [10]
        },
    };

    return levelData[level];
} 


export default LevelData;