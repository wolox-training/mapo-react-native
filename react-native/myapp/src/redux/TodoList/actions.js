import { createTypes } from 'redux-recompose';

export const actions = createTypes(['ADD', 'REMOVE'], '@@LIST');

export const actionCreators = {
  add: item => ({ type: actions.ADD, payload: item }),
  remove: key => ({ type: actions.REMOVE, payload: key })
};
