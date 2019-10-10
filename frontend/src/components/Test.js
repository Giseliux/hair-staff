import React, { Component } from 'react';
import { MyContext } from '../context/index';

export default class Test extends Component {
  
  state = {
    user: {
      name: ''
      
    }
  };

  ham=(e)=>{
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
       
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    };

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/test');
    const userinfo = this.context.state.loggedUser
    this.setState( userinfo );
    console.log(userinfo)
    console.log(this.context.state.loggedUser.user)
  }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  render() {
    const user = this.state
    return (
      <div>
       <div style={{alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
      <section class="hero is-fullheight is-default is-bold">
      <div class="hero-head">
           <nav class="navbar">
               <div class="container menu">
                   <div class="navbar-brand ">
                       <a href="../">
                       {/* <h1 >HIRE-STAFF</h1> */}
                        <img src="../imagenes/logo.png" alt="Logo"/>
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
                    <header class="card-header">
				<p class="card-header-title">
				Bienvenido {user.name}
				</p>
			</header>
                    
        <form method="post" action="">
        <p>Instrucciones: Para cada uno de los problemas siguientes, se sugieren cuatro respuestas;
          indique colocando marcando la solución que usted considere más adecuada.</p>
          <br></br><br></br>
          <p>1.- Se le ha asignado un puesto en una gran empresa. La mejor forma de establecer relaciones amistosas y cordiales
con sus nuevos compañeros será:</p>
<br></br>
          <div class="control">
            <label class="radio">
              <input type="radio" name="foobar"/>
              Evitando tomar nota de los errores en que ellos incurran.
            </label>
            <label class="radio">
              <input type="radio" name="foobar" checked/>
              Hablando bien de ellos al jefe.
            </label>
            <label class="radio">
              <input type="radio" name="foobar" checked/>
              Mostrando interés en el trabajo de ellos.
            </label>
            <label class="radio">
              <input type="radio" name="foobar" checked/>
              Pidiéndoles le permitan hacer los trabajos que usted puede hacer mejor.
            </label>
          </div>
              </form>
                    </div>
               </div>
           </div>
       </div>
      <div class="hero-foot">
           <div class="container">
           <div class="tabs is-centered textofoot">
                     <ul>
                         <li>Elaborado por Gisela Gasca - Irohack © 2019</li>
                     </ul>
                 </div>
           </div>
       </div>
      </section>
     </div>
     </div>
    );
  }
}

Test.contextType = MyContext;