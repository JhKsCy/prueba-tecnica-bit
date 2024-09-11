const express = require('express')
const router = express.Router()
const { crearDepartamento, actualizarDepartamento, eliminarDepartamento, encontrarDepartamento, encontrarTodosLosDepartamentos } = require('./../controllers/departamento.controller')


router.post('/crear-departamento', crearDepartamento)
router.put('/actualizar-departamento/:id', actualizarDepartamento)
router.delete('/eliminar-departamento/:id', eliminarDepartamento)
router.get('/departamento/:id', encontrarDepartamento)
router.get('/departamentos', encontrarTodosLosDepartamentos)

module.exports = router