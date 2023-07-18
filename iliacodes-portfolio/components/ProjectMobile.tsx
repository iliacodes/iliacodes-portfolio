import React from "react";

interface Props {
  index: number;
  title: string;
  link: string;
  src: string;
}

const Project: React.FC<Props> = ({ index, title, link, src }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <div className="">
      <div
        className={`project flex w-screen justify-between items-center p-20 border-t border-zinc-300 cursor-pointer transition-all duration-200 last:border-b hover:opacity-50 hover:h-2:translate-x-10 hover:p:translate-x-10 bg-cover bg-center`}
        style={{ backgroundImage: `url(${src})` }}
        onClick={handleClick}
      >
        {/* <h2 className="text-2xl font-normal transition-all duration-400">{title}</h2> */}
      </div>
    </div>
  );
};

export default Project;
