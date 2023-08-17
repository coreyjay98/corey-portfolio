'use client';
import './globals.css';
import PageLayout from '../src/Layouts/PageLayout';
import ProjectsPage from '../src/components/_PageComponents/ProjectsPage/ProjectsPage';
import LandingPage from '../src/components/_PageComponents/LandingPage/LandingPage';

const Page = () => {
  return (
    <PageLayout>
      <LandingPage />
      <ProjectsPage />
    </PageLayout>
  );
};

export default Page;
