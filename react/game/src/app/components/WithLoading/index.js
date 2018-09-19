import React from 'react';
import Spinner from 'react-spinkit';

const withLoading = (loader, txt) => Component => {
  const Loader = props =>
    loader(props) ? (
      <div className="loader">
        <Spinner name="ball-pulse-rise" color="red" />
        <h2 className="loader-title">{txt}</h2>
      </div>
    ) : (
      <Component {...props} />
    );

  return Loader;
};

export default withLoading;
