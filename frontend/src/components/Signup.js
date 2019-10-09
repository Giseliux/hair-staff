import React, { Component } from 'react';
//import { Card, Input, Form } from 'antd';
import AUTH_SERVICE from '../services/auth';
import axios from 'axios';


class Signup extends Component {
  state = {
    user: {},
    empresas:[]
  };

  componentDidMount() {
    console.log('entre a mount')
    axios.get('http://localhost:3000/auth/empresas')
   
    .then((response) => {
         this.setState({empresas:[...response.data.empresas]})
         console.log(this.state.empresas)
        })
      .catch((error) => console.log(error))

      for(var i in this.state.empresas){
      document.getElementById("nombreEmpresaSoli").innerHTML += "<option value='"+this.state.empresas[i]+"'>"+this.state.empresas[i]+"</option>";
      }
    }

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
        console.log('entre a submit')
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
                         <h1 >HIRE-STAFF</h1>
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
                      <div class="field">
                        <label class="label">Empresa a solicitar</label>
                        <div class="control">
                          <div class="select">
                            <select id="nombreEmpresaSoli" name="nombreEmpresaSoli" onChange={this.handleInput}>
                             <option>Seleccione una opción </option>
                              {/* <option value="empresa1">empresa1</option>
                              <option value="empresa2">empresa2</option>
                              <option value="empresa3">empresa3</option> */}
                            </select>
                          </div>
                        </div>
                      </div> 
                      <div class="field">
                        <label class="label">Puesto solicitado</label>
                        <div class="control">
                          <div class="select">
                            <select id="tipoPuesto" name="tipoPuesto" onChange={this.handleInput}>
                              <option>Seleccione una opción </option>
                              <option value="Directivos">Directivos</option>
                              <option value="Jefe operativo">Jefe operativo</option>
                              <option value="Operativo">Operativo</option>
                              <option value="Auxiliar administrativo">Auxiliar administrativo</option>
                              <option value="Administrativo">Administrativo</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    <label for="edad" class="label">Edad: </label>
                    <div class="control has-icons-left">
                      <input onChange={this.handleInput} type="edad" name="edad" id="edad"  class="input" placeholder="Edad"/>
                       <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                    </div>
                   
                    <div class="field">
                        <label class="label">Nivel de estudios</label>
                        <div class="control">
                          <div class="select">
                            <select id="nivelEstudios" name="nivelEstudios" onChange={this.handleInput}>
                              <option>Seleccione una opción </option>
                              <option value="Sin estudios">Sin estudios</option>
                              <option value="Primaria">Primaria</option>
                              <option value="Secundaria">Secundaria</option>
                              <option value="Preparatoria">Preparatoria</option>
                              <option value="Licenciatura">Licenciatura</option>
                              <option value="Posgrado">Posgrado</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <label for="lugarEstudios" class="label">Lugar de Estudios: </label>
                    <div class="control has-icons-left">
                      <input onChange={this.handleInput} type="lugarEstudios" name="lugarEstudios" id="lugarEstudios"  class="input" placeholder="Lugar de Estudios"/>
                       <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                    </div>
                    <br></br>
                    <div class="field">
                        <label class="label">¿Qué puede aportar a la empresa?</label>
                        <div class="control">
                          <div class="select">
                            <select id="aportacion" name="aportacion" onChange={this.handleInput}>
                              <option>Seleccione una opción </option>
                              <option value="Aumentar la producción a traves de la mejora del ambiente laboral">Aumentar la produccion a traves de la mejora del ambiente laboral</option>
                              <option value="Aumentar la producción a traves de la innovación en procesos">Aumentar la producción a traves de la innovación en procesos</option>
                              <option value="Aumentar la producción a traves de generar mejora continua en los procesos de producción.">Aumentar la producción a traves de generar mejora continua en los procesos de producción.</option>
                              <option value="Reducir los errores o mermas a travess de la implementación de mejoras en los procesos.">Reducir los errores o mermas a travess de la implementación de mejoras en los procesos.</option>
                              <option value="Otra">Otra</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      </div> 
                      <div class="empresa">
                      <label for="nombreEmpresa" class="label">Nombre de la Empresa: </label>
                    <div class="control has-icons-left">
                      <input onChange={this.handleInput} type="nombreEmpresa" name="nombreEmpresa" id="nombreEmpresa"  class="input" placeholder="Nombre de Empresa"/>
                       <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                    </div>
                    <div class="field">
                        <label class="label">Giro de la empresa:</label>
                        <div class="control">
                          <div class="select">
                            <select id="giroEmpresa" name="giroEmpresa" onChange={this.handleInput}>
                              <option>Seleccione una opción </option>
                              <option value="Comercial">Comercial</option>
                              <option value="Industrial">Industrial</option>
                              <option value="Servicios">Servicios</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="field">
                        <label class="label">¿Qué brinda la empresa?</label>
                        <div class="control">
                          <div class="select">
                            <select id="brinda" name="brinda" onChange={this.handleInput}>
                              <option>Seleccione una opción </option>
                              <option value="Prestraciones">Prestraciones</option>
                              <option value="Seguro social">Seguro social</option>
                              <option value="Transportación">Transportación</option>
                              <option value="Salario">Salario</option>
                              <option value="Capacitación">Capacitación</option>
                              <option value="Oportunidad de crecimiento">Oportunidad de crecimiento</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      </div> 
                      <div class="reclutador">
                      <label for="nombreEmpresaRec" class="label">Nombre de la Empresa o Negocio al que pertenece: </label>
                    <div class="control has-icons-left">
                      <input onChange={this.handleInput} type="nombreEmpresaRec" name="nombreEmpresaRec" id="nombreEmpresaRec"  class="input" placeholder="Nombre de Empresa o Negocio al que pertenece"/>
                       <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                    </div>
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