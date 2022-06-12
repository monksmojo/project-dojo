import { Routes, Route } from "react-router-dom";

import Navbar from "../components/header/Navbar";
import Homepage from "./HomePage";
import AboutPage from "./AboutPage";
import ExperiencePage from "./ExperiencePage";
import SkillPage from "./SkillPage";
import ContactsPage from "./ContactsPage";
import Footer from "../components/Footer/Footer";
import ResumePage from "./ResumePage";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </>
  );
}
export default LandingPage;
