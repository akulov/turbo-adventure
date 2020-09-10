import React from "react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.wrap}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a href="/#" className={styles.navLink}>
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/#" className={styles.navLink}>
            Chat
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/#" className={styles.navLink}>
            Settings
          </a>
        </li>
      </ul>
      <p className={styles.copyrights}>&copy; Copyright 2020</p>
    </footer>
  );
}
