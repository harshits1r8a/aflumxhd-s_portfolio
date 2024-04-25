import PropTypes from 'prop-types';

const Expyear = ({obj}) => {
  return (
    <div className='flex justify-start gap-20 mb-8'>
      <h1 className='font-DM font-semibold text-[16px] text-gray-800'>{obj.year}</h1>
      <div>
      {
        obj.pos.map((elm,index)=>(
          <div key={index} className='mb-1'>
            <h1 className='font-DM font-semibold text-[20px] text-gray-800  '>{elm.role}</h1>
            <p className='text-gray-500 font-DM font-semibold text-[12px]'>{elm.firm}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

Expyear.propTypes = {
  obj: PropTypes.object,
  // year: PropTypes.number.isRequired,
  // pos:PropTypes.object.isRequired,
};

export default Expyear
