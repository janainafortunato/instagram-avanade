//const { post } = require('../app');
const { Usuario, sequelize } = require('../models');
//const { param } = require('../routes');

const usuariosController = {
    index: async(req, res) => {
        let  usuarios =  await Usuario.findAll()
        return res.json(usuarios);
    },

    create: async(req, res) => {
        let {nome, email, senha} = req.body;
        let crearUsuario = await Usuario.create({
            nome,
            email,
            senha
        });
        
        return res.json(crearUsuario)
    },
    update: async (req, res) => {
        let {id} =req.params;
        let {nome, email, senha } = req.body;

        let usuarioAtulizado = await Usuario.update({
            nome,
            email,
            senha
        }, {
            where: {id}
        })

        return res.send(usuarioAtulizado);
    },

    delete: async(req, res) => {
        let {id} = req.params;

        const usuarioDeletado = await Usuario.destroy({
            where: {id}
        });

        return res.json(usuarioDeletado);
    }

}

module.exports = usuariosController;

