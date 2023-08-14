import "./globals.css";
import LandingPage from "../src/components/LandingPage/LandingPage";
import NavigationBar from "../src/components/NavigationBar/NavigationBar";
import PageLayout from "../src/Layouts/PageLayout";
import NavBar from "../src/components/NavBar/NavBar";

const Page = () => {
  return (
    <PageLayout>
      <LandingPage />
    </PageLayout>
  );
};

export default Page;
