'use client';
import React, { useState, useEffect } from 'react';
import Project from '../../components/Project';
import ProjectMobile from '../../components/ProjectMobile';
import Modal from '../../components/Modal';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


interface ProjectItem {
  title: string;
  description: string;
  src: string;
  color: string;
  link: string;
}

const Projects: React.FC = () => {

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      let iteration = 0;
      const originalText = (event.target as HTMLElement).dataset.value as string;

      let interval = setInterval(() => {
        (event.target as HTMLElement).innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 5;
      }, 6);
    };

    const h1Elements = document.querySelectorAll('h1');
    h1Elements.forEach((element) => {
      element.addEventListener('mouseover', handleMouseOver);
    });

    return () => {
      h1Elements.forEach((element) => {
        element.removeEventListener('mouseover', handleMouseOver);
      });
    };
  }, []);

  const [modalState, setModalState] = useState<{ active: boolean; index: number; }>({
    active: false,
    index: 0,
  });

  const projects: ProjectItem[] = [
    {
      title: 'Fan Connect',
      description: 'Creator subscription platform built on Aurora. ',
      src: '/LandingPage.png',
      color: '#9F9',
      link: 'fan-connect'
    },
    {
      title: 'Moonshot',
      description: 'Real-time price tracking for crypto, stocks, and NFTs.',
      src: '/World.png',
      color: '#9F9',
      link: 'moonshot'

    },
    {
      title: 'Mythos',
      description: 'Landing page for an NFT project built on Unity.',
      src: '/Condensed_Logo.png',
      color: '#9F9',
      link: 'mythos',
    },
  ];

  return (
    <div>
      <div className="flex-col items-center justify-center">
        <Header />
        <SubHeader />
      </div>
      <div className="my-32">
        <p className="sm:text-[18px] text-[16px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0">Work + projects.</p>
        <h1 data-value="Projects Completed." className="text-white md:text-[60px] sm:text-[50px] text-[40px] p-5 xl:mx-64 xl:p-0">
          Projects Completed.
        </h1>
      </div>
      <div className="h-100vh items-center justify-center hidden sm:block ">
        <div className="flex flex-col items-center justify-center  ">
          {projects.map((project, index) => {
            return <Project
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              link={project.link}
              setModal={setModalState}
            />;
          })}
        </div>
        <Modal modal={modalState} projects={projects} closeModal={() => setModalState({ active: false, index: 0 })} />
      </div>
      <div className="sm:hidden">
        <div>
          {projects.map((project, index) => {
            return <ProjectMobile
              key={index}
              index={index}
              title={project.title}
              link={project.link}
              src={project.src}
            />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
