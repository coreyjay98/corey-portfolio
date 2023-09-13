import Image, { StaticImageData } from 'next/image';

interface ProjectProps {
  title: string;
  image: StaticImageData;
  description: string;
  githubLink: string;
  hostLink?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  githubLink,
  hostLink,
}) => {
  return (
    <div className="h-auto flex flex-col justify-start items-center p-4 space-y-5 md:w-2/6 w-full">
      <div className="rounded-4xl h-48 object-cover w-full relative">
        <Image
          src={image}
          alt=""
          fill
          objectFit="cover"
          className="rounded-2xl"
          quality={100}
        />
      </div>
      <h3 className="flex items-center justify-center text-center font-extrabold text-xl">
        {title}
      </h3>
      <div className="flex items-center justify-center text-center flex-grow">
        {description}
      </div>
      <div className="flex gap-4 justify-center">
        <a
          href={githubLink}
          className="flex justify-center bg-zinc-700 p-3 rounded hover:cursor-pointer"
        >
          Github
        </a>
        {hostLink && (
          <a
            href={hostLink}
            className="flex justify-center bg-zinc-700 p-3 rounded hover:cursor-pointer"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
