import styles from './Main.module.css';

export default function Main() {
  return (
    <main className={styles.container}>
      <h1 className={styles.h1}>How Aegle Works</h1>
      <div className={styles.main}>
        <p>
          Click for an illustrative example of how Aegle works compared with
          traditional stop-loss over 5-years for a typical self-insured employer
        </p>
        <div>
          <button className={styles.button}>Start explanation </button>
        </div>
      </div>
    </main>
  );
}
