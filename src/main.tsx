import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderBar from './components/HeaderBar';
import CreateForm from './pages/CreateForm.tsx'
import ItemDetalles from './pages/ItemDetalles.tsx'
import Carrito from './pages/Carrito.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="create" element={<CreateForm />} />
        <Route path="item/:id" element={<ItemDetalles />} />
        <Route path="cart" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
