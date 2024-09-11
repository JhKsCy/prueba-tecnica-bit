const { Schema, model } = require('mongoose')

const departamentoSchema = Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model ( 'Departamentos', departamentoSchema )