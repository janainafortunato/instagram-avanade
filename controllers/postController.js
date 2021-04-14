const { Usuario, Post, sequelize } = require('../models');
//const Post = require('../models/Post');
//const Post = require('../models/Post');

const postController = {
    index: async(req, res) => {
        let  posts =  await Post.findAll()
        return res.json(posts);
    },

    create: async(req, res) => {
        let {texto, img, usuarios_id, n_likes} = req.body;
        let crearPost = await Post.create({
            texto,
            img,
            usuarios_id,
            n_likes
        });
        
        return res.json(crearPost)
    },
    update: async (req, res) => {
        let {id} =req.params;
        let {texto, img, usuarios_id, n_likes } = req.body;

        let postAtulizado = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        }, {
            where: {id}
        })

        return res.send(postAtulizado);
    },

    delete: async(req, res) => {
        let {id} = req.params;

        const postDeletado = await Post.destroy({
            where: {id}
        });

        return res.json(postDeletado);
    },

    show: async(req, res) => {
        let {usuarios_id} = req.params;
        let postBuscarUsuario = await Post.findAll(
        {
            where: {usuarios_id}
        });

        return res.json(postBuscarUsuario);
    }

}

module.exports = postController;