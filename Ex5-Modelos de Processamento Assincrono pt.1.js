/*Implemente as seguintes funções que simulam uma integração com um banco de dados:
○ Conectar ao banco
○ Buscar dados de uma tabela
○ Atualizar uma instância da tabela
● Utilize Promises para invocar as funções implementadas de
forma assíncrona, utilizando as formas vistas na aula de hoje:
then() e async/await*/

const connection = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Banco conectado com sucesso!"), 1000);
});

const query = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("SELECT * FROM Cadastro"), 2000);
});

const update = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("UPDATE Cadastro SET Nome Atualizado WHERE id = 1"), 3000);
});

const simulacaoBd = async () => {
    const conecta = await connection().then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
    const consulta = await query().then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
    const atualiza = await update().then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
}

simulacaoBd();