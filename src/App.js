import './App.css';
import AppRouter from './components/AppRouter'
import NavBar from "./components/NavBar";
import AnimatedLine from "./components/AnimatedLine";
import { Container } from "react-bootstrap";
import Products from './components/Products';
import { useDispatch } from 'react-redux';
import { getCategories } from './store/categories/categoriesSlice';
import { getProducts } from './store/categories/productsSlice';
import { useEffect } from 'react';
import Home from './components/Home';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <NavBar/>
      <Container>
        <AppRouter/>
      </Container>
       

    </div>

    
  );
}

export default App;
