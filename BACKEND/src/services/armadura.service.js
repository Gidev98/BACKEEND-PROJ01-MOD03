const armaduras = [
  {
    id: 1,
    nome: 'Armadura de Aquário',

    descricao:
      'A armadura de Aquário é a única capaz de atingir o limite máximo do congelamento, o zero absoluto.',

    usuarios: 'Camus, Dégel, Koh-í-noor, Tokisada, Mystoria.',

    background: 'media/aquario-back.jpg',

    imagem: './assets/media/AQUÁRIO/aquario-card.png',
  },
  {
    id: 2,

    nome: 'Armadura de Áries',

    descricao:
      'A Armadura de Áries, é uma das 13 Armaduras de Ouro do exército de Atena. O cavaleiro de Áries é o único que consegue consertar as 88 armaduras dos cavaleiros.',

    usuarios: 'Avenir, Gateguard, Kiki, Mu, Shion',

    background: 'media/aries-back.jpg',

    imagem: './assets/media/ÁRIES/aries-card.png',
  },
  {
    id: 3,

    nome: 'Armadura de Câncer',

    descricao:
      'O cavaleiro de Câncer possui a habilidade de remover a alma do seu oponente e enviá-la para a entrada do Mundo dos Mortos.',

    usuarios: 'Lancelot, Manigold, Máscara da Morte, Sage',

    background: 'media/cancer-back.jpg',

    imagem: './assets/media/CÂNCER/cancer-card.png',
  },
  {
    id: 4,

    nome: 'Armadura de Capricórnio',

    descricao:
      'O poder máximo de Capricórnio, no qual seus braços e pernas adquirem o mesmo poder de corte que a lendária espada Excalibur, cortando tudo que for tocado.',

    usuarios: 'Shura, Izo, El Cid, Ionia',

    background: '/media/capricornio-back.jpg',

    imagem: './assets/media/CAPRICÓRNIO/capricornio-card.png',
  },
];

const findAllArmaduraService = () =>{
    return armaduras;
};

const findByIdArmaduraService = (idParam) => {
  const armadura = armaduras.find((armadura) => armadura.id == idParam);
  return armadura;
};

const createArmaduraService = (newArmadura) =>{
    const newId = armaduras.length +1;
    newArmadura.id = newId;
    armaduras.push(newArmadura);

    return newArmadura
}

const updateArmaduraService = (id, armaduraEdit) => {
    armaduraEdit['id'] = id;
    const armaduraIndex = armaduras.findIndex((armadura)=> armadura.id == id);
    armaduras[armaduraIndex] = armaduraEdit;

    return armaduraEdit;
}

const deleteArmaduraService = (id) =>{
    const armaduraIndex = armaduras.findIndex((armadura) => armadura.id == id);

    return armaduras.splice(armaduraIndex, 1);
}

module.exports = {
  findAllArmaduraService,
  findByIdArmaduraService,
  createArmaduraService,
  updateArmaduraService,
  deleteArmaduraService,
};
