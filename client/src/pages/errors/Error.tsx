
interface errorProps {
    message:string;
}

const Error: React.FC<errorProps> = ({message}) => {
    return (
      <div className='container'>
        <h1>{message}</h1>
      </div>
    );
  };
  
export default Error;