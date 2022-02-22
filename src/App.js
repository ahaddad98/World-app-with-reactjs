// import logo from './logo.svg';
// import './App.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import About from "./pages/About";
import "./styles/index.scss"
// import {}
const  App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/about'  element={<About/>} />
        <Route path='*'  element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
     </div>
  );

}

export default App;
