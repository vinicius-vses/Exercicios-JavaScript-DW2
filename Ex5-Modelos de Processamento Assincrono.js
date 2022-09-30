/*Implemente as seguintes funções que simulam uma integração com um banco de dados:
○ Conectar ao banco
○ Buscar dados de uma tabela
○ Atualizar uma instância da tabela
● Utilize Promises para invocar as funções implementadas de
forma assíncrona, utilizando as formas vistas na aula de hoje:
then() e async/await*/

function connection(){


}

function queryDatabase(){
this.conn ('SELECT * FROM Cadastro');
}

function updateDatabase(){
this.conn ('UPDATE Cadastro SET NovoNome WHERE id = 1');
}