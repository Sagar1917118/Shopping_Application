import './App.css';
import Navbar from './Components/Navbar';
import CompBody from './Components/CompBody';
import Cart from './Components/Cart';
import {Routes,Route} from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App flex flex-col  justify-center items-center gap-2">
      <Toaster></Toaster>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CompBody/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/view-product/:id" element={<ProductDetail></ProductDetail>}></Route>
     </Routes>
    </div>
  );
}

export default App;
