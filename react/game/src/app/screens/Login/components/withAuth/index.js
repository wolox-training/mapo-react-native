import React from 'react';
import { Redirect } from 'react-router-dom';

import LIST from '../../../../../constants/routes';

const withAuth = loggingState => Component => {
  const ifAuth = props => (loggingState(props) ? <Redirect to={LIST.GAME.path} /> : <Component {...props} />);

  return ifAuth;
};

export default withAuth;
