"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Inicializa o servidor
const app = (0, express_1.default)();
const port = 3000;
// Middleware para aceitar JSON
app.use(express_1.default.json());
// Rota inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Gerenciador de Carros!');
});
// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
class Carro {
    constructor(marca, modelo, categoria, ano, quilometragem, valor) {
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
    new Carro('Marca A', 'Modelo A', 'SUV', 2020, 20000, 50000),
    new Carro('Marca B', 'Modelo B', 'Sedan', 2018, 10000, 60000),
];
app.get('/carros', (req, res) => {
    res.json(carros);
});
app.post('/carros', (req, res) => {
    const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;
    const novoCarro = new Carro(marca, modelo, categoria, ano, quilometragem, valor);
    carros.push(novoCarro);
    res.status(201).json(novoCarro);
});
app.post('/carros', (req, res) => {
    const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;
    const novoCarro = new Carro(marca, modelo, categoria, ano, quilometragem, valor);
    carros.push(novoCarro);
    res.status(201).json(novoCarro);
});
