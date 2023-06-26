
import { Link } from 'react-router-dom'
import Principal  from './Principal'
import useAuth from '../hooks/useAuth'

const MenuLateral = ({componentePrincipal}) => {
    const { auth } = useAuth()



  return (
   
    <>
    {/* <div>MenuLateral</div> */}

    <section className="d-flex">

        <aside className="">


            <ul className="d-flex flex-column justify-content-start w-100 px-0 my-0 mx-0  ">


                <div className="d-flex justify-content-start align-items-center px-3 py-2">
                    <i className="py-3 ">
                        <img className="rounded-circle"  src="https://e7.pngegg.com/pngimages/164/153/png-clipart-donut-the-simpsons-tapped-out-doughnut-homer-simpson-bart-simpson-krusty-the-clown-donut-food-bagel.png" alt="batman " title="batman" width="40" height="40" />
                    </i>

                    <p className="mb-0 mx-3 text-icon-menu">{auth.nombre} {auth.apellido}</p>
                </div>

                
                {/* <Link className="d-flex justify-content-start py-2 border-bottom border-dark" to="/admin/perfil">
                    <div className="d-flex  align-items-center ">
                        <i className="icon-menu fa-solid fa-address-card mx-4" title="Perfil"></i>
                        <p className="text-icon-menu my-0">Perfil</p>
                    </div>
                </Link> */}
                
                <Link className="d-flex justify-content-start py-2 border-bottom border-dark" to="/admin/usuarios">
                    <div className="d-flex  align-items-center ">
                        <i className="icon-menu fa-solid fa-user-tie mx-4" title="Clientes"></i>
                        <p className="text-icon-menu my-0">Usuario</p>
                    </div>
                </Link>

                <a className="d-flex justify-content-start py-2 border-bottom border-dark" href="listarClientes.html">
                    <div className="d-flex  align-items-center ">
                        <i className="icon-menu fa-solid fa-user mx-4" title="Clientes"></i>
                        <p className="text-icon-menu my-0">Clientes</p>
                    </div>
                </a>

                <a className="d-flex justify-content-start py-2 border-bottom border-dark" href="formu.html">
                    <div className="d-flex  align-items-center ">
                        <i className="icon-menu fa-solid fa-box-open mx-4" title="Clientes"></i>
                        <p className="text-icon-menu my-0">Productos</p>
                    </div>
                </a>

                <a className="d-flex justify-content-start py-2 border-bottom border-dark" href="listarClientes.html">
                    <div className="d-flex  align-items-center ">
                        <i className="icon-menu fa-solid fa-sack-dollar mx-4" title="Clientes"></i>
                        <p className="text-icon-menu my-0">Ventas</p>
                    </div>
                </a>

                <a className="d-flex justify-content-between  py-2 border-bottom border-dark" href="listarClientes.html">
                    <div className="d-flex  align-items-center ">
                        <i className="icon-menu fa-solid fa-money-bill-1-wave mx-4" title="Planes de pago"></i>
                        <p className="text-icon-menu my-0">Planes de pago</p>
                    </div>
                </a>

                <a className="d-flex justify-content-between  py-2 border-bottom border-dark" href="listarClientes.html">
                    <div className="d-flex  align-items-center ">
                        <i className="icon-menu fa-solid fa-book-open mx-4" title="Planes de pago"></i>
                        <p className="text-icon-menu my-0">Catálogo de productos</p>
                    </div>
                </a>



                {/* <hr></hr>
                <a className="d-flex justify-content-between  py-2 border-bottom border-dark" href="login.html">
                    <div className="d-flex  align-items-center ">
                        <i className="icon-menu fa-solid fa-clipboard-user mx-4" title="Login"></i>
                        <p className="text-icon-menu my-0">Login</p>
                    </div>
                </a>

                <a className="d-flex justify-content-between  py-2 border-bottom border-dark" href="restablecer.html">
                    <div className="d-flex  align-items-center ">

                        <i className="icon-menu fa-solid fa-key mx-4" title="Recuperar"></i>
                        <p className="text-icon-menu my-0">recuperar</p>
                    </div>
                </a>

                <a className="d-flex justify-content-between  py-2 border-bottom border-dark" href="newPass.html">
                    <div className="d-flex  align-items-center ">

                        <i className="icon-menu fa-solid fa-user-lock mx-4" title="Planes de pago"></i>
                        <p className="text-icon-menu my-0">Nuevo pass</p>
                    </div>
                </a> */}
            
            </ul>
        </aside>


        {/* <Principal></Principal> */}

       {componentePrincipal}


    </section>
</>
  )
}

export default MenuLateral