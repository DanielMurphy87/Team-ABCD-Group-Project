import Fragment from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@/pages/errors/Error";

interface ebcProps {
    component: React.ReactNode;    
}

const ErrorBoundedComponent: React.FC<ebcProps> = ({component}) =>
    <ErrorBoundary fallback={<Error message='Something went wrong' />} >
        {component}
    </ErrorBoundary>

export default ErrorBoundedComponent;