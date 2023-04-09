import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <div className='container-header'>   
          <NavBar elementosCant={3} />
       </div>
        <ItemListContainer greeting={"Hola bienvenidos a GZ"} />

    </div>
  </React.StrictMode>,
)
