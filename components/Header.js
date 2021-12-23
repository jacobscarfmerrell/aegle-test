import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <div className={styles.rowItem}>
          <img className={styles.img} src="/icons/logo-light.svg" />
        </div>
        <div className={styles.rowItem}>What is Aegle</div>
        <div className={styles.rowItem}>How Aegle Works</div>
        <div className={styles.rowItem}>Simulate Aegle</div>
        <div className={styles.rowItem}>About Aegle</div>
      </div>
      <button className={styles.button}>Contact Us</button>
    </header>
  );
}
