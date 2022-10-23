/*● Desenvolva um back-end em node.js que responde a requisições
GET e POST em …/dados
● A requisição GET deve retornar um objeto JSON com dois atributos
e a POST deve receber ambos parâmetros e retornar uma
mensagem de sucesso
● Desenvolva uma página HTML + JavaScript que consome o
back-end desenvolvido e apresenta o retorno das requisições na
tela
● Considere o consumo do back-end desenvolvido via Fetch*/

const { response } = require("express");
const express = require("express");
const app = express();

app.listen(porta = 3333, () => {
    console.log("Servidor executando na porta "
        + porta);
});

app.get("/", (request, response) => {
    response.send("Página Inicial");
});

app.get("/dados/:query?", (request, response) => {
    response.send(request.query);
});

app.use(express.urlencoded(
    {
        extended: true
    }
));

app.post("/dados", (request, response) => {
    response.send(request.body);
    console.log("Sucesso!!!");
});

/*async function requisitar() {
    try {
        const fetchDados = await
            fetch("http://127.0.0.1:3333/dados")
        if (fetchDados.status >= 200 && fetchDados.status < 300) {
            respostaJSON = await fetchDados.json();
            console.log({"nome": "nome inserido" , "profissao": "profissão inserida"});
        } else {
            throw new Error(fetchDados.status + " :(");
        }
    } catch (err) {
        console.log("Inssucesso!");
    }
}
requisitar();*/