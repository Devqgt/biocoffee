import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

import LogoImg from '../assets/navbar/logo.svg'
import { About } from '../components/about/about'

const Home = () => {
  return <h1>Inicio</h1>
}


const Productos = () => {
  return <h1>Productos</h1>
}

const Equipo  = () => {
  return <h1>Equipo</h1>
}

const Tienda = () => {
  return <h1>Tienda</h1>
}

const menu = [
  {
    path: '/',
    name: 'Inicio',
    main: <Home/>
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    main: <About/>
  },
  {
    path: '/productos',
    name: 'Productos',
    main: <Productos/>
  },
  {
    path: '/equipo',
    name: 'Equipo',
    main: <Equipo/>
  },
  {
    path: '/tienda',
    name: 'Tienda',
    main: <Tienda/>
  },

]

export const Routes = () => {
 
 
  return(
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-white  sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={LogoImg} alt="Logo biocofee" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse navbarNav" id="navbarSupportedContent" >
            <div className="navbar-nav ms-auto">
              {menu.map((el, index) => (
                <NavLink key={index} to={el.path} exact className="nav-link text-uppercase p-3" activeClassName="active">
                  {el.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        {menu.map((el, index) => (
          <Route 
            key={index}
            path={el.path}
            exact={true}
            children={el.main}
          />
        ))}
      </Switch>  
    </Router> 
  )
}
  
 




















