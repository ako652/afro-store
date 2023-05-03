

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbarme } from './components/Navbarme';
import {Cart} from './pages/cart/Cart';
import {Shop} from './pages/shop/Shop';
import { ShopContextProvider } from './context/Shop-Context';
  

function App() {
  
  return <div className='App'>
    <ShopContextProvider>
    <Router>
      <Navbarme />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route  path ='/cart'  element={<Cart />}/>
      </Routes> 
    </Router>
    </ShopContextProvider>


  </div>

    
  
}

export default App;
