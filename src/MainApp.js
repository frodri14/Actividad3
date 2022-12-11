import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { listaRestaurantes } from './info-restaurantes'
import { Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'
import { Inicio } from './Inicio'
import { Buscar } from './Buscar'
import { NuevoRestaurante } from './NuevoRestaurante'



export const MainApp = () => {

    return <BrowserRouter>
        <Navbar />
        <Routes>
           
            <Route path='Nuevo' element={<NuevoRestaurante />}/>
            <Route path='Buscar' element={<Buscar />}/>
            <Route path='Inicio' element={ <Inicio />} />
            

            <Route path='*' element={ <Navigate to='/inicio' />}/>
        </Routes>
    </BrowserRouter>
}


