import Bubble from '../Bubble/Bubble';
const Contact = () => {
  return (
    <div className="pl-[2.5rem] pr-[2.5rem]  relative h-[90vh]  w-screen  bg-background  overflow-hidden ">
      <div className="h-[20vh] w-full  ">
        <h1 className=" text-center pt-6  font-semibold text-gray-800 font-DM  text-[42px] tracking-wide">
          Ready to Work, Let’s Chat
        </h1>
        <p className="text-center text-gray-500 font-DM font-medium text-[16px]">
          Let’s work together and i’ll help you by all the best{' '}
        </p>
      </div>
      <div className="h-[70vh] w-full flex ">
        <div className=" h-full z-30 w-[50%] flex justify-end items-start pt-28 pr-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19825.27944255721!2d77.62531482543237!3d13.1051896157557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae191736187a37%3A0x3092096ba7fb4c9b!2sREVA%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1713467981634!5m2!1sen!2sin"
            width="300"
            height="300"
            className="shadow-[-30px_-28px_0px_0px_rgba(52,60,173,24%)] rounded-l-[25px]"
            style={{ border: '' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" h-full  w-[50%]  flex justify-start  items-start pt-20 pl-14">
          <form action="" method='POST'>
            <h1 className=" text-left  font-semibold text-gray-800 font-DM  text-[26px] tracking-wide">
              Get in touch
            </h1>
            <div className="flex gap-5 mt-10">
              <div className="relative h-11 w-[50%]">
                <input
                  placeholder="Full Name"
                  type="text"
                  name='Full Name'
                  required
                  className="peer h-full w-full border-b border-gray-400 border-opacity-70 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Full Name
                </label>
              </div>
              <div className="relative h-11 w-[50%]">
                <input
                  placeholder="Email"
                  type="text"
                  name='Email'
                  required
                  className="peer h-full w-full border-b border-gray-400 border-opacity-70 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
            </div>
            <div className="relative h-11 w-full min-w-[200px] mt-12">
              <textarea
                placeholder="Message"
                type='text'
                className="peer h-full w-full border-b border-gray-400 border-opacity-70 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Message
              </label>
            </div>
            <button type='submit' className='mt-14 font-DM bg-[rgba(52,60,173,24%)] text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-[rgba(52,60,173,26%)] hover:text-gray-800 transition ease-in-out duration-300'>Contact</button>
          </form>
        </div>
      </div>

      {/* Bubbles */}

      <Bubble
        position="absolute"
        linearGradiant="bg-gradient-to-tl from-purple-400 to-slate-100"
        width="w-[500px]"
        height="h-[500px]"
        top="top-[450px]"
        left="right-[-200px]"
        opacity="opacity-70"
        z_index="z-0"
      />
    </div>
  );
};

export default Contact;
