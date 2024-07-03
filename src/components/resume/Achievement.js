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
          
         
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Student Coordinator at TACS, (MEA college CS Student Association)"
            
          />
          
          <ResumeCard
            title="Hosting Volunteer at Hridiyam (NSS SPECIAL CAMP) at MEAEC"
            
          />
          <ResumeCard
            title="Volunteer of Enonva 2.0 under IEDC MEAEC SB (National level tech fest)"
            
          />
          <ResumeCard
            title="NSS Unit 110 volunteer at MEAEC"
            
          />
          <ResumeCard
            title="Assistant social officer of IEDC MEAEC SB"
            
          />
          <ResumeCard
            title="Assistant Program officer of IEDC MEAEC SB"
            
          />
          
        </div>
      </div>
     
    </motion.div>
  );
}

export default Education