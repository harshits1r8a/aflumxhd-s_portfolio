import PropTypes from 'prop-types';

const LeftTestimonial = ({ person }) => {

  

  return (
    <div className="inline-block m-4 w-[380px] ">
      <div  className="flex justify-start items-center gap-5    ">
        <div>
          <img
            src={person.img}
            alt={person.name}
            className="w-[60px] h-[60px] object-cover object-center rounded-full"
          />
        </div>
        <div>
          <h1 className="font-DM font-semibold leading-none text-[22px]  capitalize">
            {person.name}
          </h1>
          <p className="text-gray-500 font-DM font-semibold text-[14px] capitalize">
            {person.pos}
          </p>
        </div>
      </div>
    </div>
  );
};

LeftTestimonial.propTypes = {
  person: PropTypes.object,
};

export default LeftTestimonial;
