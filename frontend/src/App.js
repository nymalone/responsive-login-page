import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { GlobalStyle } from './styles/global';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
