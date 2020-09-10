import React from "react";
import styles from "./Content.module.scss";

export function Content() {
  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <h1 className={styles.title}>Home title</h1>
      </div>
      <div className={styles.inner}>
        <div>Home page content</div>
      </div>
    </section>
  );
}
