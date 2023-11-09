import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Footer.module.css";

function Footer({ children }) {
  return <div className={styles.Footer}>{children}</div>;
}

export default Footer;
