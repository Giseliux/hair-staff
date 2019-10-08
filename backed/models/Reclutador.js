const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const reclutadorSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User'
    },
  empresaPertenece:String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Reclutador', reclutadorSchema);