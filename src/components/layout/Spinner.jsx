import spinner from '../../assets/spinner.gif'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className='w-100 mt-5'>
        <img src={spinner} alt="Loading..." width={180} className="text-center mx-auto" />
      </div>
    </div>
  );
};

export default Spinner;