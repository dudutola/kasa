import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Header from './components/Header';
// import AccommodatContainer from './components/AccommodatContainer';
import Footer from './components/Footer';
import Error from './components/Error';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/accommodation/:id' element={<Accommodation />} />
        {/* <Route path='/accommodation/:id' element={<AccommodatContainer />} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/logement' element={<Logement />} />
//         <Route path='*' element={<Error />} />
//       </Routes>
//       <Footer />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
