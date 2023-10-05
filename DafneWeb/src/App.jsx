import React from 'react'
import { Toaster } from 'react-hot-toast'; //  manejo notificaciones
import Router from './Router'

// "fragmentos" o "fragment tags" de JSX, que son elementos que no se renderizan en el DOM (no son elementos HTML)
// pero que permiten agrupar una lista de elementos hijos

// <> </> es un fragmento vacío, que no tiene ningún elemento hijo
// <React.Fragment></React.Fragment> es un fragmento con un nombre

// Los fragmentos son necesarios porque JSX requiere que los elementos devueltos por los componentes (fxnes) tengan un solo elemento raíz
// i.e. componente puede retornar solo un objeto

function App() {

  return (
    <>
      <Router />
      <Toaster position='bottom-center' toastOptions={
        {
          style: {
            background: '#191414',
            color: 'white',
            border: '1px solid #2e2c2c'
          }
        }
      }/>
    </>
  )
}

export default App