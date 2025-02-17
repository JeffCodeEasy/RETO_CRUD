const {Model, DataTypes } = require('sequelize');

const PERSON_TABLE = 'persons';

class Person extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: false
        }
    }
}

const PersonSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'
    },
    birthday:{
        allowNull:false,
        type: DataTypes.DATEONLY,
        field: 'birthday'
    },
    role:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'role'
    },
    salary:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'salary'
    }

}

module.exports = {
    Person,
    PersonSchema
}