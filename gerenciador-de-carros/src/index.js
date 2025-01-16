"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid"); // Para gerar IDs únicos
// Inicializa o servidor
const app = (0, express_1.default)();
const port = 3000;
// Middleware para aceitar JSON
app.use(express_1.default.json());
// Classe Carro
class Carro {
    constructor(id, marca, modelo, categoria, ano, quilometragem, valor) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.categoria = categoria;
        this.ano = ano;
        this.quilometragem = quilometragem;
        this.valor = valor;
    }
}
// Lista inicial de carros
let carros = [
    new Carro((0, uuid_1.v4)(), 'Marca A', 'Modelo A', 'SUV', 2020, 20000, 50000),
    new Carro((0, uuid_1.v4)(), 'Marca B', 'Modelo B', 'Sedan', 2018, 10000, 60000),
];
// Rota inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Gerenciador de Carros!');
});
// Rota GET: Listar todos os carros
app.get('/carros', (req, res) => {
    res.json(carros);
});
// Rota GET: Obter um carro por ID
app.get('/carros/:id', (req, res) => {
    const { id } = req.params;
    const carro = carros.find((c) => c.id === id);
    if (carro) {
        res.json(carro);
    }
    else {
        res.status(404).json({ error: 'Carro não encontrado' });
    }
});
// Rota POST: Adicionar um novo carro
app.post('/carros', (req, res) => {
    const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;
    const novoCarro = new Carro((0, uuid_1.v4)(), marca, modelo, categoria, ano, quilometragem, valor);
    carros.push(novoCarro);
    res.status(201).json(novoCarro);
});
// Rota PUT: Atualizar um carro por ID
app.put('/carros/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;
    const carroIndex = carros.findIndex((c) => c.id === id);
    if (carroIndex >= 0) {
        carros[carroIndex] = Object.assign(Object.assign({}, carros[carroIndex]), { marca,
            modelo,
            categoria,
            ano,
            quilometragem,
            valor });
        res.json(carros[carroIndex]);
    }
    else {
        res.status(404).json({ error: 'Carro não encontrado' });
    }
});
// Rota DELETE: Remover um carro por ID
app.delete('/carros/:id', (req, res) => {
    const { id } = req.params;
    const index = carros.findIndex((c) => c.id === id);
    if (index >= 0) {
        const carroRemovido = carros.splice(index, 1);
        res.json(carroRemovido);
    }
    else {
        res.status(404).json({ error: 'Carro não encontrado' });
    }
});
// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
