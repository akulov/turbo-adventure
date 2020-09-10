import React, { useState } from "react";
import "styles/index.scss";
import styles from "./App.module.scss";
import { Content, Footer, Header, Sidebar } from "components";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header
        isTogglerOpen={isSidebarOpen}
        onTogglerClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className={styles.mainContentWrap}>
        <Sidebar isOpen={isSidebarOpen} />
        <div className={styles.contentWrap}>
          <Content />
          <Footer />
        </div>
      </div>
    </>
  );
}
