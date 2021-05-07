import { useAuth } from '../../context/AuthContext';

import { Button } from '../../components/atoms/Button';

import { Container } from './styles';
import { AnimatedContainer } from '../Login/styles';

export function Success() {
  const { Logout } = useAuth();

  function handleLogout() {
    Logout();
  }

  return (
    <Container>
      <AnimatedContainer>
        <h1>It's really great to see you here!</h1>
        <Button data-cy="logout-button" type="submit" onClick={handleLogout}>
          Logout
        </Button>
      </AnimatedContainer>
    </Container>
  );
}
