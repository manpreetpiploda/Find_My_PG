import './App.css';

import Header from './componets/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componets/home/Home';
import About from './componets/About section/About';
import Pgcites from './componets/Pgcites/Pgcites';
import Details from './componets/Deatils/Details';
import { useContext, useEffect } from 'react';
import datacontext from './Context/Data/datacontext';
import Footer from './componets/Footer/Footer';
import Blog from './componets/Blog/Blog';
import Blog1 from './componets/Blogs_content/Blogs_content';
import Contact from './componets/Contact/Contact';
import Owners from './componets/Owners/Owners';
import Addpg from './componets/Add pg/Add_pg';
import Test from './componets/Test';


function App() {
  const Context = useContext(datacontext);
  const { dbdata, getNote } = Context;
  
  useEffect(() => {
    getNote();
        // eslint-disable-next-line
      }, []);
      
      
      return (
        <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home data={dbdata} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/PGowners" element={<Owners/>} />
          <Route exact path="/Add_pg" element={<Addpg/>} />
          <Route exact path='/search/:city' element={<Pgcites data={dbdata} />} />
          <Route exact path='/pgdetails/:id' element={<Details data={dbdata} />} />
          <Route exact path='/:no' element={<Blog1 />} />
          <Route exact path="/blog" element={<Blog />} />

          <Route exact path="/Test" element={<Test />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
