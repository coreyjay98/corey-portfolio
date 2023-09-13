import placeholderImage from '../../../../public/placeholder.jpg';
import twitterClone from '../../../../public/twitterClone.png';
import portfolioImage from '../../../../public/portfolioImage.png';
import myWardrobe from '../../../../public/myWardrobe.png';
import bestOfTheRest from '../../../../public/bestOfTheRest.png';

export const projectsPageContent = {
  title: 'My Projects',
  description:
    'Here I have linked projects that i have recently worked on, ranging from finished to in development',
  projects: [
    {
      title: 'Twitter Clone',
      image: twitterClone,
      description:
        'A Twitter clone using Next.js, React, and Tailwind CSS, backed by Supabase for real-time data storage. It replicates key Twitter features for a dynamic web experience. Sign in using "corey@gmail.com" and an empty password to see the site',
      githubLink: 'https://github.com/coreyjay98/twitter-clone',
      hostLink: 'https://twitter-clone-k9r3.vercel.app',
    },
    {
      title: 'UniChat - (WIP)',
      image: placeholderImage,
      description:
        'UniChat is a dynamic instant messaging app developed with WebSockets, Next.js, React, Supabase, and Tailwind CSS. It offers real-time message translation using the DeepL API, creating an engaging and multilingual chat experience.',
      githubLink: 'https://github.com/coreyjay98/UniChat',
    },
    {
      title: 'My portfolio',
      image: portfolioImage,
      description:
        'You are here! I crafted a robust portfolio website with Next.js, React, and TypeScript, showcasing my skills with a stylish, responsive design, and seamless user experience.',
      githubLink: 'https://github.com/coreyjay98/corey-portfolio',
    },
    {
      title: 'Fantasy Football',
      image: placeholderImage,
      description:
        'Fantasy App is a full-fledged fantasy football application with user authentication, powered by JWT and bcrypt. Users can create teams, select 11 Premier League players, and save their teams. The app provides team and player statistics, as well as up-to-date Premier League data, including the league table, top scorers, and fixtures, all sourced from the Football API.',
      githubLink: 'https://github.com/coreyjay98/fantasyApp',
    },
    {
      title: 'myWardrobe',
      image: myWardrobe,
      description:
        "Get your style sorted with My Wardrobe - an application that lets you plan, save, and create your outfits at the touch of a button. Snap pictures of your clothes, schedule what you're going to wear, and ensure you never wear the same thing twice. Technologies Used: JavaScript, Node.js, Express, Express-handlebars, MySQL, Sequelize, cKey, Cloudinary",
      githubLink: 'https://github.com/coreyjay98/myWardrobe',
    },
    {
      title: 'Best of the Rest',
      image: bestOfTheRest,
      description:
        'This was a group project that I implemented most of the JavaScript features for. We used JavaScript, jQuery, HTML, CSS, Zomato API and Google maps API to create a site that searched for the nearest restaurants in an area and ordered them, by ratings or cuisines.',
      githubLink: 'https://github.com/coreyjay98/BestOfTheRest',
      hostLink: 'https://coreyjay98.github.io/BestOfTheRest/',
    },
  ],
};
