import { Retangulo, Circulo } from "./intefacesEmComum";


test('Retangulo deve calcular área corretamente', () => {
    const retangulo = new Retangulo(5, 10);
    expect(retangulo.calcularArea()).toBe(50);

    retangulo.largura = 8;
    retangulo.altura = 4;
    expect(retangulo.calcularArea()).toBe(32);
});

test('Circulo deve calcular área corretamente', () => {
    const circulo = new Circulo(7);
    expect(circulo.calcularArea()).toBeCloseTo(153.94, 1);

    circulo.raio = 3;
    expect(circulo.calcularArea()).toBeCloseTo(28.27, 1);
});

test('Ambas as classes implementam a interface Calculavel', () => {
    const retangulo = new Retangulo(2, 3);
    const circulo = new Circulo(5);

    expect(retangulo.calcularArea()).toBe(6);
    expect(circulo.calcularArea()).toBeGreaterThan(0);
});