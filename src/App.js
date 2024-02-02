import React from 'react';
import './App.css';
import MyNav from './components/MyNav';
import { Route,Routes } from 'react-router-dom';
import Help from './pages/Help';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import SignUp from './pages/SignUp';


function App() {

  return (
    <div className='App'>
    <MyNav/>
    <Routes>
      <Route path='alma'>
      <Route path='help' element={<Help/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      </Route>
      <Route path='signup' element={<SignUp/>}/>
       {/*Written slash for index route , we can change it to contact*/}
      <Route path='products' element={<Products/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='products/:ItemId' element={<Products/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;
