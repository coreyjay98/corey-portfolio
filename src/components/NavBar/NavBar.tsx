"use client";
import Image from "next/image";
import styles from "./NavBar.module.scss";
import myLogo from "../../../public/logo-black-back.png";
import { useEffect, useState } from "react";
import { WindowSize } from "../../common/helpers/windowSize";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.navBar}>
      <div className={styles.image}>
        <Image
          src={myLogo}
          alt="CJ logo"
          width={90}
          height={90}
          layout="responsive"
        />
      </div>
      <div className={styles.flexHolder}>
        {windowSize < WindowSize.small ? (
          <div className={styles.menu}>
            <MenuIcon fontSize="large" />
          </div>
        ) : (
          <>
            <div className={styles.textWrapper}>
              <p className={styles.text}>About</p>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.text}>About</p>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.text}>About</p>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.text}>About</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default NavBar;
