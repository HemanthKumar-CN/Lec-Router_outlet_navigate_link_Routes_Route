import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom'
import Product from './components/Product';
import Error from './components/Error';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/*' element={<Products />}>
          <Route path=':id' element={<Product />} />
          {/* <Route path='/products/:id' element={<Product />} /> */}
          {/* this is for nested wheren value is obtained from child else to create a new page can create a new route, ex: line 18 */}
          </Route>
        <Route path='*' element={<Error/>} />
      </Routes>



      {/* <Home/>
    <About/>
    <Products/> */}
    </div>
  );
}

export default App;
