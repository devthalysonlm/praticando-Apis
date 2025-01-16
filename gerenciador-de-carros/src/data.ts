// Classe que representa um carro
export class Carro {
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
  export const carros: Carro[] = [
    new Carro('Marca A', 'Modelo A', 'SUV', 2020, 20000, 50000),
    new Carro('Marca B', 'Modelo B', 'Sedan', 2018, 10000, 60000),
  ];
  