const armaduraService = require('../services/armadura.service') 


const findAllArmadurasController = (req, res) =>{
    const armaduras = armaduraService.findAllArmaduraService();
    res.send(armaduras)
}


const findByIdArmaduraController = (req, res) => {
    const idParam = req.params.id;
    const idArmadura = armaduraService.findByIdArmaduraService(idParam);

    res.send(idArmadura);
}









module.exports = {
    findAllArmadurasController,
    findByIdArmaduraController,
};
