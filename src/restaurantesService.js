
import {collection, doc, setDoc, getDoc, getDocs} from "firebase/firestore/lite";
import {FirebaseFirestore} from "./firebase";




const crearRestaurante = async (restaurante) => {
    const nuevoDoc = doc(collection(FirebaseFirestore, "/Restaurantes"));
    await setDoc(nuevoDoc, restaurante);
    console.log("Restaurante creado");
}


const listaRestaurantes = async () => {
    console.log("aqui");
    const restauranteRef = (collection(FirebaseFirestore, "/Restaurantes"));
    const docs = await getDocs(restauranteRef);
    console.log(docs)
    const restaurantes = [];
    docs.forEach (document => {
        restaurantes.push ({id: document.id, 
            nombre: document.data().nombre, 
            descripcion: document.data().descripcion, 
            direccion: document.data().direccion, 
            imagen: document.data().imagen, })
    });

    console.log(restaurantes);
    return restaurantes;
}



export {
    crearRestaurante,
    listaRestaurantes,
}