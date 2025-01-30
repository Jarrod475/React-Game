
import styles from "./page.module.css";
function corruption(props){
    let imgPath = "";
    switch(props.corrupted){
        case 2:
            imgPath = '/terrain/corruption.png' ;
            break;
        case 1:
            imgPath = '/terrain/corruptpath.png' ;
            break;
        case 0:
            imgPath = 'blank.png' ;
            break;
        default:
            imgPath = 'blank.png' ;
            break;
    }
    return(
        <div>
            <img className={styles.playertile} src= {imgPath}/>
        </div>
    )
}

export default corruption;