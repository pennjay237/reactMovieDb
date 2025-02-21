import { BrowserRouter, Route, Routes } from 'react-router';
import Home from "./pages/Home";
import './App.css';
import  { MovieContextData, } from './context/context';
import Detail from "./pages/Detail";


function App() {
 

  return ( 
    <MovieContextData>
      <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home/>}></Route>
        <Route path= "/detail/:id" element={<Detail/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </MovieContextData>
   

    )
}

export default App;