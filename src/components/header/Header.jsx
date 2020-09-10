import React from "react";
import logo from "images/logo.svg";
import imgUser from "images/img-user.jpg";
import { ReactComponent as IconToggleOpen } from "images/icon-toggle-open.svg";
import { ReactComponent as IconToggleClose } from "images/icon-toggle-close.svg";
import { ReactComponent as IconDropdown } from "images/icon-dropdown.svg";
import styles from "./Header.module.scss";

export function Header({ isTogglerOpen = false, onTogglerClick = () => null }) {
  return (
    <header className={styles.wrap}>
      <div className={styles.logoWrap}>
        <a href="/#" className={styles.logo}>
          <img
            src={logo}
            alt="Logo"
            width="78"
            height="34"
            className={styles.logoImg}
          />
        </a>
      </div>
      <div
        id="sidebarToggler"
        className={styles.toggler}
        onClick={onTogglerClick}
      >
        {isTogglerOpen ? (
          <IconToggleClose className={styles.togglerIcon} />
        ) : (
          <IconToggleOpen className={styles.togglerIcon} />
        )}
      </div>
      <div className={styles.user}>
        <img src={imgUser} alt="Jerry Little" className={styles.userImg} />
        <span className={styles.userName}>Jerry Little</span>
        <IconDropdown className={styles.userDropdown} />
        <ul className={styles.userMenu}>
          <li className={styles.userMenuItem}>
            <a href="/#" className={styles.userMenuLink}>
              Profile
            </a>
          </li>
          <li className={styles.userMenuItem}>
            <a href="/#" className={styles.userMenuLink}>
              Photos
            </a>
          </li>
          <li className={styles.userMenuItem}>
            <a href="/#" className={styles.userMenuLink}>
              Settings
            </a>
          </li>
          <li className={styles.userMenuItem}>
            <a href="/#" className={styles.userMenuLink}>
              Edit
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
