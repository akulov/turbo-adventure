import React from "react";
import imgUser from "images/img-user.jpg";
import { ReactComponent as IconHome } from "images/icon-home.svg";
import { ReactComponent as IconChat } from "images/icon-chat.svg";
import { ReactComponent as IconSettings } from "images/icon-settings.svg";
import { ReactComponent as IconExit } from "images/icon-exit.svg";
import styles from "./Sidebar.module.scss";
import cn from "classnames";

export function Sidebar({ isOpen = false }) {
  return (
    <aside id="sidebar" className={cn(styles.wrap, isOpen && styles.open)}>
      <div className={styles.header}>
        <img src={imgUser} alt="Jerry Little" className={styles.headerImg} />
        <span className={styles.headerName}>Jerry Little</span>
      </div>
      <ul className={styles.nav}>
        <li className={cn(styles.navItem, styles.navItemActive)}>
          <a href="/#" className={styles.navLink}>
            <IconHome className={styles.navIcon} />
            <span className={styles.navTitle}>Home</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/#" className={styles.navLink}>
            <IconChat className={styles.navIcon} />
            <span className={styles.navTitle}>Chat</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/#" className={styles.navLink}>
            <IconSettings className={styles.navIcon} />
            <span className={styles.navTitle}>Settings</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/#" className={styles.navLink}>
            <IconExit className={styles.navIcon} />
            <span className={styles.navTitle}>Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
