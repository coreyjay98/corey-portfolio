import React from 'react';
import styles from './ProjectPanel.module.scss';
import { projectContent } from './utils';
import { GitHub } from '@mui/icons-material';
import useScreenResize from '../../../common/Hooks/useScreenResize';
import { WindowSize } from '../../../common/helpers/windowSize';
import { ProjectDirection } from '../../../common/types';

interface ProjectPanelProps {
  direction: ProjectDirection;
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({ direction }) => {
  const windowXSize = useScreenResize();
  return windowXSize > WindowSize.small ? (
    <div
      className={
        direction == ProjectDirection.Right
          ? `${styles.project} ${styles.projectRight}`
          : `${styles.project} ${styles.projectLeft}`
      }
    >
      {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        <img src={'https://placehold.co/600x400'} className={styles.image} />
      }
      <div className={styles.panel}>
        <div className={styles.text}>
          <h3 className={styles.title}>{projectContent.title}</h3>
          <p className={styles.description}>{projectContent.description}</p>
        </div>
        <div className={styles.links}>
          <a target="_blank" className={styles.link}>
            <GitHub fontSize="large" />
            <p>{projectContent.github}</p>
          </a>
          <a target="_blank" className={styles.link}>
            <GitHub fontSize="large" />
            <p>{projectContent.github}</p>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.flexContainer}>
      <div className={styles.flexItem}>
        <div className={styles.mobileImageHolder}>
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className={styles.mobileImage}
              src="https://placehold.co/600x400"
              alt="placeholder"
            />
          }
        </div>
      </div>
      <div className={styles.flexItem}>
        <div className={styles.mobileText}>
          <h4 className={styles.mobileTitle}>{projectContent.title}</h4>
          <p className={styles.mobileDescription}>
            {projectContent.description}
          </p>
        </div>
      </div>
      <div className={styles.flexItem}>
        <div className={styles.mobileLinks}>
          <a target="_blank" className={styles.mobileLink}>
            <GitHub fontSize="large" />
            <p>{projectContent.github}</p>
          </a>
          <a target="_blank" className={styles.mobileLink}>
            <GitHub fontSize="large" />
            <p>{projectContent.github}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
