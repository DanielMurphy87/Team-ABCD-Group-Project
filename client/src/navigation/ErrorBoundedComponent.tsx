import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import ErrorComponent from "@/pages/errors/ErrorComponent";

interface ebcProps {
  component: React.ReactNode
}

const FallbackRender = ({ resetErrorBoundary, error }: FallbackProps) =>
  <ErrorComponent message={error?.message} />

/*


    <ScreenWrapper>
      <ScrollView>
        <MyHeader>App Crashed:</MyHeader>
        <MyText style={{ marginVertical: 40, fontSize: 16 }}>
          {error?.message}
        </MyText>
        <MyButton onPress={resetErrorBoundary}>reload app</MyButton>
      </ScrollView>
    </ScreenWrapper>
  );

const = ErrorFallback => ({error:Error resetErrorBoundary}) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }
  */
  /*
  const ui = (
    <ErrorBoundary
      fallbackRender={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <ComponentThatMayError />
    </ErrorBoundary>
  )

interface ebcProps {
    component: React.ReactNode;    
}
*/

const ErrorBoundedComponent: React.FC<ebcProps> = ({component}) => {

    return (
    <ErrorBoundary fallbackRender={FallbackRender} >
        {component}
    </ErrorBoundary>
    )
}


export default ErrorBoundedComponent;