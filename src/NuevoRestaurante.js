import React, { useState } from 'react';
import { crearRestaurante } from './restaurantesService';
import Swal from 'sweetalert2';


export const NuevoRestaurante = () => {


  const [ valoresFormulario, setValoresFormulario ] = useState({});
  const { nombre = '', descripcion = '', direccion = '', imagen = ''  } = valoresFormulario;


  // permite asignar los valores del formulario a la variable de estado  formValues
  const handleOnChange = (e) => {
    setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
  }


  // pinta los valores del formulario cuando presionan el boton
  const handleOnSubmit = async (e) => {


    e.preventDefault(); // evita que se recargue el formulario
    console.log(valoresFormulario);
    try {
      Swal.fire({ allowOutsideClick: false, text: "Cargando..."});
      Swal.showLoading();
      await crearRestaurante(valoresFormulario);
      Swal.close();

      console.log('Creado desde la pagina nuevo restaurante');
      setValoresFormulario ({nombre: "", descripcion: "", direccion: "", imagen: ""});


    } catch (error) {
      Swal.close();
      console.log(error);
    }
  }



  return (
    <div className="container-fluid mt-3">
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input required type="text" name="nombre" value={nombre} 
              className="form-control" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Direccion</label>
          <input required type="text" className="form-control" name='direccion' 
              value={ direccion } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input required type="text" name="descripcion" value={descripcion} 
              className="form-control" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        
        <div className="mb-3">
          <label className="form-label">URL de la Imagen</label>
          <input required type="text" className="form-control" name='imagen' 
              value={ imagen } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  )
}
