import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import Layout from './Page/layout';
import List from './List';
import About from './about';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}
