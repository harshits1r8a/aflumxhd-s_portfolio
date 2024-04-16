import { NavLink, useParams } from 'react-router-dom';
const Navbar = () => {
  useParams;
  return (
    <>
      <div className="container   w-full h-[10vh] m-auto bg-background z-40">
        <div className="flex gap-16 justify-center items-end h-full pb-1 font-DM font-medium text-[16px] uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` duration-200 ${
                isActive ? 'text-primary' : 'text-gray-500'
              }  hover:text-primary`
            }
          >
            <div className="flex justify-center">
              <div className="h-1 w-1 rounded-full bg-primary mb-2 "></div>
            </div>
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `duration-200 ${
                isActive ? 'text-primary' : 'text-gray-500'
              } hover:text-primary`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `duration-200 ${
                isActive ? 'text-primary' : 'text-gray-500'
              } hover:text-primary`
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/testimonial"
            className={({ isActive }) =>
              `duration-200 ${
                isActive ? 'text-primary' : 'text-gray-500'
              } hover:text-primary`
            }
          >
            Testimonial
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `duration-200 ${
                isActive ? 'text-primary' : 'text-gray-500'
              } hover:text-primary`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div className='inline pl-[2.5rem] mb-[2.5rem]  absolute bottom-0 left-0 z-40'>
      <a href="https://twitter.com/afluxmhd0"><i className="mt-5 fa-brands fa-x-twitter border-2 border-primary rounded-full text-white bg-primary h-6 w-6 flex justify-center items-center p-5 hover:bg-white hover:text-gray_2 duration-300 hover:border-gray_1"></i></a>
      <a href="https://www.instagram.com/afluxmhd/"><i className="mt-5 fa-brands fa-instagram border-2 border-gray_1 rounded-full text-gray_2 bg-white h-6 w-6 flex justify-center items-center p-5 hover:border-primary  hover:bg-primary hover:text-white duration-300"></i></a>
      <a href="https://twitter.com/afluxmhd0"><i className="mt-5 fa-brands fa-facebook-f border-2 border-gray_1 rounded-full text-gray_2 bg-white h-6 w-6 flex justify-center items-center p-5 hover:border-primary  hover:bg-primary hover:text-white duration-300"></i></a>
      </div>
    </>
  );
};

export default Navbar;
