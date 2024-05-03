import './App.css';
import Filters from './Filters';
import Header from "./Header";
import Card from './components/Cards';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import ProductDetail from './productDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Filters />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
