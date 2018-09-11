const CORRECT_AUTH = 'CORRECT_AUTH';
const INCORRECT_AUTH = 'INCORRECT_AUTH';

const actionCreators = {
  login: { type: CORRECT_AUTH },
  error: { type: INCORRECT_AUTH }
};

export default actionCreators;
