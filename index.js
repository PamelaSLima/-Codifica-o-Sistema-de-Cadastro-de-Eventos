let idade = 0;
let listaParticipante = 0;
let dataEvento = 0;

const data = new Date()

const dia = String(data.getDate()).padStart(2,'0')

const mes = String(data.getMonth() + 1).padStart(2, '0')

const ano = data.getFullYear()

const dataAtual = `${dia}/${mes}/${ano}`

dataEvento = prompt("Informe a data do evento");

if (dataEvento > dataAtual) {
    idade = prompt("Informe a sua idade");

    if (idade >=18){
        listaParticipante = prompt("Informe quantas pessoas na lista");

        if (listaParticipante <= 100) {
            console.log("Cadastro permitido");    
        } else {
            console.log("Cadastro não permitido limite excedido");
        }
    } else {
        console.log("Cadastro não permitido pela idade");
    }
} else {
    console.log("Cadastro não permitido por data inválida");
}








