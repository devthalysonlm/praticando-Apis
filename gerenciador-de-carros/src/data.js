"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carros = exports.Carro = void 0;
// Classe que representa um carro
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
exports.Carro = Carro;
// Lista inicial de carros
exports.carros = [
    new Carro('Marca A', 'Modelo A', 'SUV', 2020, 20000, 50000),
    new Carro('Marca B', 'Modelo B', 'Sedan', 2018, 10000, 60000),
];
