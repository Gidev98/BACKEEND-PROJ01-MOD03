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

const createArmaduraController = (req, res) =>{
    const armadura = req.body;
    const newArmadura = armaduraService.createArmaduraService(armadura);
    res.send(newArmadura)
}

const updateArmaduraController = (req, res) => {
    const idParam = Number(req.params.id)
    const armaduraEdit = req.body;
    const updateArmadura = armaduraService.updateArmaduraService(idParam, armaduraEdit);

    res.send(updateArmadura);
};

const deleteArmaduraController = (req, res) => {
    const idParam = Number(req.params.id);
    armaduraService.deleteArmaduraService(idParam);
    res.send({message: 'Armadura deletada com sucesso'})
}


module.exports = {
  findAllArmadurasController,
  findByIdArmaduraController,
  createArmaduraController,
  updateArmaduraController,
  deleteArmaduraController,
};
