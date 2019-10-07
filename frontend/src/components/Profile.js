import React, { Component } from 'react';
import { MyContext } from '../context/index';
import {  Button } from 'antd';
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  
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
    if (!this.context.state.loggedUser) return this.props.history.push('/login');
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
                        Bienvenido <h1>{user.name}</h1>
                        <br></br>
                        <br></br>
                        <h2>{user.tipo}</h2>
                        <br></br>
                        <br></br>
                        <figure class="image is-128x128">
                        <img class="is-rounded" src="/imagenes/avatar.png"/>
                        </figure>
                        <a class="button is-danger is-outlined" onClick={this.logout}>Cerrar sesión</a>
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