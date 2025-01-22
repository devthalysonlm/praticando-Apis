import { Router, Request, Response } from 'express';
import { Carro, carros } from './data';
import { v4 as uuidv4 } from 'uuid'; // Para gerar IDs únicos

const router = Router();

// Rota para listar todos os carros
router.get('/', (req: Request, res: Response) => {
  res.json(carros);
});

// Rota para listar um carro específico por ID
router.get('/:id', (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const carro = carros.find((c) => c.id === id);

  if (carro) {
    res.json(carro);
  } else {
    res.status(404).json({ error: 'Carro não encontrado' });
  }
});

// Rota para adicionar um novo carro
router.post('/', (req: Request, res: Response) => {
  const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;

  const novoCarro = new Carro(uuidv4(), marca, modelo, categoria, ano, quilometragem, valor);
  carros.push(novoCarro);

  res.status(201).json(novoCarro);
});

// Rota para atualizar um carro por ID
router.put('/:id', (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;

  const carroIndex = carros.findIndex((c) => c.id === id);

  if (carroIndex >= 0) {
    carros[carroIndex] = { ...carros[carroIndex], marca, modelo, categoria, ano, quilometragem, valor };
    res.json(carros[carroIndex]);
  } else {
    res.status(404).json({ error: 'Carro não encontrado' });
  }
});

// Rota para deletar um carro por ID
router.delete('/:id', (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const index = carros.findIndex((c) => c.id === id);

  if (index >= 0) {
    const carroRemovido = carros.splice(index, 1);
    res.json(carroRemovido);
  } else {
    res.status(404).json({ error: 'Carro não encontrado' });
  }
});

export default router;
