
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Homes/Home/Home';
import AddData from './Component/Pages/Homes/AddData/AddData';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/add' element={<AddData></AddData>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
