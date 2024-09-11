const express = require('express')
const router = express.Router()
const { crearEmpleado, actualizarEmpleado, eliminarEmpleado, encontrarEmpleado, encontrarTodosLosEmpleados } = require('./../controllers/empleado.controller')


router.post('/crear-empleado', crearEmpleado)
router.put('/actualizar-empleado/:id', actualizarEmpleado)
router.delete('/eliminar-empleado/:id', eliminarEmpleado)
router.get('/empleado/:id', encontrarEmpleado)
router.get('/empleados', encontrarTodosLosEmpleados)

module.exports = router