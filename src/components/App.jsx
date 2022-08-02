import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Home/Home';
import Layout from './Page/layout';
import About from './About/About';
import Pokedex from './Pokedex/Pokedex';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import Families from './FuzzyBunny/Families';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext.jsx';
import Bunnies from './FuzzyBunny/Bunnies';

export default function App() {
  return (
    <Router>
      {/* toaster is what a library that allows for easy clean pop-up  */}
      <Toaster />
      {/* Fuzzy Bunny Provider global state for my bunnies. 
      I believe its so when i click off the page and go back 
      it doesn't clear the state */}
      <FuzzyBunnyProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="pokedex" element={<Pokedex />} />
            <Route path="fuzzy-bunny" element={<FuzzyBunny />}>
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
