import React, { Component } from 'react';
// import {Button } from 'antd';
import { MyContext } from '../context';
// import { Link } from 'react-router-dom';
import '../mystyles.scss';


class Home extends Component {

    ham=(e)=>{
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
       
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    };

  render() {
    return (
      <div style={{alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
       <link rel="shortcut icon" href="../images/fav_icon.png" type="image/x-icon"></link> 
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>  
       <link rel="stylesheet" href="https://unpkg.com/bulma@0.7.5/css/bulma.min.css" />
       <section class="hero is-fullheight is-default is-bold">
       <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand ">
                        <a class="navbar-item" href="../">
                        <h1 >HEIR-STAFF</h1>
                            {/* <img src="../images/bulma.png" alt="Logo"/> */}
                        </a> 
                        <span class="navbar-burger burger" data-target="navbarMenu" onClick={this.ham}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu ">
                        <div class="navbar-end">
                            <div class="tabs is-right">
                                <ul class="menuppal">
                                    <li class="is-active"><a href="/">Inicio</a></li>
                                    <li><a href="#contenido">Acerca de</a></li>
                                    <li><a href="/signup">Registro</a></li>
                                    <li><a href="/login">Iniciar sesión</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
       <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <figure class="image is-4by3">
                            <img src="/imagenes/hai5.png" alt="Description"/>
                        </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <h1 class="title is-2">
                            HEIR STAFF
                        </h1>
                        <h2 class="subtitle is-4">
                           La plataforma que te conecta con tu nuevo personal.
                        </h2>
                        <br></br>
                        <p class="has-text-centered">
                            <a class="button is-medium is-info is-outlined" href="/signup">
                                Registrate
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-body" id="contenido">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                <div class="column is-6 is-offset-1">
                        <p>
                         Heir Staff es una app pensada para ti que eres una startup y necesitas contratar a personal 
                           altamente calificado a bajo costo.
                           <br></br><br></br>
                           Esta app engloba aspectos generales a evaluar para la selección de nuevo personal, a través 
                           de diferentes test debidamente seleccionado dependiendo del área que necesites.
                        </p>
                    </div>
                    <div class="column is-5">
                        <figure class="image is-4by3">
                            <img src="/imagenes/hai6.png" alt="Description"/>
                        </figure>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="hero-foot">
             <div class="container">
                 <div class="tabs is-centered">
                     <ul>
                         <li><a>© 2019 </a></li>
                     </ul>
                 </div>
             </div>
         </div>
        </section>
       </div>
    );
  }
}

Home.contextType = MyContext;
export default Home;