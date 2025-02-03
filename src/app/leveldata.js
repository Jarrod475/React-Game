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
            obst: [4,5,12,16],
            corr: [11],
            grass: []
        },
        3: {
            grid: [4,7],
            obst: [4,9,20,25],
            corr: [8],
            grass: [7]
        },
        4: {
            grid: [3,7],
            obst: [3,9,18],
            corr: [13],
            grass: [10]
        },
        5: {
            grid: [5,5],
            obst: [5,6,9,12],
            corr: [7],
            grass: [16]
        }
    };

    return levelData[level];
} 


export default LevelData;