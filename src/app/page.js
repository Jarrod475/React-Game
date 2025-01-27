import styles from "./page.module.css";
import Grid from "./grid.js";

export default function Home() {
  return (
    <div className={styles.page}>
      <Grid rows={4} columns={6} playerPos={6} />
    </div>
  );
}
