const listaDeCompras = [
    "Proteina Cereal",
    "Proteina Frango",
    "Proteina Ovos",
    "Verdura Alface",
    "Verdura Colve",
    "Verdura Espinafre",
    "Fruta Limão",
    "Fruta Uva",
    "Fruta Laranja",
    "Carne Maminha",
    "Carne Alcatra"
];

// map

const listaMaiusculas = listaDeCompras.map(item => item.toUpperCase());
console.log(listaMaiusculas);

const replaceItem = listaDeCompras.map(item => item.replace(" ", " -> "));
console.log(replaceItem);

const addASerComprado = listaDeCompras.map(item => item + ': a ser comprado');
console.log(addASerComprado);

const somenteNomeItem = listaDeCompras.map(item => item.substring(item.indexOf(" ") + 1));
console.log(somenteNomeItem);

const mapTodasAtribuicoes = listaDeCompras.map(item => item.toUpperCase())
                                       .map(item => item.replace(" ", " -> "))
                                       .map(item => item + ': a ser comprado')
                                       .map(item => item.substring(item.indexOf(" ") + 1));
console.log(mapTodasAtribuicoes);

// filter

const filtroCarnes = listaDeCompras.filter(item => item.includes('Carne'));
console.log(filtroCarnes);

const carnes = filtroCarnes.map(item => item.replace('Carne ', ''));
console.log(carnes);

const comecamComC = somenteNomeItem.filter(item => item.charAt(0) === 'C');
console.log(comecamComC);

const ItensNomesGrandes = somenteNomeItem.filter(item => item.length > 5);
console.log(ItensNomesGrandes);

const filterTodasAtribuicoes = listaDeCompras.filter(item => item.endsWith('a'))
                                             .filter(item => item.includes('Carne'))
                                             .map(item => item.replace('Carne ', ''))
                                             .filter(item => item.length > 5);

console.log(filterTodasAtribuicoes);

// Reduce

const lengthString = somenteNomeItem.map(item => item.length);
const somaTotalLengthStrings = lengthString.reduce((acc, value) => acc + value);
console.log(somaTotalLengthStrings);

const numerosLista = [3, 6, 7, 2, 3, 5, 4, 9, 6];

const accTotal = numerosLista.reduce((acc, value) => acc + value, 0);
const accTotalIniciandoEm10 = numerosLista.reduce((acc, val) => acc + val, 10);
console.log(accTotal);
// console.log(accTotalIniciandoEm10);

const valoresMultPor3 = numerosLista.map(item => item * 3);
console.log(valoresMultPor3);

const multiplicaTodos = valoresMultPor3.reduce((acc, val) => acc * val, 1);
console.log(multiplicaTodos);