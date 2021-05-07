import { Switch } from 'react-router-dom';

import AuthRoute from './AuthRoute';

import { Login } from '../pages/Login';
import { Success } from '../pages/Success';

const Routes = () => (
  <Switch>
    <AuthRoute path="/" exact component={Login} />
    <AuthRoute path="/success" component={Success} isPrivate />
  </Switch>
);

export default Routes
