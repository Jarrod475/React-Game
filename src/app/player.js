import styles from "./page.module.css";
function player(props){
    return(
        <div >
            {props.isPlayer ? <img className={styles.playertile} src= 'player.png' /> : <img className={styles.playertile} src= 'blank.png' />}
        </div>
    )
}

export default player;