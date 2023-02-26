
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Register from './Pages/Register';
import SingeProduct from './Pages/SingeProduct';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path ="/product" element={<Products/>}/>
        <Route path='/list/:id' element={<SingeProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
