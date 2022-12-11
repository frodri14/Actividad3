import { v4 as uuid } from 'uuid';

const listaRestaurantes = [
    {
    id: uuid(),
    nombre: 'Pacifico mar',
    descripcion: 'Av. 85 Nro. 45 - 85 Baranquilla  Deliciosa comida de mar',
    imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/04/ad/1f/46/don-pargo.jpg'
    },
   
    {
    id: uuid(),
    nombre: 'Italiano 65',
    descripcion: 'Av 45 Nro. 1 - 85 Medellín Deliciosa comida italiana',
    imagen: 'https://restaurantepomodoro.com/wp-content/uploads/2019/01/Pasta-frutti-di-mare-1-300x296.png'
    },

    {
    id: uuid(),
    nombre: 'Fritos y Mas',
    descripcion: 'Calle 45 Medellín Comida rápida',
    imagen: 'https://5dc93791f535c5b6680b-504f722ff1ef8102127dae26bdb15aa6.ssl.cf1.rackcdn.com/pix_10_1854_243208271_5819d5578bafe.jpg'
    },

    {
    id: uuid(),
    nombre: 'Pollo Frito',
    descripcion: 'Cr 32 # 56 - 89 Lo mejor del pollo frito',
    imagen: 'https://5dc93791f535c5b6680b-504f722ff1ef8102127dae26bdb15aa6.ssl.cf1.rackcdn.com/pix_10_1854_243268983_63110605439c1.jpg'
    }

];

export {
    listaRestaurantes,
}
