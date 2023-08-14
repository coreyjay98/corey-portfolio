import Image from "next/image";
import myLogo from "../../../public/logo-black-back.png";
import styles from "./LandingPage.module.scss";
import { landingPageContent } from "./utils";
import { Icon } from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Socials from "../_atoms/Socials/Socials";

const LandingPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.centered}>
        <div className={styles.logoHolder}>
          <Image
            src={myLogo}
            width={150}
            height={150}
            quality={100}
            alt="Page Logo"
            layout="responsive"
          />
        </div>
        <h1 className={styles.name}>{landingPageContent.name}</h1>
        <p className={styles.description}>{landingPageContent.description}</p>
        <Socials />
      </div>
      <div className={styles.pageBottom}>
        <ArrowCircleDownIcon sx={{ fontSize: 50, color: "white" }} />
      </div>
    </div>
  );
};

export default LandingPage;
