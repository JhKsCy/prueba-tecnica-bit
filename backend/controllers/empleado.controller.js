const Empleado = require('./../models/empleado')
const Departamento = require('./../models/Departamento')

const crearEmpleado = async(req, res) => {
    const { codigo, nombre, apellido1, apellido2, codigo_departamento } = req.body
    try {
        const empleado = await Empleado.findOne({ codigo: codigo });
        const departamento = await Departamento.findById( codigo_departamento );

        if(!departamento) {
            return res.status(400).json({
                ok: false, 
                msg: 'El departamento no ha sido encontrado'
            })
        }

        if(empleado) {
            return res.status(400).json({
                ok: false,
                msg: `El empleado con código ${codigo} ya ha sido creado`
            })
        }

        const dbEmpleado = new Empleado({
            codigo: codigo,
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            codigo_departamento: codigo_departamento
        })
        await dbEmpleado.save()
        
        return res.status(201).json({

            ok: true,
            msg: 'Empleado creado satisfactoriamente'
        })

    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contactarse con soporte'
        })
    }
}

const actualizarEmpleado = async(req, res) => {
    const { codigo, nombre, apellido1, apellido2, codigo_departamento } = req.body;
    const { id } = req.params;
    try {
        const nuevaData = {};
        if (codigo) nuevaData.codigo = codigo;
        if (nombre) nuevaData.nombre = nombre;
        if (apellido1) nuevaData.apellido1 = apellido1;
        if (apellido2) nuevaData.apellido2 = apellido2;
        if (codigo_departamento) nuevaData.codigo_departamento = codigo_departamento;

        const departamento = await Departamento.findById( codigo_departamento );

        if(!departamento) return res.status(400).json({
            ok: false, 
            msg: 'El departamento no ha sido encontrado'
        })

        const empleado = await Empleado.findByIdAndUpdate( id, nuevaData, { new: true });

        if (!empleado) {
            return res.status(404).json({
                ok: false,
                msg: 'Empleado no encontrado'
            })
        };

        return res.status(200).json({
            ok: true,
            msg: 'Empleado actualizado'
        });

    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contactarse con soporte'
        })
    }
}

const eliminarEmpleado = async(req, res) => {
    const {id} = req.params;
    try {
        const empleado = await Empleado.findByIdAndDelete(id);
        if(empleado) return res.status(200).json({
            ok: true,
            msg: 'El empleado ha sido eliminado satisfactoriamente'
        })

        return res.status(400).json({
            ok: false,
            msg: 'Empleado no encontrado'
        })

    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contactarse con soporte'
        })
    }
}

const encontrarEmpleado = async(req, res) => {
    const id = req.params.id
    try {
        const empleado = await Empleado.findById({ _id: id });
        if(empleado){
            return res.status(200).json({
                ok: true,
                msg: empleado
            })
        }

        return res.status(400).json({
            ok: false,
            msg: 'No se ha encontrado este empleado'
        })
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contactarse con soporte'
        })
    }
}

const encontrarTodosLosEmpleados = async(req, res) => {
    try {
        const empleados = await Empleado.find()
        return res.status(200).json({
            ok: true,
            mgs: 'Empleado encontrados',
            empleados: empleados
        })

    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contactarse con soporte'
        })
    }
}

module.exports = {
    crearEmpleado,
    actualizarEmpleado,
    eliminarEmpleado,
    encontrarEmpleado,
    encontrarTodosLosEmpleados
}