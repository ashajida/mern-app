const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const Post = db.define('Post', {
    id: {
     type: DataTypes.INTEGER,
     primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
    },
    body: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    featured: {
        type: DataTypes.BOOLEAN,
    },
    categoryId: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    duration: {
        type: DataTypes.STRING,
    }
})

module.exports = Post;