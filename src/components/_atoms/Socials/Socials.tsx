"use client";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import styles from "./Socials.module.scss";
import { socialsLinks } from "./utils";

const Socials = () => {
  return (
    <div className={styles.socialsHolder}>
      <a href={socialsLinks.linkedIn} target="_blank" className={styles.link}>
        <LinkedIn fontSize="large" />
      </a>
      <a href={socialsLinks.gitHub} target="_blank" className={styles.link}>
        <GitHub fontSize="large" />
      </a>
      <Mail fontSize="large" />
    </div>
  );
};

export default Socials;
