import { ProjectDirection } from '../../common/types';
import ProjectPanel from '../_atoms/ProjectPanel/ProjectPanel';
import styles from './ProjectsDisplay.module.scss';

const ProjectsDisplay = () => {
  return (
    <div className={styles.projectsDisplay}>
      <ProjectPanel direction={ProjectDirection.Left} />
      <ProjectPanel direction={ProjectDirection.Right} />
      <ProjectPanel direction={ProjectDirection.Left} />
      <ProjectPanel direction={ProjectDirection.Right} />
      <ProjectPanel direction={ProjectDirection.Left} />
      <ProjectPanel direction={ProjectDirection.Right} />
      <ProjectPanel direction={ProjectDirection.Left} />
      <ProjectPanel direction={ProjectDirection.Right} />
    </div>
  );
};

export default ProjectsDisplay;
