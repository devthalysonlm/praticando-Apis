import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid'; // Para gerar IDs únicos

// Inicializa o servidor
const app = express();
const port = 3000;

// Middleware para aceitar JSON
app.use(express.json());

// Classe Carro
class Carro {
  constructor(
    public id: string,
    public marca: string,
    public modelo: string,
    public categoria: string,
    public ano: number,
    public quilometragem: number,
    public valor: number
  ) {}
}

// Lista inicial de carros
let carros: Carro[] = [
  new Carro(uuidv4(), 'Marca A', 'Modelo A', 'SUV', 2020, 20000, 50000),
  new Carro(uuidv4(), 'Marca B', 'Modelo B', 'Sedan', 2018, 10000, 60000),
];

// Rota inicial
app.get('/', (req: Request, res: Response) => {
  res.send('Bem-vindo ao Gerenciador de Carros!');
});

// Rota GET: Listar todos os carros
app.get('/carros', (req: Request, res: Response) => {
  res.json(carros);
});

// Rota GET: Obter um carro por ID
app.get('/carros/:id', (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const carro = carros.find((c) => c.id === id);

  if (carro) {
    res.json(carro);
  } else {
    res.status(404).json({ error: 'Carro não encontrado' });
  }
});

// Rota POST: Adicionar um novo carro
app.post('/carros', (req: Request, res: Response) => {
  const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;
  const novoCarro = new Carro(uuidv4(), marca, modelo, categoria, ano, quilometragem, valor);
  carros.push(novoCarro);
  res.status(201).json(novoCarro);
});

// Rota PUT: Atualizar um carro por ID
app.put('/carros/:id', (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;

  const carroIndex = carros.findIndex((c) => c.id === id);

  if (carroIndex >= 0) {
    carros[carroIndex] = {
      ...carros[carroIndex],
      marca,
      modelo,
      categoria,
      ano,
      quilometragem,
      valor,
    };
    res.json(carros[carroIndex]);
  } else {
    res.status(404).json({ error: 'Carro não encontrado' });
  }
});

// Rota DELETE: Remover um carro por ID
app.delete('/carros/:id', (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const index = carros.findIndex((c) => c.id === id);

  if (index >= 0) {
    const carroRemovido = carros.splice(index, 1);
    res.json(carroRemovido);
  } else {
    res.status(404).json({ error: 'Carro não encontrado' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
