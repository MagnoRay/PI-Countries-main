import './App.css';

import {Routes, Route, useLocation} from "react-router-dom";


import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import CoDetail from './components/CoDetail/CoDetail';
import Nav from './components/Nav/Nav';
import FormActivity from './components/FormActivity/FormActivity';
import Footer from './components/Footer/Footer';
import axios from 'axios';

axios.defaults.baseURL ="https://pi-countries-main-production-88a4.up.railway.app";
//axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <Nav />}
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'/detail/:id'} element={<CoDetail />} />
        <Route path={'/newact'} element={<FormActivity />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
