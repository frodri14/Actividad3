import React, { useState, useEffect } from 'react';
import { listaRestaurantes } from "./restaurantesService";
import './style.css';
import Swal from 'sweetalert2';



const Buscar = () => {
    
        const [valoresFormulario, setValoresFormulario] = useState({}); 
        const [restaurantes, setNuevo] = useState([]);
        const [restaurantesFirebase, setRestaurantes] = useState([])
        const { ingreso = '' } = valoresFormulario;
        
 

        const handleOnChange = (e) => {
            setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
        }

        useEffect(() => {
            getRestaurantes();
        }, []);
    
    
    
        const getRestaurantes = async() => {
            try {
                Swal.fire({ allowOutsideClick: false, text: "Cargando..."});
                Swal.showLoading();
                const restaurantesFirebase = await listaRestaurantes();
                setRestaurantes(restaurantesFirebase);
                Swal.close();
          
              } catch (error) {
                Swal.close();
                console.log(error);
              }
        }

        const handleOnSubmit = (e) => {
            e.preventDefault(); 
            setNuevo(restaurantesFirebase.filter(rest => rest.nombre.toLowerCase().includes(ingreso.toLowerCase())))
        }
        return <>
            <div className="container mt-5">
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <div className="mb-2">
                        <label className="form-label">Nombre del restaurante: </label>
                        <input  type="text" name="ingreso" value={ingreso}
                            className="form-control" onChange={(e) => { handleOnChange(e) }}  />
                            
                    </div>
                    <button type="submit" className="btn btn-primary">Buscar</button>
                    
                </form>
                <div className="container mt-5">
            <div className=" row mt-3 cols-1 ">
                {
                    restaurantes.map(restaurantes => {
                        return (
                            <div className="col mt-4 d-flex align-items-stretch"  key={restaurantes.id}>
                                <div className="card">
                                    <img className="card-img-top" src={restaurantes.imagen} alt="Url incorrecto" />
                                    <h5 className='card-title' >{restaurantes.nombre}</h5>
                                    <div className="card-body">
                                        <p className="card-text">{restaurantes.direccion + "\n"+restaurantes.descripcion}</p>
                                    </div>
                                  
                                    
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div> 
            </div>

            </>
    }
export {
    Buscar
}