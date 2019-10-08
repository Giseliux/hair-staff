const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Aspirante=require('../models/Aspirante');
const passport = require('../config/passport');

router.post('/signup',async (req, res, next) => {
  console.log('entre a post')
  console.log(req.body.tipo)
  console.log(req.body)
  const tipo = req.body.tipo
  const user = await User.register(req.body, req.body.password)
  console.log(user)
  if(tipo == 'Aspirante'){
    Aspirante.create({
      'userId':user._id,'puesto':req.body.tipoPuesto,'edad':req.body.edad,
      'nivelEstudios':req.body.nivelEstudios,'lugarEstudios':req.body.lugarEstudios,
      'aporteEmpresa':req.body.aportacion,'nombreEmpresaSoli': req.body.nombreEmpresaSoli
    })
    console.log(Aspirante)
  }
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/loggedIn', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/edit', (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, {...req.body})
    .then((user) => res.status(200).json({ user }))
    .catch((err) => console.log(err));
});


function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

// function creaAspirante(idAspirante){
//   console.log('id Aspirante')
//   console.log(idAspirante)
// }



module.exports = router;