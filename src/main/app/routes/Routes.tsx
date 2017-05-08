import * as React from 'react'
import {
  Route
} from 'react-router-dom'
import MainPage from '../pages/mainPage/MainPage';

interface IRoutes {}

/**
 * Default routes for this application.
 */
class Routes extends React.Component<IRoutes, any> {
  render() {
    return (
        <Route path="/" component={MainPage}/>
    );
  }
}

export default Routes;