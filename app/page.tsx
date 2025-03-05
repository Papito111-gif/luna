"use client"
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { section } from "motion/react-client";

const allProjects = [
  {
    title: "Project 1",
    description: "Description of project 1.",
    image: "/luna2.jpg"
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    image: "/luna12.jpg"
  },
  {
    title: "Project 3",
    description: "Description of project 3.",
    image: "/luna14.jpg"
  },
  {
    title: "Project 4",
    description: "Description of project 4.",
    image: "/luna16.jpg"
  },
  {
    title: "Project 5",
    description: "Description of project 5.",
    image: "/luna13.jpg"
  },
  {
    title: "Project 6",
    description: "Description of project 5.",
    image: "/luna17.jpg"
  },
  {
    title: "Project 7",
    description: "Description of project 5.",
    image: "/luna10.jpg"
  },
  {
    title: "Project 8",
    description: "Description of project 5.",
    image: "/luna15.jpg"
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
          <Link to="about" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer font-bold" onClick={startCounting}>About</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer font-bold">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer font-bold">Contact</Link>
        </nav>
        <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-2/3 bg-gray-800 p-5 z-50 shadow-lg md:hidden"
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
          <nav className="flex flex-col mt-20 space-y-6 text-lg font-semibold">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}

      <main className="p-10 text-center">
        <section id="about" className="py-20" onMouseEnter={startCounting}>
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4 text-gray-400 font-semibold">Luna Graphic Oasis is a design studio dedicated to crafting bold, impactful visuals that help businesses and entrepreneurs stand out. Specializing in branding, marketing materials, and custom graphics, we bring creativity and strategy together to create designs that not only look stunning but also serve a purpose.

Our work is tailored for small businesses, startups, and individuals who want to build a strong, recognizable brand. Whether you’re launching a new business, refreshing your visual identity, or looking for eye-catching promotional materials, Luna Graphic Oasis delivers designs that make an impression.

With expertise in CorelDRAW and Photoshop, we create logos, business cards, packaging, and digital graphics that reflect your brand’s personality and connect with your audience. Every project is approached with attention to detail, ensuring a professional and polished final product.</p>
          <div className="mt-6 text-4xl font-bold text-blue-500">Projects Completed: {projectCount}</div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="mt-6 grid grid-cols-3 grid-rows-3 gap-2 md:gap-6">
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
  <p className="mt-4 text-gray-400">Connect with us on:</p>

  <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0 justify-center items-center">
    {/* WhatsApp Link */}
    <a 
      href="https://wa.me/2349046090678" 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold flex items-center space-x-2"
    >
      <span>Chat on WhatsApp</span>
    </a>

    {/* Instagram Link */}
    <a 
      href="https://www.instagram.com/Lunagraphicoasis" 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-semibold flex items-center space-x-2"
    >
      <span>Follow on Instagram</span>
    </a>
  </div>
</section>
      </main>

      <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} Luna Graphic Oasis. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};
export default Home;
