//definimos a interface para o formato dos carros
export interface Car {
    id:number;
    modelo:string;
    marca:string;
    ano:number;
}

//Criamos um array vazio que funcionará como nosso "banco de dados" em memória 
export const carros: Car[] = [];

