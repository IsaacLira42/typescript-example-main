

export const ordenarElementos = (arrayAtual: string[]) => {
    return arrayAtual.sort((a, b) => b.localeCompare(a));
};