
import styles from "./page.module.css";
function corruption(props){
    return(
        <div>
            {props.corrupted ? <img className={styles.playertile} src= '/terrain/corruption.png' /> : <img className={styles.playertile} src= 'blank.png' />}
        </div>
    )
}

export default corruption;