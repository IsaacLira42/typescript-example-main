// 1. Faça um programa TypeScript que calcule o quadrado de cada elemento do array, use as seguintes estratégias:

// a. iterando com for simples
export const quadradoForSimples = (umArray: Array<number>) => {
    let novoArray: number[] = [];

    for (let i = 0; i < umArray.length; i++) {
        let quadradoDeI = umArray[i] * umArray[i];

        novoArray.push(quadradoDeI);
    }

    return novoArray;
};

// b. iterando com forEach
export const quadradoForEach = (umArray: Array<number>) => {
    let novoArray: number[] = [];

    umArray.forEach((val) => {
        let quadradoDeI = val * val;

        novoArray.push(quadradoDeI);
    });

    return novoArray;
};