const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false
});

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TOS: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    age: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false // Adjust if this field is mandatory
    },
    aboutMe: {
        type: DataTypes.TEXT, // Use TEXT for longer strings
        allowNull: true
    },
    interests: {
        type: DataTypes.JSON, // Use JSON to store an array of interests
        allowNull: true
    },
    profileImage: { // New field for profile image URL
        type: DataTypes.STRING,
        allowNull: true
    },
    question1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    question2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    question3: {
        type: DataTypes.STRING,
        allowNull: true
    },
    question4: {
        type: DataTypes.STRING,
        allowNull: true
    },
    question5: {
        type: DataTypes.STRING,
        allowNull: true
    },
    question6: {
        type: DataTypes.STRING,
        allowNull: true
    },
    question7: {
        type: DataTypes.STRING,
        allowNull: true
    },
    question8: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    // Other model options go here
});

// Sync all defined models to the DB.
sequelize.sync();

module.exports = {
    sequelize,
    User
};
