interface errorProps {
    message:string;
}

const Error: React.FC<errorProps> = ({message}) => {
    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  };
  
export default Error;