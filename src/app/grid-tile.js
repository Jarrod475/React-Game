import styles from "./page.module.css";
function tile(props){
    return(
        <div className={styles.gridItem}>
            <img className={styles.terrain} src="terrain/dirt.png" alt="dirt terrain"></img>
        </div>
    )
}

export default tile;