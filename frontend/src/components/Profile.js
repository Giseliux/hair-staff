import React, { Component } from 'react';
import { MyContext } from '../context/index';
// import {  Button } from 'antd';
// import { Link } from 'react-router-dom'
import axios from 'axios';
const isProduction= process.env.NODE_ENV !== 'production'
const baseURL = isProduction ? 'http://localhost:3000/auth'
 : 'https://shrouded-retreat-49168.herokuapp.com/auth'


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
    const datosEmpresa='';
    this.setState( userinfo );
    console.log('aqui voy')
    console.log(userinfo)

    if(userinfo.tipo =="Aspirante"){
      console.log('eres aspi')
    
    }else if(userinfo.tipo=="Empresa"){
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

      //  this.state.aspirantes.map((element)=>
      //       if(element.nombreEmpresa==this.datosEmpresa){
      //         console.log('si es')
      //         console.log(element)
      //       }else{
      //         console.log('no es')
      //         console.log(element)
      //       }
      //   )
      })
      .catch((error) => console.log(error))




    }else if(userinfo.tipo=="Reclutador"){
      console.log('eres reclu')
    }
  }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  render() {
    const user = this.state
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
                       <h1 >HIRE-STAFF</h1>
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
                                    <li><a href="/#contenido">Acerca de</a></li>
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
                    
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">
				Bienvenido {user.name}
				</p>
			</header>
			<div class="card-content">
				<div class="content">
        <figure class="image is-128x128">
                        <img class="is-rounded" src="/imagenes/avatar.png"/>
                        </figure>
                        Tipo de usuario: {user.tipo}
                        <br></br>
                        Correo: {user.email}
				</div>
			</div>
      <div id="contenidoTipo">Aquì va el contenido
      {/* {arregloContenido.map((team) => 
           <option key={team.nombreEmpresa} value={team.nombreEmpresa}>{team.nombreEmpresa}</option>)} */}
      </div>
			<footer class="card-footer">
				<a href="#" class="card-footer-item is-danger button" onClick={this.logout}>Cerrar sesión</a>
				<a href="#" class="card-footer-item">Editar</a>
				<a href="/test/" class="card-footer-item">Test</a>
			</footer>
		</div>


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

Profile.contextType = MyContext;