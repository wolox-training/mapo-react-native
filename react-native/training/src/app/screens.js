// https://github.com/react-community/react-navigation/issues/458
// once that issue is resolved, the initial loading screen is no longer needed and should be removed
//  in favour of setting the initialRoute as a prop of the navigator

import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import * as Routes from '../constants/routes';
import { stackNavConfig, screensNavOptions, tabNavConfig } from '../config/navigation';

import Login from './screens/Login';
import TodoList from './screens/TodoList';
import Dummy from './screens/Dummy';
import BookDetails from './screens/Dummy/screens/BookDetails';

// ------------------ Initial loading screen
// TODO: URGENT! Move this component to a separated file and use it ONLY if the project has login.

class InitialLoadingScreen extends PureComponent {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.initialLoading) {
      nextProps.navigation.replace(nextProps.currentUser ? Routes.Todos : Routes.Login);
    }
  }

  render() {
    return null;
  }
}
InitialLoadingScreen.propTypes = {
  initialLoading: PropTypes.bool,
  currentUser: PropTypes.shape({
    sessionToken: PropTypes.string.isRequired
  }),
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired
  })
};
const loadingScreenMapStateToProps = store => ({
  currentUser: store.auth.currentUser,
  initialLoading: store.auth.initialLoading
});
const InitialLoadingScreenContainer = connect(loadingScreenMapStateToProps)(InitialLoadingScreen);
// TODO: URGENT! Move this component to a separated file and use it ONLY if the project has login.
// ------------------ Initial loading screen end

export default createStackNavigator(
  {
    [Routes.InitialLoading]: {
      screen: InitialLoadingScreenContainer,
      navigationOptions: screensNavOptions[Routes.InitialLoading]
    },
    [Routes.Login]: {
      screen: Login,
      navigationOptions: screensNavOptions[Routes.Login]
    },
    [Routes.Todos]: {
      screen: createBottomTabNavigator(
        {
          [Routes.Todos]: {
            screen: TodoList,
            navigationOptions: screensNavOptions[Routes.Todos]
          },
          [Routes.Dummy]: {
            screen: Dummy,
            navigationOptions: screensNavOptions[Routes.Dummy]
          }
        },
        tabNavConfig
      ),
      navigationOptions: screensNavOptions[Routes.Todos]
    },
    [Routes.BookDetails]: {
      screen: BookDetails
    }
  },
  stackNavConfig
);
