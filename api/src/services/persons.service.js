const {models} = require('../libs/sequelize');

class PersonsService{
    constructor(){}

    async create(data){
        const res = await models.Person.create(data);
        return res;
    }

    async find(){
        const res = await models.Person.findAll();
        return res;
    }

    async findOne(id){
        const res = await models.Person.findByPk(id);
        return res;
    }

    async update(id, data){
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }

    async delete(id){
        const model = await this.findOne(id);
        console.log(model.id);
        await model.destroy();
        return {id: model.id};
    }

    async findByName(name){
        const user = await models.Person.findOne({
            where: {
              name: name
            }
          });
          return user;
    }

}
module.exports = PersonsService;