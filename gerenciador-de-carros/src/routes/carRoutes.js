"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data");
const router = (0, express_1.Router)();
// Rota para listar todos os carros (GET /carros)
router.get('/', (req, res) => {
    res.json(data_1.carros);
});
// Rota para adicionar um novo carro (POST /carros)
router.post('/', (req, res) => {
    const { marca, modelo, categoria, ano, quilometragem, valor } = req.body;
    const novoCarro = new data_1.Carro(marca, modelo, categoria, ano, quilometragem, valor);
    data_1.carros.push(novoCarro);
    res.status(201).json(novoCarro);
});
exports.default = router;
