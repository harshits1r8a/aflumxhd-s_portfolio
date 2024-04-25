import PropTypes from 'prop-types';
const Skillball = ({ skill }) => {
  return (
    <div
      className={`h-[80px] w-[80px] flex flex-col justify-center items-center gap-1  ${skill.bg} ${skill.bg_opacity} rounded-full hover:scale-110 transition ease-in-out duration-300`}
    >
      <img src={skill.img} alt={skill.img_text} className="w-[30px] mt-1" />
      <p className="font-DM ">{skill.score}</p>
    </div>
  );
};

Skillball.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default Skillball;
