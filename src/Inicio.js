// import { listaRestaurantes } from './info-restaurantes'
import React, { useState , useEffect} from "react";
import { listaRestaurantes } from "./restaurantesService";
import Swal from "sweetalert2";
import './style.css';



export const Inicio = () => {
    const [restaurantes, setRestaurantes] = useState([]);

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


    return <>
        <div className='container mt-5'>
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-5  ">
                {
                    restaurantes.map(restaurante => {
                        return (
                            <div className="col mt-4 d-flex align-items-stretch"  key={restaurante.id}>
                                <div className="card">
                                    <img className="card-img-top" src={restaurante.imagen} alt="Url incorrecto" />
                                    <h5 className='card-title' >{restaurante.nombre}</h5>
                                    <div className="card-body">
                                        <p className="card-text">{restaurante.direccion + "\n"+restaurante.descripcion}</p>
                                    </div>
                                  
                                    
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
    </>
}
