import { extraiPares } from "./extraiPares";

test('extraiPares [8, 3, 9, 5, 6, 12] deve retornar [8, 6, 12]', () => {
    const arrayTeste = [8, 3, 9, 5, 6, 12];
    const respostaEsperada = [8, 6, 12];

    expect(extraiPares(arrayTeste)).toEqual(respostaEsperada);
});