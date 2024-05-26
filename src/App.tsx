import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import AppProvider from './context/GlobalState'
import Home from './views/Home';
import PaginaNoValida from './views/PaginaNoValida';
import Categorias from './views/Categorias/Categorias';
import DetalleCategoria from './views/Categorias/DetalleCategoria';
import BusquedaCategorias from './views/Categorias/BusquedaCategorias';
import BarraCategorias from './views/Categorias/BarraCategorias';
import RegistroCliente from './views/RegistroCliente';

function App() {

  return (
    <AppProvider>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path="/categorias" element={<BarraCategorias></BarraCategorias>}>
          <Route index element={<Categorias></Categorias>}></Route>
          <Route path=':id' element={<DetalleCategoria></DetalleCategoria>}></Route>
          <Route path='busqueda' element={<BusquedaCategorias></BusquedaCategorias>}></Route>
        </Route>
        <Route path='/registro_cliente' element={<RegistroCliente></RegistroCliente>}></Route>
        <Route path='*' element={<PaginaNoValida></PaginaNoValida>}></Route>
      </Routes>
    </AppProvider>
  )
}

export default App
