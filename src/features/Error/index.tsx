import React from 'react';

interface ErrorPageProps {
  message?: string;
}

const Error: React.FC<ErrorPageProps> = ({ message }) => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">Oops! Something went wrong</h1>
      <p className="error-page__message">{message}</p>
      <a className="error-page__link" href="/">
        Back to Home
      </a>
    </div>
  );
};

export default Error;
