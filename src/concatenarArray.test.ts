import { concatenarArray } from "./concatenarArray";

test('concatenarArray ["Arrays", "com", "TypeScript"] deve retornar "Arrays com TypeScript"', () => {
    const arrayTeste = ["Arrays", "com", "TypeScript"];
    const respostaEsperada = "Arrays com TypeScript";

    expect(concatenarArray(arrayTeste)).toBe(respostaEsperada);
});