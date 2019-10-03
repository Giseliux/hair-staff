import React, { Component } from 'react';
import { Card, Input, Form} from 'antd';
import AUTH_SERVICE from '../services/auth';
import { MyContext } from '../context';

class Login extends Component {
  state = {
    user: {}
  };

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
    this.setState({ user });
    console.log(user)
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.login(this.state.user)
      .then((response) => {
        this.context.logUser(response.data.user);
        console.log(response.data.user)
        this.props.history.push('/profile/');
       
      })
      .catch((error) => {
        console.log(error);
      });
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
                         <h1 >HAIR-STAFF</h1>
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
                                     <li class="is-active"><a>Home</a></li>
                                     <li><a href="">Acerca de</a></li>
                                     <li><a href="/signup">Registrate</a></li>
                                     <li><a href="/login">Login</a></li>
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
                             <img src="https://picsum.photos/800/600/?random" alt="Description"/>
                         </figure>
                     </div>
                     <div class="column is-6 is-offset-1">
                     <section class="hero is-fullheight is-medium is-bold">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <article class="card is-rounded">
                <div class="card-content">
                  <h1 class="title">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=13&txt=150%C3%9750&w=150&h=50" alt="logo" width="200"/>
                  </h1>
                  <form onSubmit={this.onSubmit}  class="box">
                   <label for="" class="label">Email:</label>
                  <div class="control has-icons-left">
                    <input onChange={this.handleInput} class="input" type="email"  name="email" id="email" placeholder="e.g. user@gmail.com" required/>
                     <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i></span>
                  </div>
                  <br/>
                   <label for="" class="label">Password:</label>
                  <div class="control has-icons-left">
                    <input onChange={this.handleInput} class="input" type="password"  name="password" id="password" placeholder="Password" required/>
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  <p class="control">
                    <label class="checkbox">
                      <input onChange={this.handleInput}  type="checkbox"/>
                      Remember me
                    </label>
                  </p>
                  <br/>
                  <p class="control">
                     <input onChange={this.handleInput} type="submit" value="Log in" class="button is-primary is-medium is-fullwidth"/>
                  </p>
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

Login.contextType = MyContext;

export default Login;