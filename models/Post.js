module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define(
        "Post", {
           texto: DataTypes.STRING,
           img: DataTypes.STRING,
           n_likes: DataTypes.INTEGER,
           usuarios_id: DataTypes.INTEGER, 
        },{
            tableName: "posts",
            timestamps: false
        }
    );

    Post.associate = (models) => {
        //relação N:1 (vários posts de 1 usuario)
        Post.belongsTo(models.Usuario, {as: "usuario", foreignKey: "usuarios_id"});
        Post.hasMany(models.Comentario, {as: "comentarios", foreignKey: "posts_id"});
        //relação N:M (post tem curtidas de varios usuarios)
        Post.belongsToMany(models.Usuario, {
            as: "curtiu",
            through: "curtidas",
            foreignKey: "posts_id",
            otherkey: "usuarios_id",
            timestamps: false

        });
    }

    return Post;

}
