import { useAuth } from '../context/AuthContext';
import {
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

const AuthRoute = ({ isPrivate = false, component: Component, ...rest }) => {
  const { signedIn } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({location}) => {
        return (isPrivate && signedIn) || !isPrivate ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default AuthRoute;
