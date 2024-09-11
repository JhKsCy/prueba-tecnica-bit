const express = require('express')
const router = express.Router()
const empleados = require('./empleados.routes')
const departamentos = require('./departamentos.routes')

router.use('/api', empleados)
router.use('/api', departamentos)


module.exports = router