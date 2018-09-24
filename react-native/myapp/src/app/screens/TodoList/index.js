import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todos from './layout';

class TodosContainer extends Component {
  render() {
    return <Todos />;
  }
}

export default connect()(TodosContainer);
