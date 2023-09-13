import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import Project from '../../_atoms/Project/Project';
import { projectsPageContent } from './utils';

const ProjectsPage: React.FC = () => {
  return (
    <section className="bg-zinc-900 container min-h-screen min-w-full ">
      <div className="flex items-center flex-col min-h-screen mb-0 ml-auto mr-auto mt-0 max-w-5xl w-full">
        <div className="text-center mt-10 mb-15">
          <WrenchScrewdriverIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Projects
          </h1>
        </div>
        <div className="h-auto w-full mb-10 flex-wrap flex justify-start p-5 space-x-0 bg-zinc-900 ">
          {projectsPageContent.projects.map((project, i) => (
            <Project key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
