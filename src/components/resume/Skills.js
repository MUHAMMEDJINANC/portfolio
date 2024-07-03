import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">React Js</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">Python</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">Java</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">C++</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">JavaScript</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">Html</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">Css</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">SQL</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">Bootstrap & Tailwind</p>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Soft Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">communication skill</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">project management</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">team management</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">leading</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">teaching</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">time management</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">adaptability</p>
          </div>
          <div className="overflow-x-hidden border border-designColor rounded-lg p-2">
            <p className="text-lg uppercase font-bold">problem solving</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
