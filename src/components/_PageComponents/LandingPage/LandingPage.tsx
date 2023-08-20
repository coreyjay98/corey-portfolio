// import Image from 'next/image';
// import myLogo from '../../../../public/logo-black-back.png';
import styles from './LandingPage.module.scss';
import { landingPageContent } from './utils';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Socials from '../../_atoms/Socials/Socials';
// import SkillsIcons from '../../_atoms/SkillsIcons/SkillsIcons';

const LandingPage = () => {
  return (
    <section className="h-screen w-full content-center items-center justify-center">
      <div className=" wcontent-center items-center w-4/5 justify-center">
        <div className={styles.logoHolder}>
          {/*  <Image
            src={myLogo}
            width={150}
            height={150}
            quality={100}
            alt="Page Logo"
            layout="responsive"
          /> */}
        </div>
        <h1 className="content-center items-center text-center">
          {landingPageContent.name}
        </h1>
        <p className="content-center items-center text-center">
          {landingPageContent.description}
        </p>
        <Socials />
      </div>
      <div className={styles.pageBottom}>
        <ArrowCircleDownIcon sx={{ fontSize: 50, color: 'white' }} />
      </div>
    </section>
  );
};

export default LandingPage;
