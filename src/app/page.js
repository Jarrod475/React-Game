import styles from "./page.module.css";
import Grid from "./grid.js";


export default function Home() {
  return (
    <div className={styles.page}>
      <Grid rows={3} columns={4} />
    </div>
  );
}
