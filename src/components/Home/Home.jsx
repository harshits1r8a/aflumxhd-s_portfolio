import Bubble from '../Bubble/Bubble';
import heroImg from '../../assets/hero.png';
import hand from '../../assets/hand.png';
import code from '../../assets/code.png';
import bulb from '../../assets/bulb.png';
import pc from '../../assets/pc.png';
const Home = () => {
  return (
    <div className=" relative h-[90vh]  w-screen bg-background  overflow-hidden">
      {/* Center hero showcase */}
      <div className=" w-full h-full flex justify-center items-center">
        <Bubble
          position="absolute"
          linearGradiant="bg-gradient-to-bl from-fuchsia-300 to-slate-50"
          width="w-[510px]"
          height="h-[510px]"
          top="top-[10]"
          left="left-[80]"
          opacity="opacity-50"
          z_index="z-0"
        />
        <img src={heroImg} className="w-[500px] z-20" alt="Logo" />
      </div>

      {/* card */}
      <div className="absolute top-[160px] left-[230px]">
        <div className="flex gap-5 items-center bg-[#fff] rounded-xl px-8 py-6 shadow-lg">
          {/* img */}
          <div>
            <img src={hand} className="w-[50px]" alt="" />
          </div>
          <div>
            <p className="font-DM font text-[16px] font-medium text-gray_2 leading-3">
              Hellow, I am
            </p>
            <h1 className="font-bold text-gray-800 font-sans  text-[50px] leading-tight mt-1">
              Aflaaah
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute top-[350px] left-[320px]">
        <div className="flex flex-col gap-2 items-center bg-[#fff] rounded-xl px-10 py-6 shadow-lg">
          <p className="font-DM font text-[16px] font-medium text-gray_2 leading-none uppercase tracking-wide">
            FLUTTER DEVELOPER
          </p>
          <p className="font-DM font text-[16px] font-medium text-gray_2 leading-none uppercase tracking-wide">
            ANDROID AND IOS
          </p>
        </div>
      </div>

      {/* hero-skills */}
      <div className="absolute top-[80px] right-[360px]">
        <div className="flex flex-col items-center gap-3">
          <div className="flex justify-center items-center bg-[#fff] h-[80px] w-[80px] rounded-full">
            <img src={code} className="w-12" alt="" />
          </div>
          <p className="font-DM font text-[14px] font-bold text-gray-600 leading-none uppercase tracking-wide">
            MOBILE DEVELOPMENT
          </p>
        </div>
      </div>

      <div className="absolute top-[240px] right-[240px]">
        <div className="flex flex-col items-center gap-3">
          <div className="flex justify-center items-center bg-gradient-to-bl from-fuchsia-300 to-zinc-100 h-[130px] w-[130px] rounded-full">
            <img
              src={pc}
              className="w-[260px] object-cover -ml-10 -mt-8"
              alt=""
            />
          </div>
          <p className="font-DM font text-[14px] font-bold text-gray-600 leading-none uppercase tracking-wide">
            UI DESIGNING
          </p>
        </div>
      </div>

      <div className="absolute top-[440px] right-[380px]">
        <div className="flex flex-col items-center gap-3">
          <div className="flex justify-center items-center bg-[#1664FF] bg-opacity-[80%]  h-[60px] w-[60px] rounded-full">
            <img
              src={bulb}
              className="w-[230px] object-cover mt-[4px] ml-[1px]"
              alt=""
            />
          </div>
          <p className="font-DM font text-[14px] font-bold text-gray-600 leading-none uppercase tracking-wide">
            Testing
          </p>
        </div>
      </div>

      {/* bubble */}
      <Bubble
        position="absolute"
        linearGradiant="bg-gradient-to-bl from-fuchsia-300 to-slate-50"
        width="w-[75px]"
        height="h-[75px]"
        top="top-[400px]"
        left="left-[130px]"
        opacity="opacity-70"
        z_index="z-0"
      />

      <Bubble
        position="absolute"
        linearGradiant="bg-gradient-to-br from-fuchsia-300 to-zinc-100"
        width="w-[55px]"
        height="h-[55px]"
        top="top-[500px]"
        left="left-[270px]"
        opacity="opacity-70"
        z_index="z-0"
      />

      <Bubble
        position="absolute"
        linearGradiant="bg-gradient-to-tl from-fuchsia-300 to-zinc-100"
        width="w-[95px]"
        height="h-[95px]"
        top="top-[615px]"
        left="left-[330px]"
        opacity="opacity-70"
        z_index="z-0"
      />

      <Bubble
        position="absolute"
        linearGradiant="bg-gradient-to-br from-fuchsia-300 to-zinc-100"
        width="w-[100px]"
        height="h-[100px]"
        top="top-[605px]"
        left="right-[470px]"
        opacity="opacity-60"
        z_index="z-0"
      />
    </div>
  );
};

export default Home;
