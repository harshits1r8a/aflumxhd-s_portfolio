import { useEffect, useState } from 'react';
import Bubble from '../Bubble/Bubble';
import Skillball from '../Skillball/Skillball';
import Skilldata from '../../DB/Skilldata';
import Expdata from '../../DB/Expdata';
import Expyear from '../Expyear/Expyear';

const Experience = () => {
  const [skilldata, setSkilldata] = useState([]);
  const [cnt, setCnt] = useState(1);

  const expdata = Expdata;
  console.log(expdata);
  const singleExp = expdata.find((elm) => elm.page === cnt);
  console.log(singleExp);
  const dataExp = singleExp.data;

  // skillball
  useEffect(() => {
    setSkilldata(Skilldata);
  }, [skilldata]);

  // // expdata
  // useEffect(()=>{

  // },[])

  return (
    <div className="pl-[2.5rem] pr-[2.5rem]   h-[90vh]  w-screen  bg-background  overflow-hidden ">
      <div className="h-[20vh] w-full ">
        <h1 className="text-center pt-6 h-full font-semibold text-gray-800 font-DM  text-[42px] tracking-wide">
          Skills & Experience
        </h1>
      </div>


      <div className="h-[70vh] w-full flex ">

        <div className="  h-full z-30 w-[50%] flex justify-end items-start   pr-14">
          <div className=" flex  flex-wrap-reverse gap-10 w-[350px]  mt-10">
            {skilldata.map((skill, index) => (
              <Skillball skill={skill} key={index} />
            ))}
          </div>
        </div>


        <div className="h-full z-30 w-[50%] flex justify-start items-start    pl-14">
          <div className=" mt-10  ">
            <div className="h-[288px] w-[400px]">
              {dataExp.map((elm, index) => (
                <Expyear obj={elm} key={index} />
              ))}
            </div>
            <div className="flex justify-start items-center mt-3 gap-5">
              <button
                disabled={cnt == 1}
                onClick={() => setCnt((cnt) => cnt - 1)}
                className="bg-primary bg-opacity-40 text-white  h-5 w-5  flex justify-center items-center rounded-full  hover:scale-105 transition ease-in-out duration-300 shadow-gray-400  shadow-sm"
              >
                <i className="fa-solid fa-chevron-left  fa-xs"></i>
              </button>
              <button
                disabled={cnt == expdata.length}
                onClick={() => setCnt((cnt) => cnt + 1)}
                className="bg-primary bg-opacity-40 text-white  h-5 w-5  flex justify-center items-center rounded-full  hover:scale-105 transition ease-in-out duration-300 shadow-gray-400  shadow-sm"
              >
                <i className="fa-solid fa-chevron-right  fa-xs"></i>
              </button>
            </div>
          </div>
        </div>
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
