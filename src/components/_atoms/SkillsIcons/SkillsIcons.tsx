import Image from 'next/image';
import styles from './SkillsIcons.module.scss';
import {
  CssLogo,
  JavascriptLogo,
  HTML5Logo,
  TypescriptLogo,
  ReactLogo,
} from '../../../../public/Logos';

const SkillsIcons = () => {
  return (
    <div className={styles.iconsHolder}>
      <div className={styles.imageContainer}>
        <Image src={TypescriptLogo} fill alt="Typescript Logo" quality={100} />
      </div>
      <div className={styles.imageContainer}>
        <Image src={ReactLogo} fill alt="React Logo" />
      </div>
      <div className={styles.imageContainer}>
        <Image src={JavascriptLogo} fill alt="Javascript Logo" />
      </div>
      <div className={styles.imageContainer}>
        <Image src={CssLogo} fill alt="Css Logo" />
      </div>
      <div className={styles.imageContainer}>
        <Image src={HTML5Logo} fill alt="HTML5 Logo" />
      </div>
    </div>
  );
};

export default SkillsIcons;
