import Image from 'next/image';
import { CheckBadgeIcon, CpuChipIcon } from '@heroicons/react/24/solid';
import { skillsList } from './utils';
import CoreySelfie from '../../../../public/CoreySelfie.png';

const AboutPage = () => {
  return (
    <>
      <section className="bg-zinc-900 text-white px-5 py-32 px-1  " id="about">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="about-img p-6">
            <Image
              src={CoreySelfie}
              alt="coding illustration"
              className="lgw-[80%] md:ml-auto object-contain"
            />
          </div>
          <div className="about-info px-6">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
              About Me
            </h2>

            <p className="pb-5">
              Hi, My Name Is Corey Samuels. I am a Frontend Developer. I build
              beautifull websites with React and Tailwind CSS.
            </p>
            <p className="pb-5">
              I am proficient in Frontend skills like React.js, Redux, Redux
              Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
            </p>

            <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

            <p>
              In my spare time I create YouTube videos and write blogs on my
              Blog. Where I talk about programming theory and build various
              projects.
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="bg-zinc-900 text-zinc-100 ">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <CpuChipIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
              ipsa delectus eum quo voluptas aspernatur accusantium distinctio
              possimus est.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skillsList.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-zinc-800 rounded flex p-4 h-full items-center">
                  <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
