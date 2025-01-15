import express, { Request, Response } from 'express';

// Inicializa o servidor
const app = express();
const port = 3000;

// Middleware para aceitar JSON
app.use(express.json());

// Rota inicial
app.get('/', (req: Request, res: Response) => {
  res.send('Bem-vindo ao Gerenciador de Carros!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


class Carro {
    constructor(
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
    new Carro('Marca A', 'Modelo A', 'SUV', 2020, 20000, 50000),
    new Carro('Marca B', 'Modelo B', 'Sedan', 2018, 10000, 60000),
  ];

  
  app.get('/carros', (req: Request, res: Response) => {
    res.json(carros);
  });


  app.post('/carros', (req: Request, res: Response) => {
    const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;
    const novoCarro = new Carro(marca, modelo, categoria, ano, quilometragem, valor);
    carros.push(novoCarro);
    res.status(201).json(novoCarro);
  });

  
  app.post('/carros', (req: Request, res: Response) => {
    const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;
    const novoCarro = new Carro(marca, modelo, categoria, ano, quilometragem, valor);
    carros.push(novoCarro);
    res.status(201).json(novoCarro);
  });

 
  