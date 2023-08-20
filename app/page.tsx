'use client';
import './globals.css';
import PageLayout from '../src/Layouts/PageLayout';
import AboutPage from '../src/components/_PageComponents/AboutPage/AboutPage';

const Page = () => {
  return (
    <>
      <PageLayout>
        <AboutPage />
      </PageLayout>
    </>
  );
};

export default Page;
