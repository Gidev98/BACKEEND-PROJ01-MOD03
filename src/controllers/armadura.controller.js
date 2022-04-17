const armaduraService = require('../services/armadura.service');

const findAllArmadurasController = (req, res) => {
  const armaduras = armaduraService.findAllArmaduraService();

  if(armaduras.length == 0){
      return res.status(404).send({ message: 'Não existe Armadura Sagrada cadastrada!' });
  }
  res.send(armaduras);
};

const findByIdArmaduraController = (req, res) => {
  const idParam = +req.params.id;

  if(!idParam){
       return res.status(400).send({ message: 'ID inválido' });
  }
  const idArmadura = armaduraService.findByIdArmaduraService(idParam);

  if (!idArmadura) {
    return res.status(404).send({ message: 'Armadura não encontrada!' });
  }
  
  res.send(idArmadura);
};

const createArmaduraController = (req, res) => {
  const armadura = req.body;

  if (
    !armadura.nome ||
    !armadura.descricao ||
    !armadura.usuarios ||
    !armadura.background ||
    !armadura.imagem
  ) {
    return res.status(400).send({ message: 'Objeto incompleto!' });
  }
  const newArmadura = armaduraService.createArmaduraService(armadura);
  res.status(201).send(newArmadura);
};

const updateArmaduraController = (req, res) => {
  const idParam = Number(req.params.id);

   if (!idParam) {
     return res.status(400).send({ message: 'ID inválido' });
   }

  const armaduraEdit = req.body;

  if (
    !armaduraEdit ||
    !armaduraEdit.nome ||
    !armaduraEdit.descricao ||
    !armaduraEdit.usuarios ||
    !armaduraEdit.background ||
    !armaduraEdit.imagem
  ) {
    return res.status(400).send({ message: 'Objeto incompleto!' });
  }

  const updateArmadura = armaduraService.updateArmaduraService(
    idParam,
    armaduraEdit,
  );

  res.send(updateArmadura);
};

const deleteArmaduraController = (req, res) => {
  const idParam = Number(req.params.id);

   if (!idParam) {
     return res.status(400).send({ message: 'ID inválido' });
   }

  armaduraService.deleteArmaduraService(idParam);
  res.send({ message: 'Armadura deletada com sucesso!' });
};

module.exports = {
  findAllArmadurasController,
  findByIdArmaduraController,
  createArmaduraController,
  updateArmaduraController,
  deleteArmaduraController,
};
