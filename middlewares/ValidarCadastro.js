const usuariosController = require('../controllers/usuariosController');
const {Usuario, sequelize} = require('../models')

module.exports = async(req, res, next) => {
    let {email, nome , senha} = req.body;
    let usuario = await Usuario.findAll({where: {email}});

    if (usuario.length) {

        res.status(400).json({erro: "Email já Cadastrado, cadastre outro email!"});
        return;

    }else if(nome === null || email === null || senha === null ){

        res.status(400).json({erro: "O usuario não cadastrou o nome, email ou senha"});
        return; 

    } else if(senha.length < 6 && senha.length >= 12 ){

        res.status(400).json({erro: "A senha não pode ser menor que 6 ou maior de 12 digitos!"});
        return;

    } 
    else{
        next();
    }
}