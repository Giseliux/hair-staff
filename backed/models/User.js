const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
  email:{
    name: String,
    type: String,
    unique: true,
    sparse: true
    },
    avatar: {
      type: String,
      default: 'http://chrisalensula.org/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
    },
    tipo: {
      type: String,
      enum: ['Reclutado', 'Empresa', 'Reclutador']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);