import './App.css';
import AppRouter from './components/AppRouter'
import NavBar from "./components/NavBar";

import { useDispatch } from 'react-redux';
import { getCategories } from './store/categories/categoriesSlice';
import { getProducts } from './store/categories/productsSlice';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <NavBar/>
      <AppRouter/>
    </div>

    
  );
}

export default App;
