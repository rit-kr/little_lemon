import './App.css';
import Home from './Home';
// import Header from './Header';
import BookingPage from './BookingPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App">
    <Routes> 
      <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
  </Routes>
    </div>
    </>
  );
}

export default App;
