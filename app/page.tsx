'use client';
import './globals.css';
import PageLayout from '../src/Layouts/PageLayout';
import AboutPage from '../src/components/_PageComponents/AboutPage/AboutPage';
import LandingPage from '../src/components/_PageComponents/LandingPage/LandingPage';

const Page = () => {
  return (
    <>
      <PageLayout>
        <section className="h-full ">
          <LandingPage />
        </section>
        <AboutPage />
      </PageLayout>
    </>
  );
};

export default Page;
