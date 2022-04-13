const route = require('express').Router();

const  controllerArmaduras = require('../controllers/armadura.controller')


route.get('/armaduras/todas-armaduras', controllerArmaduras.findAllArmadurasController);

route.get('/armaduras/armadura/:id', controllerArmaduras.findByIdArmaduraController);


module.exports = route;
