import ProjectsDisplay from "../../ProjectsDisplay/ProjectsDisplay";
import styles from "./ProjectsPage.module.scss";
import { projectsPageContent } from "./utils";

const ProjectsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.centered}>
        <div className={styles.text}>
          <h1 className={styles.title}>{projectsPageContent.title}</h1>
          <p className={styles.description}>
            {projectsPageContent.description}
          </p>
        </div>
        <div className={styles.display}>
          <ProjectsDisplay />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
