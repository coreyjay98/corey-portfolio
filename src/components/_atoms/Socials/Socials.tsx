'use client';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
import styles from './Socials.module.scss';
import { socialsLinks } from './utils';

const Socials = () => {
  return (
    <div className={`${styles.socialsHolder} bg-zinc-600 p-4`}>
      <a href={socialsLinks.linkedIn} target="_blank" className={styles.link}>
        <LinkedIn fontSize="large" sx={{ '&:hover': { color: '#0072b1' } }} />
      </a>
      <a href={socialsLinks.gitHub} target="_blank" className={styles.link}>
        <GitHub fontSize="large" sx={{ '&:hover': { color: '#d4d4d8' } }} />
      </a>
      <Mail
        fontSize="large"
        sx={{ '&:hover': { color: '#d4d4d8', cursor: 'pointer' } }}
      />
    </div>
  );
};

export default Socials;
