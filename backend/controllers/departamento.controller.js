const Departamento = require('./../models/Departamento')

const crearDepartamento = async(req, res) => {
    const { nombre } = req.body
    try {
        const departamento = await Departamento.findOne({ nombre: nombre });
        if(departamento) return res.status(404).json({
            ok: false,
            msg: `El departamento ${nombre} ya ha sido creado`
        })

        const dbDepartamento = new Departamento({
            nombre: nombre
        })
        await dbDepartamento.save()
        
        return res.status(201).json({

            ok: true,
            msg: 'Departamento creado satisfactoriamente'
        })

    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contactarse con soporte'
        })
    }
}

const actualizarDepartamento = async(req, res) => {
    const { nombre } = req.body;
    const { id } = req.params;
    try {
        const nuevaData = { nombre };
        const departamento = await Departamento.findByIdAndUpdate( id, nuevaData, { new: true });
        
        if (!departamento) {
            return res.status(404).json({
                ok: false,
                msg: 'Departamento no encontrado'
            })
        };
        
        return res.status(200).json({
            ok: true,
            msg: 'Departamento actualizado'
        });

    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contactarse con soporte'
        })
    }
}

const eliminarDepartamento = async(req, res) => {
    const {id} = req.params;
    try {
        const departamento = await Departamento.findByIdAndDelete(id);
        if(departamento) return res.status(200).json({
            ok: true,
            msg: 'El departamento ha sido eliminado satisfactoriamente'
        })

        return res.status(400).json({
            ok: false,
            msg: 'Departamento no encontrado'
        })

    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contactarse con soporte'
        })
    }
}

const encontrarDepartamento = async(req, res) => {
    const id = req.params.id
    try {
        const departamento = await Departamento.findById({ _id: id });
        if(departamento){
            return res.status(200).json({
                ok: true,
                msg: departamento
            })
        }

        return res.status(400).json({
            ok: false,
            msg: 'No se ha encontrado este departamento'
        })
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contactarse con soporte'
        })
    }
}

const encontrarTodosLosDepartamentos = async(req, res) => {
    try {
        const departamentos = await Departamento.find()
        return res.status(200).json({
            ok: true,
            mgs: 'Departamentos encontrados',
            departamentos: departamentos
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
    crearDepartamento,
    actualizarDepartamento,
    eliminarDepartamento,
    encontrarDepartamento,
    encontrarTodosLosDepartamentos
}