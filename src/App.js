import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restuarantlist from './components/Restuarantlist';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ViewRest from './components/ViewRest';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
  
      
          <Routes>
            {/* path setting */}
            <Route path='/' element={<Restuarantlist/>} />
            <Route path='/view-restaurant/:id' element={<ViewRest/>}/>
          </Routes>
       
  
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
