import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center"></div>
      <div className="flex justify-center items-center">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setAchievementData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi text-center`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setAchievementData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi text-center`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setAchievementData(true);
            }}
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi text-center`}
          >
            Achievements
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievement />}
      </div>
    </section>
  );
}

export default Resume;
