import { useState } from "react";

import styles from "./Navbar.module.scss";

const MobileNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles["burger-wrapper"]}>
      <button
        onClick={() => setIsClicked((prev) => !prev)}
        className="rounded-[50%] active:bg-tertiary p-1"
      >
        {isClicked ? (
          <img src="./close.svg" alt="Close menu" width={35} height={35} />
        ) : (
          <img src="./menu.svg" alt="Open menu" width={35} height={35} />
        )}
      </button>

      {isClicked && (
        <ul
          className={
            isClicked
              ? `${styles.open} ${styles["mobile-menu"]} p-6`
              : `${styles["mobile-menu"]}`
          }
        >
          <li className="mb-6">
            <a href="/" className={styles.link}>
              Naslovna
            </a>
          </li>
          <li className="mb-6">
            <a href="/o-nama" className={styles.link}>
              O nama
            </a>
          </li>
          <li className="mb-6">
            <a href="/izolacija" className={styles.link}>
              Izolacija
            </a>
          </li>
          <li className="mb-6">
            <a href="/kontakt" className={styles.link}>
              Kontakt
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNavbar;
