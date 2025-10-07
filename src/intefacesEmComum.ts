// Interface comum
export interface Calculavel {
    calcularArea(): number;
}

// Primeira classe
export class Retangulo implements Calculavel {
    constructor(public largura: number, public altura: number) { }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

// Segunda classe
export class Circulo implements Calculavel {
    constructor(public raio: number) { }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}