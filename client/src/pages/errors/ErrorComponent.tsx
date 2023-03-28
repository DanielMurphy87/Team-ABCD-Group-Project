import './error.scss';

interface errorProps {
    error: Error;
}

const ErrorComponent: React.FC<errorProps> = ({error}) => {
    return (
      <div className='container error error_details'>
        <h1 className='error_title'>{error.message}</h1>
      </div>
    );
  };
  
export default ErrorComponent;