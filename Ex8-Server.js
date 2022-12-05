/*● Desenvolva um back-end em node.js que responde a requisições
GET e POST em …/dados
● A requisição GET deve retornar um objeto JSON com dois atributos
e a POST deve receber ambos parâmetros e retornar uma
mensagem de sucesso
● Desenvolva uma página HTML + JavaScript que consome o
back-end desenvolvido e apresenta o retorno das requisições na
tela
● Considere o consumo do back-end desenvolvido via Fetch*/

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.listen((porta = 8000), () => {
  console.log("Servidor executando na porta " + porta);
});

app.get("/dados", (request, response) => {
  response.json({nome: 'Vinicius', profissao: 'dev'});
});

app.post("/dados", (request, response) => {
  console.log(request.body)
  response.send("Sucesso!!! Nome:" + request.body.nome + "  Profissão:" + request.body.profissao);
});
