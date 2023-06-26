import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Alerta from '../../components/Alerta'

const EditarPerfil = () => {
    const { auth, actualizarPerfil } = useAuth()
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})

    useEffect(() => {
        setPerfil(auth)
    }, [auth])

    const handleSubmit = async e =>{
        e.preventDefault()

        const { nombre, apellido, email } = perfil;

        if([nombre, apellido, email].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        const resultado = await actualizarPerfil(perfil)
        setAlerta(resultado)
    }

    const {msg} = alerta

  return (
    <>
        {/* <div>EditarPerfil componente</div> */}

        <main className="d-flex   flex-column">

            <h1 className="text-center  py-0 pt-5 my-0">PERFIL</h1>

            <div className="controles d-flex align-items-center">
                <Link to={"/admin/usuarios"}>
                    <i className="icon-menu fa-solid fa-angles-left link-dark "> volver </i> 
                </Link>
            </div>  

            {msg && <Alerta alerta={alerta}></Alerta>}

            <form  className="formulario"  
                onSubmit={handleSubmit}
            >

                <div className="contenedores d-flex justify-content-center flex-lg-row flex-column  flex-sm-column mx-5 gap-5">
                    <div className="contenedores__div1 d-flex flex-column align-items-center ms-sm-0 w-100 ">
                        <div className="mb-3 w-100">                  
                            <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="nombre" 
                                aria-describedby="emailHelp" 
                                name='nombre'
                                placeholder="Nombre" 
                                required 
                                value={perfil.nombre || ''}
                                onChange={e => setPerfil({
                                    ...perfil, 
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>

                        <div className="mb-3 w-100">                  
                            <label htmlFor="apellido" className="form-label fw-bold">Apellido</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="apellido" 
                                aria-describedby="emailHelp" 
                                name='apellido'
                                placeholder="Apellido" 
                                required 
                                value={perfil.apellido || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name] : e.target.value
                                })}

                            />
                        </div>


                    </div>

                    <div className="contenedores__div2 d-flex flex-column align-items-center me-5 me-sm-0  w-100 ">
                    <div className="mb-3 w-100">                  
                            <label htmlFor="email" className="form-label fw-bold">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                aria-describedby="emailHelp" 
                                name='email'
                                placeholder="Email" 
                                required 
                                value={perfil.email || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>

                    </div>
                </div>


                <div className="contenedor__botones d-flex justify-content-center flex-lg-row flex-column flex-sm-column my-3 mx-5 gap-5 ">
                    <div className="d-flex justify-content-center  w-100">
                        <div className="div_botones ms-sm-0  w-100">
                            <button type="submit" className="btn btn-dark w-100 btn-styles">Guardar Cambios</button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center w-100">
                        <div className="div_botones  me-sm-0  w-100">
                            <button type="reset" className="btn btn-dark w-100 btn-styles">Limpiar</button>
                        </div>
                    </div>
                </div>
            </form>



        </main>
    </>
  )
}

export default EditarPerfil