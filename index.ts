let lista: Array<number> = [];

function getLista(): Array<number> {
    return lista;
}



function setLista(novaLista: Array<number>) {
    lista = novaLista;
}

function adicionarNaLista(numero: number) {
    let novaLista: Array<number> = getLista();
    novaLista.push(numero);

    setLista(novaLista);
}

function removerUltimoItem() {
    let novaLista: Array<number> = getLista();
    novaLista.pop();
    setLista(novaLista);
}

function removerUmNumero(numero: number) {
    let novaLista: Array<number> = getLista();

    novaLista.forEach((item, index) => {
        if (item == numero) {
            lista.splice(index, 1);
        }
    });

    setLista(novaLista);
}

function atualizarNumero(numeroAntigo: number, numeroNovo: number) {
    let novaLista: Array<number> = getLista();

    novaLista.forEach((item, index) => {
        if (item == numeroAntigo) {
            lista[index] = numeroNovo;
        }
    });

    setLista(novaLista);
}

function somarNumeros(numeroUm: number, numeroDois: number): number {
    return numeroUm + numeroDois;
}

adicionarNaLista(12);
adicionarNaLista(somarNumeros(12, 5));
adicionarNaLista(12);
adicionarNaLista(12);
console.log("Antes do Pop: ", getLista());

removerUltimoItem();
console.log("Depois do Pop: ", getLista());

const numero: number = 12;
removerUmNumero(numero);
console.log("Depois de remover o numero ", numero, ": ", getLista());

adicionarNaLista(12);
adicionarNaLista(12);
console.log("Antes de atualizar o numero ", + numero, " para ", numero + 1, ": ", getLista());

atualizarNumero(numero, numero + 1);
console.log("Depois de atualizar o numero ", + numero, " para ", numero + 1, ": ", getLista());



function somarMatrizes(matrizUm: Array<Array<number>>, matrizDois: Array<Array<number>>): Array<Array<number>> {
    let matrizSomada: Array<Array<number>> = [];

    for (let i: number = 0; i < matrizUm.length; i++) {
        matrizSomada.push([]);

        for (let j: number = 0; j < matrizUm.length; j++) {
            matrizSomada[i].push(matrizUm[i][j] + matrizDois[i][j]);
        }
    }

    return matrizSomada;
}
console.log(somarMatrizes([[10, 20, 30], [40, 50, 60], [70, 80, 90]], [[90, 80, 70], [60, 50, 40], [30, 20, 10]]));

function criarTriangulo(largura: number, altura: number) {
    //console.log("*")

    for (let i: number = 0; i < altura; i++) {
        let texto: string = "";


        for (let j: number = 0; j <= i % largura; j++) {
            texto += "*";
        }

        console.log(texto);



    }
}
criarTriangulo(3, 40);

function numeroParaListaOrdenada(numero: number): Array<number> {
    let tamanho: number = String(numero).length;
    let lista: Array<number> = [];

    for (let i: number = 1; i <= tamanho; i++) {
        numero /= 10;

        let numeroString: string = numero.toString();
        let numeroSeparado: Array<string> = numeroString.split('.');

        numero = parseInt(numeroSeparado[0]);
        let decimal: number = parseInt(numeroSeparado[1]);

        lista.push(decimal);
    }

    console.log("Antes do Bubble Sort: ", lista);

    lista.forEach(() => {
        for (let j: number = 1; j < tamanho; j++) {
            if (lista[j - 1] > lista[j]) {
                let auxiliar: number = lista[j - 1];

                lista[j - 1] = lista[j];
                lista[j] = auxiliar;
            }
        }
    });

    return lista;
}




const numeroDois: number = 789353;
console.log("O Numero ", numeroDois, " na lista ordenada fica: ", numeroParaListaOrdenada(numeroDois));



function encontrarIndex(texto: string, subTexto: string): string {

    return texto.split(subTexto)[0];
}

console.log(encontrarIndex("O cria beijou a sua mãe", "a sua mãe"));







function transformarSegundos(horario: string): number {
    let horarioArray: Array<string> = horario.split(":");
    let horarioArrayNumber: Array<number> = [];

    horarioArray.forEach((item, index) => {
        horarioArrayNumber.push(parseInt(item));

        if (horarioArrayNumber[index] == 0) {
            horarioArrayNumber[index] = 1;
        }
    });

    console.log(horarioArrayNumber);

    return horarioArrayNumber[2] * (horarioArrayNumber[1] * 60) * (horarioArrayNumber[0] * 360);
}

console.log(transformarSegundos("00:10:1"));
