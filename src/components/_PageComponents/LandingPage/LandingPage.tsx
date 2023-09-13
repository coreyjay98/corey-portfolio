import Image from 'next/image';
import myLogo from '../../../../public/logo-black-back.png';
import { landingPageContent } from './utils';
import Socials from '../../_atoms/Socials/Socials';

const LandingPage = () => {
  return (
    <section className="h-screen w-full content-center items-center justify-center flex flex-col ">
      <section className="md:h-3/4  flex direction-column flex-col items-center  w-4/5 justify-center mb-4">
        <div className="rounded-4xl h-48 object-cover w-full relative ">
          <Image
            src={myLogo}
            quality={100}
            unoptimized
            alt="Page Logo"
            fill
            objectFit="contain"
            className="md:p-5 p-0"
          />
        </div>
        <h1 className="mb-4 text-6xl md:text-8xl font-extrabold tracking-wide content-center items-center text-center flex">
          {landingPageContent.name}
        </h1>
        <p className="content-center items-center text-center flex  md:w-2/4 w-full">
          {landingPageContent.description}
        </p>
        <Socials />
      </section>
    </section>
  );
};

export default LandingPage;
