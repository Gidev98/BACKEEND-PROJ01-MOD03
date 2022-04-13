const route = require('express').Router();

const  controllerArmaduras = require('../controllers/armadura.controller')


route.get('/armaduras/todas-armaduras', controllerArmaduras.findAllArmadurasController);

route.get('/armaduras/armadura/:id', controllerArmaduras.findByIdArmaduraController);

route.post('/armaduras/create', controllerArmaduras.createArmaduraController);

route.put('/armaduras/update/:id', controllerArmaduras.updateArmaduraController);

route.delete('/armaduras/delete/:id', controllerArmaduras.deleteArmaduraController);

module.exports = route;
