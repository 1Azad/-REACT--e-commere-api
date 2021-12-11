
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Switch, Route } from 'react-router-dom';

import { Products } from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' > <Home /></Route >
        <Route exact path='/products' > <Products /></Route >
        <Route exact path='/products/:id' > <Product /></Route >
        <Route exact path='/cart' > <Cart /></Route >
      </Switch>

    </>
  );
}

export default App;
