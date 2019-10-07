import React, { Component } from 'react';
//import { Card, Input, Form } from 'antd';
import AUTH_SERVICE from '../services/auth';

class Signup extends Component {
  state = {
    user: {}
  };

  selectTipo =(e)=>{
    //aqui activo el formulario para aspirante
    const aspiForm=document.querySelector('.aspirante')
    const empForm=document.querySelector('.empresa')
    const recluForm=document.querySelector('.reclutador')
    let tipoUsuario = document.getElementById("tipo").value;
    const { user } = this.state;
    
    switch(tipoUsuario)
    {
      case 'Aspirante':{
        console.log('entraste a aspirante')
        aspiForm.style.display='block';
        empForm.style.display='none';
        recluForm.style.display='none';
      
        const key = e.target.name;
        user[key] = e.target.value;
        console.log(user)
        this.setState({ user });
      }
      break;
      case 'Empresa':{
        console.log('entrste a empresa')
        aspiForm.style.display='none';
        empForm.style.display='block';
        recluForm.style.display='none';
        const key = e.target.name;
        user[key] = e.target.value;
        console.log(user)
        this.setState({ user });
      }
      break;
      case 'Reclutador':{
        console.log('entrste a reclutador')
        aspiForm.style.display='none';
        empForm.style.display='none';
        recluForm.style.display='block';
        const key = e.target.name;
        user[key] = e.target.value;
        console.log(user)
        this.setState({ user });
      }
      break;
      default:
      break;
    }
    
  }

  ham=(e)=>{
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
       
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    };

    handleInput = (e) => {
      const { user } = this.state;
      const key = e.target.name;
      user[key] = e.target.value;
      console.log(user)
      this.setState({ user });
    };

  onSubmit = (e) => {
    e.preventDefault();
     AUTH_SERVICE.signup(this.state.user)
    
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      this.props.history.push('/')
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
        <div class="registroEstilos">
             <div class="container has-text-centered">
                 <div class="columns is-vcentered">
                     <div class="column is-5">
                         <figure class="image is-4by3">
                         <img src="/imagenes/hai1.png" alt="Description" class="imagenRegis"/>
                         </figure>
                     </div>
                     <div class="column is-6 is-offset-1">
                     <section class="hero is-fullheight is-medium is-bold">
                  <div>
                    <div class="container">
                      <div class="columns is-centered">
                        <article class="card is-rounded">
                          <div class="card-content">
                            

                  <form onSubmit={this.onSubmit} class="box">
                    <label for="name" class="label">Nombre: </label>
                   <div class="control has-icons-left">
                   <input onChange={this.handleInput} id="name" type="text" name="name" class="input" placeholder="Nombre"/>
                      <span class="icon is-small is-left">
                    <i class="fa fa-user "></i></span>
                    </div>
                    <br/>
                    <label for="email" class="label">Correo: </label>
                    <div class="control has-icons-left">
                      <input  onChange={this.handleInput} type="email" name="email" id="email" class="input" placeholder="e.j. bobsmith@gmail.com" required/>
                       <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i></span>
                    </div>
                    <br/>
                    <label for="password" class="label">Contraseña: </label>
                    <div class="control has-icons-left">
                      <input onChange={this.handleInput} type="password" name="password" id="password"  class="input" placeholder="Contraseña" required/>
                       <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                    </div>
                    <div class="field">
                        <label class="label">Tipo de usuario</label>
                        <div class="control">
                          <div class="select">
                            <select id="tipo" name="tipo" onChange={this.selectTipo}>
                              <option>Seleccione una opción </option>
                              <option value="Aspirante">Aspirante</option>
                              <option value="Empresa">Empresa</option>
                              <option value="Reclutador">Reclutador</option>
                            </select>
                          </div>
                        </div>
                      </div> 
                      <div class="aspirante">
                        Hola aspirante
                      </div> 
                      <div class="empresa">
                        Hola empresa
                      </div> 
                      <div class="reclutador">
                        Hola reclutador
                      </div>                  
                    <div>
                      <input onChange={this.handleInput} type="hidden" name="isEmployee" value="true"/>
                    </div>
                  
                    <div>
                      <br/>
                      <p class="control">
                      <input onChange={this.handleInput} type="submit" value="Registrar" class="button is-primary is-medium is-fullwidth"/>
                      </p>
                    </div>
                   </form>

                   
                </div>
              </article>
            </div>
          </div>
    </div>
  </section>
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

export default Signup;