import React, { Component } from 'react';
import { MyContext } from '../context/index';
import axios from 'axios';
import '../mystyles.scss';
const isProduction= process.env.NODE_ENV === 'production'
const baseURL = isProduction ? 'https://shrouded-retreat-49168.herokuapp.com/auth'
 : 'http://localhost:3000/auth'


export default class Profile extends Component {

  state = {
    user: {
      name: ''
      
    },
    empresas:[],
    aspirantes:[],
    arrContenido:[]
  };

  ham=(e)=>{
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
       
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    };

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login');
    const userinfo = this.context.state.loggedUser
    // const datosEmpresa='';
    this.setState( userinfo );
    console.log('aqui voy')
    console.log(userinfo)

    if(userinfo.tipo ==="Aspirante"){
      console.log('eres aspi')
    
    }else if(userinfo.tipo==="Empresa"){
      console.log('eres empre')
      console.log(userinfo._id)
      axios.get(`${baseURL}/empresas/${this.context.state.loggedUser._id}`)
      .then((response) => {
        this.datosEmpresa=response.data.empresa[0].nombreEmpresa
        console.log(this.datosEmpresa)
       })
      .catch((error) => console.log(error))
     
      axios.get(`${baseURL}/aspirantes`)
      .then((response) => {
         this.setState({aspirantes:[...response.data.aspirantes]})
         console.log(this.state.aspirantes)
      //    this.state.empresas.map((team) => 
      //    <option key={team.nombreEmpresa} value={team.nombreEmpresa}>{team.nombreEmpresa}</option>)

      })
      .catch((error) => console.log(error))
    }else if(userinfo.tipo==="Reclutador"){
      console.log('eres reclu')
      axios.get(`${baseURL}/empresas`)
   
      .then((response) => {
           this.setState({empresas:[...response.data.empresas]})
           console.log(this.state.empresas)
          })
        .catch((error) => console.log(error))
  
      }
    
  }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  render() {
    const user = this.state
    let userMessage
    let cardRegistros

    if (user.tipo==="Aspirante") {
      userMessage = (
        <a href="/test/" class="card-footer-item">Test</a>
      )
    }else if (user.tipo==="Empresa") {
      userMessage = (
        <a href="" class="card-footer-item">Aspirantes</a>
      )

      this.state.aspirantes.map((element)=>{
        if(element.nombreEmpresaSoli===this.datosEmpresa){
         console.log('si es')
          console.log(element)
          cardRegistros = (
            <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="/imagenes/avatar.png" alt="Avatar"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{element.puesto}</p>
      </div>
    </div>
  </div>
</div>
          )
        }
     })

    }else if (user.tipo==="Reclutador") {
      userMessage = (
        <a href="" class="card-footer-item">Empresas</a>
      )
    }


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
      <div class="hero-body infoProfile">
           <div class="container has-text-centered">
               <div class="columns is-vcentered">
                    <div class="column is-5">
                    
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">
				Bienvenido {user.name}
				</p>
			</header>
			<div class="card-content">
				<div class="content">
        <figure class="image is-128x128">
                        <img class="is-rounded" src="/imagenes/avatar.png" alt="avatar"/>
                        </figure>
                        Tipo de usuario: {user.tipo}
                        <br></br>
                        Correo: {user.email}
				</div>
			</div>
			<footer class="card-footer">
				<a href="" class="card-footer-item is-danger button" onClick={this.logout}>Cerrar sesión</a>
				<a href="" class="card-footer-item">Editar</a>
        { userMessage }
        {/* <a href="/test/" class="card-footer-item">Test</a> */}
        
			</footer>
		</div>
                    </div>
               </div>
           </div>
       </div>
       <div class="hero-body seccion2" id="contenido">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                {cardRegistros}
                {this.state.empresas.map((team) => 
                                <div class="card">
                                <div class="card-image">
                                  <figure class="image is-4by3">
                                    <img src="/imagenes/avatar.png" alt="Avatar"/>
                                  </figure>
                                </div>
                                <div class="card-content">
                                  <div class="media">
                                    <div class="media-content">
                                      <p class="title is-4">{team.nombreEmpresa}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>)}
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

Profile.contextType = MyContext;