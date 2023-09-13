import Image from 'next/image';
import { CheckBadgeIcon, CpuChipIcon } from '@heroicons/react/24/solid';
import { aboutPageContent, skillsList } from './utils';
import CoreySelfie from '../../../../public/CoreySelfie.png';

const AboutPage = () => {
  return (
    <>
      <section className="bg-zinc-900 text-white px-5 py-32  " id="about">
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

            <p className="pb-5">{aboutPageContent.about.text}</p>
            <p className="pb-5">{aboutPageContent.about.secondaryText}</p>
          </div>
        </div>
      </section>
      <section id="skills" className="bg-zinc-900 text-zinc-100 ">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <CpuChipIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              {aboutPageContent.skills.title}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              {aboutPageContent.skills.text}
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
