
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import AdminLayout from './layout/AdminLayout'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import OlvidePassword from './paginas/OlvidePassword'
import Admin from './paginas/Admin'
import NuevoPassword from './paginas/NuevoPassword'
import EditarPerfil from './paginas/perfil/EditarPerfilCarga'
import CambiarPasswordCarga from './paginas/usuarios/CambiarPasswordCarga'
import UsuariosBotones from './paginas/usuarios/UsuariosBotones'

import { AuthProvider } from './context/AuthProvider'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <AuthProvider>

          <Routes>
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path='olvide-password' element={<OlvidePassword/>}/>
              <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
              <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>
            </Route>

            <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<Admin/>}/>
              <Route path='registrar' element={<Registrar/>}/>
              <Route path='perfil' element={<EditarPerfil/>}/>
              <Route path='cambiar-password' element={<CambiarPasswordCarga/>}/>
              <Route path='usuarios' element={<UsuariosBotones/>}/>

            </Route>

          </Routes>          
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
