const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const empresaSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User'
    },
  nombreEmpresa:String,
  giroEmpresa:String,
  brinda:String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Empresa', empresaSchema);