import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import WorkExperience from "./components/experience/WorkExperience";
import Projects from "./components/project/Projects";
import Navbar from "./components/user/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<WorkExperience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
