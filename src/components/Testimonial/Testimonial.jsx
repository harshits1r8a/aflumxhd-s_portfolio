import { useEffect, useState } from 'react';
import LeftTestimonial from '../TestimonialComp/LeftTestimonial';
import RightTestimonial from '../TestimonialComp/RightTestimonial';
import Testimonialdata from '../../DB/Testimonialdata';
import Bubble from '../Bubble/Bubble';
import './Scroll.css'

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(Testimonialdata);
  }, []);
  console.log(testimonials);

  return (
    <div className="pl-[2.5rem] pr-[2.5rem]  relative h-[90vh]  w-screen  bg-background  overflow-hidden ">
      <div className="h-[20vh] w-full  ">
        <h1 className=" text-center pt-6  font-semibold text-gray-800 font-DM  text-[42px] tracking-wide">
          What People Say About Me :)
        </h1>
      </div>

      <div className="h-[70vh] w-full flex ">
        {/* left side */}
        <div className=" h-[350px] z-30 w-[50%] flex justify-end items-start     ">
          <div className=' h-full flex flex-col justify-start  overflow-y-scroll pr-10 scroll'>
            {testimonials.map((elm, index) => (
              <LeftTestimonial person={elm} key={index} />
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className=" h-full  w-[50%]  flex justify-start  items-start  pl-14">
         <RightTestimonial />
        </div>
      </div>

      {/* Bubbles */}

      <Bubble
        position="absolute"
        linearGradiant="bg-gradient-to-bl from-violet-500 to-slate-100"
        width="w-[500px]"
        height="h-[500px]"
        top="top-[530px]"
        left="left-[510px]"
        opacity="opacity-40"
        z_index="z-0"
      />
    </div>
  );
};

export default Testimonial;

// <div>
//   
// </div>
