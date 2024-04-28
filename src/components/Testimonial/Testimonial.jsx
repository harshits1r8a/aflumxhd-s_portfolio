import { useEffect, useState } from 'react';
import LeftTestimonial from '../TestimonialComp/LeftTestimonial';
import RightTestimonial from '../TestimonialComp/RightTestimonial';
import Testimonialdata from '../../DB/Testimonialdata';
import Bubble from '../Bubble/Bubble';
import './Scroll.css';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [leftindex, setLeftIndex] = useState(1);

  useEffect(() => {
    setTestimonials(Testimonialdata);
  }, []);
  console.log(leftindex);

  const panels = document.querySelectorAll('.panel');
  // panels[0].classList.add('active')

  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      removeActive();
      panel.classList.add('active');
    },true);
  });

  function removeActive() {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
  }

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
          <div className=" h-full  flex flex-col justify-start  overflow-y-scroll pr-10 pl-10 scroll ">
            {testimonials.map((elm, index) => (
              <div
                className={`${index === 1 ? 'active' : ''} panel rounded-lg cursor-pointer  transition ease-in-out duration-300   hover:shadow-lg hover:scale-105 hover:bg-white mt-5`}
                key={index}
                onClick={() => setLeftIndex(index)}
              >
                <LeftTestimonial person={elm} />
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className=" h-full  w-[50%]  flex justify-start  items-start pt-5  pl-14">
          {testimonials.map(
            (elm, index) =>
              index === leftindex ? ( // Condition
                <RightTestimonial description={elm.description} key={index} />
              ) : null // Or another component/element if not positive
          )}
        </div>
      </div>

      {/* Bubbles */}

      <Bubble
        position="absolute"
        linearGradiant="bg-gradient-to-bl from-violet-500 to-slate-100"
        width="w-[500px]"
        height="h-[500px]"
        top="top-[550px]"
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
