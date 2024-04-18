import { useEffect, useState } from 'react';
import Bubble from '../Bubble/Bubble';
import Skillball from '../Skillball/Skillball';
import Skilldata from '../../DB/Skilldata';
const Experience = () => {
  const [skilldata, setSkilldata] = useState([]);
  useEffect(() => {
    setSkilldata(Skilldata);
  }, [skilldata]);

  return (
    <div className="pl-[2.5rem] pr-[2.5rem]   h-[90vh]  w-screen  bg-background  overflow-hidden ">
      <div className="h-[20vh] w-full">
        <h1 className="text-center pt-6 h-full font-semibold text-gray-800 font-DM  text-[42px] tracking-wide">
          Skills & Experience
        </h1>
      </div>
      <div className="h-[70vh] w-full flex ">
        <div className=" h-full z-30 w-[50%] flex justify-center items-start mt-10">
          <div className="flex  flex-wrap-reverse gap-10 max-w-[55%]">
            {skilldata.map((skill, index) => (
              <Skillball skill={skill} key={index} />
            ))}
          </div>
        </div>
        <div className="bg-green-600 bg-opacity-20 h-full z-30 w-[50%] "></div>
      </div>

      {/* Bubbles */}

      <Bubble
        position="absolute"
        linearGradiant="bg-gradient-to-br from-violet-500 to-slate-100"
        width="w-[500px]"
        height="h-[500px]"
        top="top-[-200px]"
        left="left-[-200px]"
        opacity="opacity-30"
        z_index="z-0"
      />
    </div>
  );
};

export default Experience;
