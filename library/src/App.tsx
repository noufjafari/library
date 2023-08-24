import Home from "./Pages/home";
import About from "./Pages/about";
import Intro from "./Pages/intro";

import BookDetail from "./Pages/bookDetail";
import {  Routes ,Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/intro" element={<Intro/>}></Route>

    <Route path="/book" element={<BookDetail/>} />
    <Route path="/book/:id" element={<BookDetail/>} />
  


      </Routes>    
    </>
  )
}

export default App
