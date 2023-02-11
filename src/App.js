import './App.css';
import Home from './Home';
// import Header from './Header';
import { useState } from 'react';
import BookingPage from './BookingPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [table, setTable] = useState([]);

  return (
    <>
    <div className="App">
    <Routes> 
      <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<BookingPage table={table}/>}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
