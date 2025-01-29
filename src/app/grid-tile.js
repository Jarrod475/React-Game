import styles from "./page.module.css";
function tile(props){
    let source ;
    switch(props.type){
        case 'dirt' :
            source = "terrain/dirt.png";
            break;
        case 'rock' :
            source = "terrain/rock.png"
            break;
        case 'door' :
            source = "terrain/door.png"
            break;
        default:
            source = "terrain/dirt.png";
            break;
    }

    return(
        <div className={styles.gridItem}>
            <img className={styles.terrain} src={source} alt="dirt terrain"></img>
        </div>
    )
}

export default tile;