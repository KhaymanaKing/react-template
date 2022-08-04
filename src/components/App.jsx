import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.jsx';
import { Toaster } from 'react-hot-toast';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext.jsx';
import UserProvider from '../state/context/UserContext.jsx';

export default function App() {
  return (
    <UserProvider>
      <FuzzyBunnyProvider>
        <Toaster />
        <Router>
          <Routes/>
        </Router>
      </FuzzyBunnyProvider>
    </UserProvider>
  );
}
