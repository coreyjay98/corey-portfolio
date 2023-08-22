import './globals.css';
import AboutPage from '../src/components/_PageComponents/AboutPage/AboutPage';
import LandingPage from '../src/components/_PageComponents/LandingPage/LandingPage';
import ProjectsPage from '../src/components/_PageComponents/ProjectsPage/ProjectsPage';
import RootLayout from './layout';

const Page = () => {
  return (
    <RootLayout>
      <LandingPage />
      <AboutPage />
      <ProjectsPage />
    </RootLayout>
  );
};

export default Page;
