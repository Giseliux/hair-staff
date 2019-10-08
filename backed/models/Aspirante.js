const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const aspiranteSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User'
    },
  puesto:String,
  edad:Number,
  nivelEstudios:String,
  lugarEstudios:String,
  aporteEmpresa:String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Aspirante', aspiranteSchema);