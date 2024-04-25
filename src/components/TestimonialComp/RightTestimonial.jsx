import PropTypes from 'prop-types';
const RightTestimonial = ({description}) => {
  const value = description.star;
  return (
    <div className="w-[500px]">
      <h1 className="font-DM text-gray-800 font-medium text-[30px]">{description.title}</h1>
      <span>
        <i
          className={`
          text-[#dacb14]
          ${
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`
          text-[#dacb14]
          ${
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`
          text-[#dacb14]
          ${
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`
          text-[#dacb14]
          ${
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`
          text-[#dacb14]
          ${
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }`}
        ></i>
      </span>
      <p className="font-DM font-normal mt-5 text-gray-600 ">{description.message}
      </p>
    </div>
  );
};

RightTestimonial.propTypes = {
  description: PropTypes.object,
};
export default RightTestimonial;
