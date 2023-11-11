import Project_Section from "@/components/Pages/Projects/Project_Section";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import Navbar from "@/components/Ui/Navbar/Navbar";
import React from "react";

const Projects = () => {
  return (
    <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 bg-background2 scroll-smooth">
      <Navbar />
      <MainTitle heading={"Projects"} picture={""} />
      <Project_Section />
      {/* <Footer /> */}
    </main>
  );
};

export default Projects;
