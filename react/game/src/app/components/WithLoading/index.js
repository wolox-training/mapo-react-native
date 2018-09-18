import React from 'react';
import Spinner from 'react-spinkit';

const withLoading = initialLoading => Component => {
  const Loader = props =>
    initialLoading(props) ? (
      <div className="loader">
        <Spinner name="ball-pulse-rise" color="red" />
        <h2 className="loader-title">Loading game ...</h2>
      </div>
    ) : (
      <Component {...props} />
    );

  return Loader;
};

export default withLoading;
