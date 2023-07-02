'use client';
import React, { useState, useEffect } from 'react';
import Project from '../../components/Project';
import Modal from '../../components/Modal';
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ProjectItem {
  title: string;
  description: string;
  src: string;
  color: string;
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
      }, 10);
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

  const showModal = (index: number) => {
    setModalState({ active: true, index });
  };

  const projects: ProjectItem[] = [
    {
      title: 'Project 1',
      description: 'This is a project',
      src: '/logo.png',
      color: '#9F9',
    },
    {
      title: 'Project 2',
      description: 'This is a project',
      src: '/bbq.png',
      color: '#9F9',
    },
    {
      title: 'Project 3',
      description: 'This is a project',
      src: '/logo.png',
      color: '#9F9',
    },
  ];

  return (
    <div>
      <div className="my-48 flex items-center justify-center text-[64px]">
        <h1 data-value="Projects Completed">
          0x6046945c5b5EF5933b8
        </h1>
      </div>
      <div className="flex h-100vh items-center justify-center">
        <div className="flex w-100vh flex-col items-center justify-center">
          {projects.map((project, index) => {
            return <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModalState}
              showModal={showModal}
            />;
          })}
        </div>
        <Modal modal={modalState} projects={projects} closeModal={() => setModalState({ active: false, index: 0 })} />
      </div>
    </div>
  );
};

export default Projects;
