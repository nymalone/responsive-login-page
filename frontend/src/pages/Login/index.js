import { Redirect } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import { Header } from '../../components/atoms/Header';
import { Footer } from '../../components/atoms/Footer';
import { Form } from '../../components/molecules/Form';
import { Background } from '../../components/atoms/Background';

import { Container, Content, AnimatedContainer, Title } from './styles';

export function Login() {
  const context = useAuth();
  if (context.signedIn) {
    return <Redirect to="/success" />;
  }
  return (
    <Container>
      <Content>
        <Header />
        <AnimatedContainer>
          <Title>
            Welcome back to <span>OrgaFarm</span>
          </Title>
          <Form />
        </AnimatedContainer>
        <Footer />
      </Content>
      <Background />
    </Container>
  );
}
