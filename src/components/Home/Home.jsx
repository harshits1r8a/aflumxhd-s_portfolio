import Bubble from '../Bubble/Bubble';
import heroImg from '../../assets/hero.png';
import hand from '../../assets/hand.png';
import code from '../../assets/code.png';
import bulb from '../../assets/bulb.png';
import pc from '../../assets/pc.png';
const Home = () => {
  return (
    <div className="container relative h-[90vh]  w-screen bg-background border border-red-600">
      {/* Center hero showcase */}
      <div className="border border-green-500 w-full h-full flex justify-center items-center">
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
      <div className="absolute top-[160px] left-[220px]">
        <div className="flex gap-5 items-center bg-[#fff] rounded-xl px-8 py-6 shadow-lg">
          {/* img */}
          <div>
            <img src={hand} alt="" />
          </div>
          <div>
            <p className="font-DM font text-[16px] font-medium text-gray_2 leading-3">
              Hellow, I am
            </p>
            <h1 className="font-semibold text-h_black font-sans text-[52px] leading-tight mt-1">
              Aflaaah
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute top-[350px] left-[280px]">
        <div className="flex flex-col gap-2 items-center bg-[#fff] rounded-xl px-16 py-8 shadow-lg">
          <p className="font-DM font text-[16px] font-medium text-gray_2 leading-none uppercase tracking-wide">
            FLUTTER DEVELOPER
          </p>
          <p className="font-DM font text-[16px] font-medium text-gray_2 leading-none uppercase tracking-wide">
            ANDROID AND IOS
          </p>
        </div>
      </div>

      {/* hero-skills */}
      <div className="absolute top-[100px] right-[340px]">
        <div className='flex flex-col items-center gap-3'>
        <div className="flex justify-center items-center bg-[#fff] h-[80px] w-[80px] rounded-full">
          <img src={code} className="w-12" alt="" />
        </div>
        <p className="font-DM font text-[14px] font-semibold text-gray-600 leading-none uppercase tracking-wide">
        MOBILE DEVELOPMENT 
        </p>
        </div>
      </div>


      <div className="absolute top-[260px] right-[220px]">
        <div className='flex flex-col items-center gap-3'>
        <div className="flex justify-center items-center bg-gradient-to-bl from-fuchsia-300 to-zinc-100 h-[130px] w-[130px] rounded-full">
          <img src={pc} className="w-[260px] object-cover -ml-10 -mt-8"  alt="" />
        </div>
        <p className="font-DM font text-[14px] font-semibold text-gray-600 leading-none uppercase tracking-wide">
        UI DESIGNING 
        </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
