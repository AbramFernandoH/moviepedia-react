import spinner from '../../assets/spinner.gif'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className='mt-5'>
        <img src={spinner} alt="Loading..." width={400} className="text-center mx-auto" />
      </div>
    </div>
  );
};

export default Spinner;