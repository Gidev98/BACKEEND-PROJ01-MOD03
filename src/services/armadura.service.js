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
  {
    id: 5,

    nome: 'Armadura de Libra',

    descricao:
      'A Armadura de Libra possui acoplada nela 12 tipos diferentes de armas que só podem ser usadas se o Cavaleiro de Libra e Atena acharem a causa justa, ou seja, uma para cada cavaleiro de ouro utilizar.',

    usuarios: 'Dohko, Shiryu, Genbu',

    background: './assets/media/LIBRA/libra-back.jpg',

    imagem: './assets/media/LIBRA/libra-card.png',
  },
  {
    id: 6,

    nome: 'Armadura de Sagitário',

    descricao:
      'A Armadura de Sagitário é representada por um centauro com asas. Segundo a mitologia, com o torso e a cabeça de um homem sobre o corpo de um cavalo, o centauro combina a natureza instintiva do animal com a razão e a virtude do homem.',

    usuarios: 'Sísifos, Aioros, Seiya',

    background: '/media/capricornio-back.jpg',

    imagem: './assets/media/SAGITÁRIO/sagitario-card.png',
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
