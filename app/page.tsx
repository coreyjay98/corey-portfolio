"use client";
import "./globals.css";
import NavigationBar from "../src/components/NavigationBar/NavigationBar";
import PageLayout from "../src/Layouts/PageLayout";
import NavBar from "../src/components/NavBar/NavBar";
import ProjectsPage from "../src/components/_PageComponents/ProjectsPage/ProjectsPage";
import LandingPage from "../src/components/_PageComponents/LandingPage/LandingPage";

const Page = () => {
  return (
    <PageLayout>
      <LandingPage />
      <ProjectsPage />
    </PageLayout>
  );
};

export default Page;
