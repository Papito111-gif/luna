"use client"
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

const allProjects = [
  {
    title: "Project 1",
    description: "Description of project 1.",
    image: "/luna2.jpg"
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    image: "/luna3.jpg"
  },
  {
    title: "Project 3",
    description: "Description of project 3.",
    image: "/luna4.jpg"
  },
  {
    title: "Project 4",
    description: "Description of project 4.",
    image: "/luna5.jpg"
  },
  {
    title: "Project 5",
    description: "Description of project 5.",
    image: "/luna6.jpg"
  }
];

const Home = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setShowWelcome(false), 3000);
  }, []);

  const startCounting = () => {
    setProjectCount(0);
    let count = 0;
    const interval = setInterval(() => {
      if (count < 77) {
        setProjectCount(prev => prev + 1);
        count++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  return (
    <div className="min-h-screen text-white bg-gray-900">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="A responsive portfolio built with Next.js, Tailwind CSS, and TypeScript." />
      </Head>

      {showWelcome && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50"
        >
          <h1 className="text-3xl font-bold"> Luna Graphics Oasis</h1>
        </motion.div>
      )}
      
      <header className="p-5 flex justify-between items-center w-full shadow-lg bg-gray-800">
        <div className="text-xl font-bold">Luna Graphics Oasis</div>
        <nav className="hidden md:flex space-x-4">
          <Link to="about" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer" onClick={startCounting}>About</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Contact</Link>
        </nav>
        <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu />
        </button>
      </header>
      
      <main className="p-10 text-center">
        <section id="about" className="py-20" onMouseEnter={startCounting}>
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4 text-gray-400">We have been creating innovative and high-quality web solutions since 2023. Our mission is to build efficient, scalable, and user-friendly applications using modern technologies.</p>
          <div className="mt-6 text-4xl font-bold text-blue-500">Projects Completed: {projectCount}</div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.slice(0, visibleProjects).map((project, index) => (
              <div key={index} className="p-5 rounded-lg shadow-lg bg-gray-800 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded" />
              </div>
            ))}
          </div>
          {visibleProjects < allProjects.length && (
            <button
              onClick={() => setVisibleProjects(visibleProjects + 2)}
              className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
            >
              See More
            </button>
          )}
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-gray-400">Contact us on WhatsApp:</p>
          <a href="https://wa.me/+2349046090678" className="text-lg font-semibold text-blue-400 hover:underline">Chat on WhatsApp</a>
        </section>
      </main>

      <footer className="p-5 text-center bg-gray-800">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
