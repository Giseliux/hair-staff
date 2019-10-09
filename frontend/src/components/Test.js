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
                    <header class="card-header">
				<p class="card-header-title">
				Bienvenido {user.name}
				</p>
			</header>
                    
        <form method="post" action="">
                <div class="field">
                  <label class="label">Pseudo</label>
                  <div class="control has-icons-left has-icons-right">
                   <input class="input" type="text" placeholder="Text input" value="el-a-k-balde.000webhostapp.com"/>
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                 <p class="help is-success">This username is available</p> 
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left has-icons-right">
                   <input class="input " type="email" placeholder="Email input" value="talibadio"/>
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                <p class="help is-danger">This email is invalid</p>
                </div>

                <div class="field">
                  <label class="label">Mot de pass</label>
                  <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password"/>
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>

                <div class="field">
                  <label class="label">Confirmer</label>
                  <p class="control has-icons-left">
                    <input class="input is-couleur_de_mon_choix" type="password" placeholder="Password_confirm"/>
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>

                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox"/>
                      Se souvenir de moi
                    </label>
                  </div>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-primary">Submit</button>
                  </div>
                </div>
              </form>
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

Test.contextType = MyContext;