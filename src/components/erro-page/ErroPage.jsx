import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div
      style={{ margin: 'auto' }}
      className="error-page-wrapper"
    >
      <h1>Page not found...</h1>
      <Link to={ "/" }>Go to back</Link>
    </div>
  );
};

export default ErrorPage;