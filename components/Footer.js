import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.column}>
            <img className={styles.img} src="/images/logo-xl.png" />
            <p>Revolutionizing Stop-loss Reinsurance</p>
            <p className={styles.email}>info@aeglehealthpartners.com</p>
          </div>
          <div className={styles.column}>
            <h4>Product</h4>
            <p>What is Aegle</p>
            <p>How Aegle works</p>
          </div>
          <div className={styles.column}>
            <h4>Company</h4>
            <p>About Aegle</p>
          </div>
          <div className={styles.column}>
            <h4>General Conditions</h4>
            <p>Privacy policy</p>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.row}>
          <div className={styles.column}>
            © 2022 Aegle Health Partners, Inc. All Rights Reserved.
          </div>
          <div className={styles.column}>
            455 East 57th St, New York NY 10022
          </div>
        </div>
      </footer>
    </>
  );
}
