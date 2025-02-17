const PersonsService = require('../services/persons.service');
const service = new PersonsService();

const create = async (req, res)=>{
    try {
        const response = await service.create(req.body);
        res.status(200).json({sucess: true, data: response});

    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

const get = async (req, res)=>{
    try {
        const {name} = req.query
        if(name){
            const response = await service.findByName(name);
            if(response == null){
                const response = await service.find();
                return res.json({success : true, data: response})

            }else{
                return res.json(response)
            }

        }
        const response = await service.find();
        return res.json({success : true, data: response})
        
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

const getById = async(req, res)=>{
    try {
        const {id} = req.params;
        const response = await service.findOne(id);
        res.json(response);
        
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
        
    }

}

const update = async(req, res)=>{
    try {
        const {id} = req.params;
        const body = req.body;
        const response = await service.update(id, body);  
        res.json(response);

    } catch (error) {
        res.status(500).send({success: false, message: error.message}); 
    }
}

const deleteUser = async(req, res)=>{
    try {
        const {id} = req.params;
        const response = await service.delete(id);
        res.json(response);
        
    } catch (error) {
        res.status(500).send({success: false, message: error.message}); 
    }
        
}




module.exports = {
    create, 
    get, 
    getById, 
    update, 
    deleteUser,
    
}