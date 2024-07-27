import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaObjetos from './pages/listaObjetos';
import './App.css';
import UploadImage from './pages/uploadImage';
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}>
        <Route path="upload" element={<UploadImage/>} />
        <Route path ="lista"   element ={<ListaObjetos/>} />
        
      </Route>
    </Routes>
</BrowserRouter>
);
  
}

export default App;
