import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Login from './views/login.jsx';
import Loja from './views/loja.jsx';
import Pedidos from './views/form/pedidos.jsx';
import Clientes from './views/clientes/clientes.jsx';
import Produtos from './views/produtos/produtos.jsx';
import Users from './views/users/users.jsx';
import NovoUsuario from './views/users/novo_usuario.jsx';
import Caixa from './views/caixa/caixa.jsx';

function App() {  
  return (
    <BrowserRouter>   
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/loja" element={<Loja/>}/>
        <Route path="/pedidos" element={<Pedidos/>}/>
        <Route path="/clientes" element={<Clientes/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/novo_usuario" element={<NovoUsuario/>}/>
        <Route path="/caixa" element={<Caixa/>}/>               
      </Routes>
    </BrowserRouter>
  );
}

export default App;
