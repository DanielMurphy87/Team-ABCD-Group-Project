import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import ErrorComponent from "@/pages/errors/ErrorComponent";

interface ebcProps {
  component: React.ReactNode
}

const FallbackRender = ({ resetErrorBoundary, error }: FallbackProps) =>
  <ErrorComponent message={error?.message} />

const ErrorBoundedComponent: React.FC<ebcProps> = ({component}) => {

    return (
    <ErrorBoundary fallbackRender={FallbackRender} >
        {component}
    </ErrorBoundary>
    )
}


export default ErrorBoundedComponent;