import R1 from '../../assets/r1.png';
import R2 from '../../assets/r2.png';
import R3 from '../../assets/r3.png';
import R4 from '../../assets/r4.png';
import R5 from '../../assets/r5.png';
import R6 from '../../assets/r6.png';
import R7 from '../../assets/r7.png';
import R8 from '../../assets/r8.png';
import Bubble from '../Bubble/Bubble';
const Projects = () => {
  return (
    <>
      <div className="pl-[2.5rem] pr-[2.5rem]  relative   h-[90vh]  w-screen  bg-background  overflow-hidden">
        <div className="h-[20vh] w-full">
          <h1 className="text-center pt-6 h-full font-semibold text-gray-800 font-DM  text-[42px] tracking-wide">
            Projects Built on Multiple Platform
          </h1>
        </div>
        <div className="hidden  h-[70vh] w-full sm:flex gap-5">
          <div className=" flex flex-col gap-5 h-full w-[39%] z-20">
            <div className=" h-[32%] flex justify-end">
              <img
                src={R1}
                alt="nike-web-clone"
                className="h-full hover:scale-105 transition ease-in-out duration-300"
              />
            </div>
            <div className=" flex gap-5 h-[68%] ">
              <div className=" flex gap-5 flex-col h-full w-[62%]">
                <div className=" flex justify-end h-[38%]">
                  <img
                    src={R2}
                    alt="user-management-system"
                    className="h-full object-cover object-center hover:scale-105 transition ease-in-out duration-300"
                  />
                </div>
                <div className="flex justify-end h-[62%]">
                  <img
                    src={R4}
                    alt="crypto"
                    className="w-[180px] hover:scale-105 transition ease-in-out duration-300"
                  />
                </div>
              </div>
              <div className=" h-[90%] w-[38%] ">
                <img
                  src={R3}
                  alt="notes-app"
                  className="w-full h-full object-fill object-center hover:scale-105 transition ease-in-out duration-300"
                />
              </div>
            </div>
          </div>
          <div className=" h-full w-[22%] z-20">
            <img
              src={R5}
              alt="Qahwa Space"
              className="w-full object-cover hover:scale-105 transition ease-in-out duration-300"
            />
          </div>
          <div className=" h-full flex gap-5 flex-col w-[39%] z-20">
            <div className=" flex gap-5 h-[58%] ">
              <div className="w-[34%] h-full ">
                <img
                  src={R6}
                  alt="crypto"
                  className="w-[180px] h-full object-fill object-center hover:scale-105 transition ease-in-out duration-300"
                />
              </div>
              <div className="w-[68%] flex justify-start items-end h-full">
                <img
                  src={R7}
                  alt="pick drop"
                  className="w-full hover:scale-105 transition ease-in-out duration-300"
                />
              </div>
            </div>
            <div className=" h-[40%] flex justify-start mb-4">
              <img
                src={R8}
                alt="med emergency"
                className=" object-fill object-center hover:scale-105 transition ease-in-out duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bubbles */}
        <Bubble
          position="absolute"
          linearGradiant="bg-gradient-to-bl from-fuchsia-300 to-slate-50"
          width="w-[510px]"
          height="h-[510px]"
          top="top-[200px]"
          left="left-[520px]"
          opacity="opacity-40"
          z_index="z-0"
        />

        <Bubble
          position="absolute"
          linearGradiant="bg-gradient-to-br from-amber-100 to-slate-100"
          width="w-[300px]"
          height="h-[300px]"
          top="top-[280px]"
          left="right-[-180px]"
          opacity="opacity-100"
          z_index="z-0"
        />

        <Bubble
          position="absolute"
          linearGradiant="bg-gradient-to-br from-fuchsia-400 to-slate-100"
          width="w-[100px]"
          height="h-[100px]"
          top="top-[150px]"
          left="left-[130px]"
          opacity="opacity-30"
          z_index="z-0"
        />

        <Bubble
          position="absolute"
          linearGradiant="bg-gradient-to-br from-pink-400 to-slate-100"
          width="w-[100px]"
          height="h-[100px]"
          top="bottom-[-50px]"
          left="left-[357px]"
          opacity="opacity-100"
          z_index="z-0"
        />

        <Bubble
          position="absolute"
          linearGradiant="bg-gradient-to-br from-emerald-300 to-slate-100"
          width="w-[55px]"
          height="h-[55px]"
          top="top-[275px]"
          left="left-[440px]"
          opacity="opacity-100"
          z_index="z-0"
        />
      </div>
    </>
  );
};

export default Projects;
