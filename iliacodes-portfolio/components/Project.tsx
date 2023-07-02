import React from 'react';
import ProjectCard from './ProjectCard';

interface Props {
  index: number;
  title: string;
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number; }>>;
}

const Project: React.FC<Props> = ({ index, title, setModal }) => {
  return (
    <div>
      <div className="project flex w-screen justify-between items-center p-10  border-t border-zinc-300 cursor-pointer transition-all duration-200 last:border-b hover:opacity-50 hover:h-2:translate-x-10 hover:p:translate-x-10"
        onMouseEnter={() => { setModal({ active: true, index: index }); }}
        onMouseLeave={() => { setModal({ active: false, index: index }); }}
      >
        <h2 className="text-4xl font-normal transition-all duration-400">{title}</h2>
        <p className="font-light transition-all duration-400">Short project details</p>
      </div>
      <div>
        {/* <ProjectCard /> */}
      </div>
    </div>
  );
};

export default Project;