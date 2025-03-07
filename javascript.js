//
function obterNumeros() {
    
    // Pega o valor adicionado pelo usuário n o elemento com id ="entradaNumero1"
    let num1 = parseFloat(document.getElementById("entradaNumero1").value);
    console.log("Numero 1 adicionado: ", num1);

    // Pega o valor adicionado pelo usuário n o elemento com id ="entradaNumero2"
    let num2 = parseFloat(document.getElementById("entradaNumero2").value);
    console.log("Numero 2 adicionado: ", num2);

    // Verifica se os números adicionado foram preenchidos ou não
    if (isNaN(num1) || isNaN(num2)) {
        
        // Caso não foi preenchido algum dos números, será exibida essa mensagem
        document.getElementById("resultado").innerHTML = "Erro, Digite números!";

        // retorna nulo
        return null;
    }

    // Se tudo tiver preenchido, vai retorna os valores que foram adicionados pelo usuário
    return { num1, num2 };
}


// Função que fará a soma dos valores, quando o usuário clicar no botão Adição
function adicao() {

    // pega os numeros que foram adicionados e salva na var "numeros": {num1: ?, num2: ?}
    let numeros = obterNumeros();

    // Verificar se há valores dentro da var, se não tiver retorna
    if (!numeros) return;

    // Pega os valores e faz a soma dele, salvando na var "resultado"
    let resultado = numeros.num1 + numeros.num2;
    console.log("Soma resultado: ", resultado);

    // Exibi o valor do resultado no HTML, no id selecionado id="resultado"
    document.getElementById("resultado").innerHTML = `Resultado da Adição: ${resultado}`;

    // Executa a função limpar, para limpar os campos de entrada
    limpar();

    // Exibir a div com o resultado
    document.getElementById("tela_3").style.display = 'block';

    //
    desaprecerDiv();

}

// Função que fará a soma dos valores, quando o usuário clicar no botão subtração
function subtracao() {

    // pega os numeros que foram adicionados e salva na var "numeros": {num1: ?, num2: ?}
    let numeros = obterNumeros();

    // Verificar se há valores dentro da var, se não tiver retorna
    if (!numeros) return;

    // Pega os valores e faz a soma dele, salvando na var "resultado"
    let resultado = numeros.num1 - numeros.num2;
    console.log("Soma resultado: ", resultado);

    // Exibi o valor do resultado no HTML, no id selecionado id="resultado"
    document.getElementById("resultado").innerHTML = `Resultado da Subtração: ${resultado}`;

    // Executa a função limpar, para limpar os campos de entrada
    limpar();

    //
    document.getElementById("tela_3").style.display = 'block';

    //
    desaprecerDiv();
    
}

// Função que fará a soma dos valores, quando o usuário clicar no botão Divisão
function divisao() {

    // pega os numeros que foram adicionados e salva na var "numeros": {num1: ?, num2: ?}
    let numeros = obterNumeros();

    // Verificar se há valores dentro da var, se não tiver retorna
    if (!numeros) return;

    // Pega os valores e faz a soma dele, salvando na var "resultado"
    let resultado = numeros.num1 / numeros.num2;
    console.log("Soma resultado: ", resultado);

    // Exibi o valor do resultado no HTML, no id selecionado id="resultado"
    document.getElementById("resultado").innerHTML = `Resultado da Divisão: ${resultado}`;

    // Executa a função limpar, para limpar os campos de entrada
    limpar();

    //
    document.getElementById("tela_3").style.display = 'block';

    //
    desaprecerDiv();
    
}

// Função que fará a soma dos valores, quando o usuário clicar no botão Multiplicação
function multi() {

    // pega os numeros que foram adicionados e salva na var "numeros": {num1: ?, num2: ?}
    let numeros = obterNumeros();

    // Verificar se há valores dentro da var, se não tiver retorna
    if (!numeros) return;

    // Pega os valores e faz a soma dele, salvando na var "resultado"
    let resultado = numeros.num1 * numeros.num2;
    console.log("Soma resultado: ", resultado);

    // Exibi o valor do resultado no HTML, no id selecionado id="resultado"
    document.getElementById("resultado").innerHTML = `Resultado da Multiplicação: ${resultado}`;

    // Executa a função limpar, para limpar os campos de entrada
    limpar();

    // Exibir a tela com o resultado
    document.getElementById("tela_3").style.display = 'block';

    //
    desaprecerDiv();
    
}

function limpar() {
    
    // Limpa os campos de entrada, onde o usuário adicionou os números
    document.getElementById("entradaNumero1").value = ``;
    document.getElementById("entradaNumero2").value = ``;
}

function desaprecerDiv() {
    
    //
    document.getElementById("tela_inicial").style.display = 'none';
    document.getElementById("tela_operacoes").style.display = 'none';
}

function reiniciar() {
    
    //reiniciar
    location.reload();
}

function sair() {
    
    //
    document.getElementById("telaFinal").style.display = 'block';

    //
    document.getElementById("tela_3").style.display = 'none';

}