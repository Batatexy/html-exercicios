var lista = [];
function getLista() {
    return lista;
}
function setLista(novaLista) {
    lista = novaLista;
}
function adicionarNaLista(numero) {
    var novaLista = getLista();
    novaLista.push(numero);
    setLista(novaLista);
}
function removerUltimoItem() {
    var novaLista = getLista();
    novaLista.pop();
    setLista(novaLista);
}
function removerUmNumero(numero) {
    var novaLista = getLista();
    novaLista.forEach(function (item, index) {
        if (item == numero) {
            lista.splice(index, 1);
        }
    });
    setLista(novaLista);
}
function atualizarNumero(numeroAntigo, numeroNovo) {
    var novaLista = getLista();
    novaLista.forEach(function (item, index) {
        if (item == numeroAntigo) {
            lista[index] = numeroNovo;
        }
    });
    setLista(novaLista);
}
function somarNumeros(numeroUm, numeroDois) {
    return numeroUm + numeroDois;
}
adicionarNaLista(12);
adicionarNaLista(somarNumeros(12, 5));
adicionarNaLista(12);
adicionarNaLista(12);
console.log("Antes do Pop: ", getLista());
removerUltimoItem();
console.log("Depois do Pop: ", getLista());
var numero = 12;
removerUmNumero(numero);
console.log("Depois de remover o numero ", numero, ": ", getLista());
adicionarNaLista(12);
adicionarNaLista(12);
console.log("Antes de atualizar o numero ", +numero, " para ", numero + 1, ": ", getLista());
atualizarNumero(numero, numero + 1);
console.log("Depois de atualizar o numero ", +numero, " para ", numero + 1, ": ", getLista());
function somarMatrizes(matrizUm, matrizDois) {
    var matrizSomada = [];
    for (var i = 0; i < matrizUm.length; i++) {
        matrizSomada.push([]);
        for (var j = 0; j < matrizUm.length; j++) {
            matrizSomada[i].push(matrizUm[i][j] + matrizDois[i][j]);
        }
    }
    return matrizSomada;
}
console.log(somarMatrizes([[10, 20, 30], [40, 50, 60], [70, 80, 90]], [[90, 80, 70], [60, 50, 40], [30, 20, 10]]));
function criarTriangulo(largura, altura) {
    //console.log("*")
    for (var i = 0; i < altura; i++) {
        var texto = "";
        for (var j = 0; j <= i % largura; j++) {
            texto += "*";
        }
        console.log(texto);
    }
}
criarTriangulo(3, 40);
function numeroParaListaOrdenada(numero) {
    var tamanho = String(numero).length;
    var lista = [];
    for (var i = 1; i <= tamanho; i++) {
        numero /= 10;
        var numeroString = numero.toString();
        var numeroSeparado = numeroString.split('.');
        numero = parseInt(numeroSeparado[0]);
        var decimal = parseInt(numeroSeparado[1]);
        lista.push(decimal);
    }
    console.log("Antes do Bubble Sort: ", lista);
    lista.forEach(function () {
        for (var j = 1; j < tamanho; j++) {
            if (lista[j - 1] > lista[j]) {
                var auxiliar = lista[j - 1];
                lista[j - 1] = lista[j];
                lista[j] = auxiliar;
            }
        }
    });
    return lista;
}
var numeroDois = 789353;
console.log("O Numero ", numeroDois, " na lista ordenada fica: ", numeroParaListaOrdenada(numeroDois));
function encontrarIndex(texto, subTexto) {
    return texto.split(subTexto)[0];
}
console.log(encontrarIndex("O cria beijou a sua mãe", "a sua mãe"));
function transformarSegundos(horario) {
    var horarioArray = horario.split(":");
    var horarioArrayNumber = [];
    horarioArray.forEach(function (item, index) {
        horarioArrayNumber.push(parseInt(item));
        if (horarioArrayNumber[index] == 0) {
            horarioArrayNumber[index] = 1;
        }
    });
    console.log(horarioArrayNumber);
    return horarioArrayNumber[2] * (horarioArrayNumber[1] * 60) * (horarioArrayNumber[0] * 360);
}
console.log(transformarSegundos("00:10:1"));
