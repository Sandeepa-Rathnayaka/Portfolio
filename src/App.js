import './App.css';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
//import './JsMain';

function App() {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
      </Helmet>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path='/portfolio' element={<Portfolio/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;






