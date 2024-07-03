import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ENHANCING VISUAL INDEPENDENCE : A REAL-TIME OBJECT DETECTION AND VOICE
FEEDBACK FOR THEVISUALLY IMPAIRED"
          des=" Smart shoes which helps for visually impaired individuals to detect obstacles and Pit direction
in front of a blind and give feedback as voice command through headset and live GPS tracking
and navigation.
"
          src={projectOne}
        />
        <ProjectsCard
          title="AUTOMATIC WASTE BASKET"
          des="An automatic waste basket uses sensors to detect motion, opening the lid hands-free for convenient and hygienic disposal of trash, promoting cleanliness and reducing contact with germs."
          src={projectTwo}
        />
        <ProjectsCard
          title="travel packege booking system"
          des=" A travel package booking system streamlines trip planning, allowing users to browse, select, and book vacation packages online, including accommodations, transportation, and activities."
          src={projectThree}
        />
       
      </div>
    </section>
  );
}

export default Projects