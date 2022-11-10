import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Mainpage from './components/mainpage/Mainpage'
import { Routes, Route} from 'react-router-dom';
import Europe from "./components/europe/Europe";
import Asia from "./components/asia/Asia";
import Africa from "./components/africa/Africa";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Mainpage />} />
        <Route path='/europe' element= {<Europe />} />
        <Route path='/asia' element= {<Asia />} />
        <Route path='/africa' element= {<Africa />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
