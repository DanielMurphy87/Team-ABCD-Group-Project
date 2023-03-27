import './error.scss';

interface errorProps {
    message:string;
}

const Error: React.FC<errorProps> = ({message}) => {
    return (
      <div className='container error error_details'>
        <h1 className='error_title'>{message}</h1>
      </div>
    );
  };
  
export default Error;