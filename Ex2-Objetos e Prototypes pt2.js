/*Implemente um objeto que represente um produto com
propriedades de nome, descrição, preço, código de barras
● Defina getters e setters para cada atributo
● Implemente os seguintes métodos via prototype:
○ Calcula desconto: recebe a porcentagem para o desconto,
altera e retorna o preço do produto com o desconto aplicado
○ Aumenta preço: recebe a porcentagem para o aumento, altera
e retorna o preço do produto com o aumento aplicado
● Instancie três produtos distintos e manipule seus preços
● Faça a entrega via Moodle dos arquivos .js implementados*/

function Produto(nome, descricao, preco, codBarras) {

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            get: function () {
                return nome;
            },
            set: function (valor) {
                if (isNaN(valor)) {
                    nome = valor;
                } else {
                    console.log("Nome Inválido");
                }
            }
        },
        descricao: {
            enumerable: true,
            get: function () {
                return descricao;
            },
            set: function (valor) {
                if (isNaN(valor)) {
                    descricao = valor;
                } else {
                    console.log("Descrição Inválida");
                }
            }
        },
        preco: {
            enumerable: true,
            get: function () {
                return preco;
            },
            set: function (valor) {
                if (Number.isInteger(valor)) {
                    preco = valor;
                } else {
                    console.log("Preco Inválido");
                }
            }
        },
        codBarras: {
            enumerable: true,
            get: function () {
                return codBarras;
            },
            set: function (valor) {
                if (Number.isInteger(valor)) {
                    codBarras = valor;
                } else {
                    console.log("Codigo de barras Inválido");
                }
            }
        }
    });
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.codBarras = codBarras;
}

Produto.prototype.calcDesconto = function (preco, porcentagem) {
    console.log("Produto com desconto: " + (preco - (preco * porcentagem / 100)));
}

Produto.prototype.calcAumento = function (preco, porcentagem) {
    console.log("Produto com aumento: " + (preco + (preco * porcentagem / 100)));
}

const tenis = new Produto("Air Force 1", "Boot caro", 800, 1972);

tenis.calcDesconto(100, 5);

tenis.calcAumento(100, 20);