import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <>
      <h1> {error.message} </h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
};

export default ErrorElement;
