const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

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

app.get('/armaduras/todas-armaduras', (req, res) => {
  res.send(armaduras);
});

app.get('/armaduras/armadura/:id', (req, res) => {
  const idParam = req.params.id;
  const idArmadura = armaduras.find((armadura) => armadura.id == idParam);

  res.send(idArmadura);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
