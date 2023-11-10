import styles from "./Footer.module.css";

function Footer(children) {
  return (
    <footer className={styles.Footer}>
      <>{children}</>
    </footer>
  );
}

export default Footer;
