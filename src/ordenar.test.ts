import { ordenarElementos } from "./ordenar";

test('ordenarDecrescente ["carro", "boneco", "ave", "lapis"] deve retornar ordenado Z-A',
    () => {
        const arrayTeste = ['carro', 'boneco', 'ave', 'lapis'];
        const respostaEsperada = ['lapis', 'carro', 'boneco', 'ave'];

        expect(ordenarElementos(arrayTeste)).toEqual(respostaEsperada);
    });