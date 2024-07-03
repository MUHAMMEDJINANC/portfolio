import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Btech in Computer Science"
            subTitle="Mea engineering collage (2020 - 2024)"
            result="7.00/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          
          <ResumeCard
            title="higher Secondary School Education"
            subTitle="Mes hss mampad (2018 - 2020)"
            result="88%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="high School Education"
            subTitle="Mes hss mampad (2015 - 2018)"
            result="93%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
     
    </motion.div>
  );
}

export default Education