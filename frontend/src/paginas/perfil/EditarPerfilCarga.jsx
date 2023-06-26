import React from 'react'
import Encabezado from '../../components/Encabezado'
import MenuLateral from '../../components/MenuLateral'

import Principal from '../../components/Principal'
import EditarPerfilComponente from '../perfil/EditarPerfil'

import Pie from '../../components/Pie'

const EditarPerfilCarga = () => {
  return (
    <>
        {/* <div>EditarPerfil</div> */}
        <Encabezado></Encabezado>
        <MenuLateral componentePrincipal={<EditarPerfilComponente/>}>
        </MenuLateral>
        <Pie></Pie>

    </>
  )
}

export default EditarPerfilCarga