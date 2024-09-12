import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Counter from './Counter';
import ConditionalRendering from './ConditionalRendering';
import EffectComponent from './EffectComponent';
import ItemList from './ItemList';
import UseStateComponent from './useStateComponent';

const RoutesComponent = () => {
  return (
    <Router>
      <nav className="nav">
        <Link to="/props">Props</Link>
        <a href="/">Contador</a>
        <Link to="/rendering">Renderização Condicional</Link>
        <Link to="/effect">useEffect</Link>
        <Link to="/state">useState</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/rendering" element={<ConditionalRendering />} />
        <Route path="/effect" element={<EffectComponent />} />
        <Route
          path="/props"
          element={<ItemList items={['React', 'JavaScript', 'HTML']} />}
        />
        <Route path="/state" element={<UseStateComponent />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
