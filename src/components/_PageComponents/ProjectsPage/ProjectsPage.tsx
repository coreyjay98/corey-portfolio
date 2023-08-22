import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import placeholderImage from '../../../../public/placeholder.jpg';
import Image from 'next/image';

const Project = () => {
  return (
    <div className="h-auto flex flex-col justify-start space-y-5 flex items-center p-4 space-y-2 md:w-2/6 w-full">
      <div className="rounded-4xl h-48 object-cover w-full relative">
        <Image
          src={placeholderImage}
          alt=""
          fill
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex items-center justify-center text-center">
        The quick brown fox jumps over the lazy dog. The quick brown fox jumps
        over the lazy dog. The quick brown fox jumps over the lazy dog. The
        quick brown fox jumps over the lazy dog.
      </div>
      <div>
        <span className="h-6 mdi mdi-grain w-6"></span>
        <div className="flex justify-center">Github</div>
      </div>
    </div>
  );
};
const ProjectsPage = () => {
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
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
