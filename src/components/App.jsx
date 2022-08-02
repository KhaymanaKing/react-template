import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Home/Home';
import Layout from './Page/layout';
import List from './List/List';
import About from './About/About';
import Pokedex from './Pokedex/Pokedex';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import Families from './FuzzyBunny/Families';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext.jsx';
import Bunnies from './FuzzyBunny/Bunnies';
export default function App() {
  return (
    <Router>
      <Toaster />
      <FuzzyBunnyProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="list" element={<List />} />
            <Route path="about" element={<About />} />
            <Route path="pokedex" element={<Pokedex />} />
            <Route path="rabbits" element={<FuzzyBunny />}>
              <Route index element={<Families />} />
              <Route path="bunnies" element={<Bunnies />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace/>} />
          </Route>
        </Routes>
      </FuzzyBunnyProvider>
    </Router>
  );
}
