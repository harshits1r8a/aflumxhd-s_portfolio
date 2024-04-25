import PropTypes from 'prop-types';

const Bubble = ({
  position,
  linearGradiant,
  width = 0,
  height = 0,
  top = 0,
  left = 0,
  opacity = 0,
  z_index = 0,
  animation
}) => {
  // Combine Tailwind utility classes for dynamic styling
  const bubbleClasses = `
     ${position} ${width} ${height} ${top} ${left}
    rounded-full overflow-hidden ${linearGradiant} ${opacity} ${z_index} ${animation}
  `;

  return <div className={bubbleClasses}></div>;
};

export default Bubble;

Bubble.propTypes = {
  linearGradiant: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  opacity: PropTypes.string.isRequired,
  z_index: PropTypes.string.isRequired,
  animation: PropTypes.string,
};

{
  /* <Bubble linearGradiant="bg-gradient-to-bl from-fuchsia-300 to-slate-100"  width="w-[500px]" height="h-[500px]" top="top-[-300px]" left="left-[-300px]" /> */
}
