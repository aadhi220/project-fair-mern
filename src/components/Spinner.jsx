import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
   <div style={{height:"40vh"}} className='w-100 d-flex justify-content-center align-items-center'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
   </div>
  );
}

export default LoadingSpinner;