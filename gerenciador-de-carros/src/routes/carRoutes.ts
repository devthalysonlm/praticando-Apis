import { Router, Request, Response } from 'express';
import { Carro, carros } from '../data';

const router = Router();

// Rota para listar todos os carros (GET /carros)
router.get('/', (req: Request, res: Response) => {
  res.json(carros);
});

// Rota para adicionar um novo carro (POST /carros)
router.post('/', (req: Request, res: Response) => {
  const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;

  const novoCarro = new Carro(marca, modelo, categoria, ano, quilometragem, valor);
  carros.push(novoCarro);

  res.status(201).json(novoCarro);
});

export default router;
