import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/user/Navbar";
import NotFound from "./components/NotFound";
import AboutMe from "./components/about/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";

export default function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/aboutme" element={<AboutMe />} />
        <Route path="/blog/blog" element={<Blog />} />
        <Route path="/porfolio/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
