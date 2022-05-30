import { Routes, Route } from "react-router-dom";

import Navbar from "../components/header/Navbar";
import Homepage from "./HomePage";
import AboutPage from "./AboutPage";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
export default LandingPage;
