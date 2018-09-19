import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import LIST from '../../../../../constants/routes';

const withAuth = (loggingState, authError) => Component => {
  const ifAuth = props =>
    loggingState(props) ? (
      <Redirect to={LIST.GAME.path} />
    ) : authError(props) !== '' ? (
      <Fragment>
        <Component {...props} />
        <p>{authError(props)}</p>
      </Fragment>
    ) : (
      <Component {...props} />
    );
  return ifAuth;
};

export default withAuth;
