'use client';
import { useEffect } from 'react';
import Test2 from '../../testingFiles/Test2';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import experiences from '../../components/constants/experiences';
import SubHeader from '@/components/SubHeader';
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



interface Experience {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}




const ExperienceCard: React.FC<{ experience: Experience; }> = ({ experience }) => (

  <VerticalTimelineElement
    contentStyle={{ background: "#555d50 ", color: "#8DB6A8" }}
    contentArrowStyle={{ borderRight: "7px solid  #8DB6A8" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image src={experience.icon} alt={experience.company_name}
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[white] text-[24px] font-bold">{experience.title}</h3>
      <p className="text-[#D2E2DF] text-[24px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((desc, index) => (
        <li key={`experience-point-${index}`} className="text-[#D2E2DF] text-[14px] pl-1 tracking-wider">
          {desc}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);


const Journey = () => {
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

  return (
    <>
      <div className="flex-col items-center justify-center">
        <Header />
        <SubHeader />
      </div>
      <motion.div
        className="my-32"
      >
        <p className="sm:text-[18px] text-[16px] text-[#D2E2DF] uppercase tracking-wider p-5 xl:mx-64 xl:p-0">Journey so far.</p>
        <h1 className="text-white md:text-[60px] sm:text-[50px] text-[40px] p-5 xl:mx-64 xl:p-0" data-value="Experience.">Experience.</h1>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      {/* < Test2
      showAnimation={true}
      /> */}
      <Footer />

    </>
  );
};

export default Journey;