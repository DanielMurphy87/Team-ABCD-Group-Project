import { ErrorBoundary, withErrorBoundary, ErrorBoundaryProps } from "react-error-boundary";
import ErrorComponent from "@/pages/errors/ErrorComponent";

interface ebcProps {
    component: React.ReactNode;    
}

const ErrorBoundedComponent: React.FC<ebcProps> = ({component}) => {

    return (
    <ErrorBoundary fallback={<ErrorComponent error={Error('Something went wrong')} />} >
        {component}
    </ErrorBoundary>
    )
}

export default ErrorBoundedComponent;