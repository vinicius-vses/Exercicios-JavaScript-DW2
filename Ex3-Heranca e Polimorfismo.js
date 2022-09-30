/*
Considere o exercício da aula passada (classe produto e suas
propriedades)
● Implemente três subclasses que herdam da superclasse produto,
sendo elas: smartwatch, smartphone e laptop
● Sobrescreva o método “calcula desconto” em cada subclasse,
verificando as seguintes regras:
○ Smartwatch: desconto máximo de 10%
○ Smartphone: desconto máximo de 15% não ultrapassando R$
115,00
○ Laptop: desconto mínimo de R$ 97,00 e máximo de R$ 305,00
*/

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

function Smartwatch(nome, descricao, preco, codBarras, formato) {
    Produto.call(this, nome, descricao, preco, codBarras);
    this.formato = formato;
};

function Smartphone(nome, descricao, preco, codBarras, dobravel) {
    Produto.call(this, nome, descricao, preco, codBarras);
    this.dobravel = dobravel;
};

function Laptop(nome, descricao, preco, codBarras, touch) {
    Produto.call(this, nome, descricao, preco, codBarras);
    this.touch = touch;
};

Produto.prototype.calcDesconto = function (preco, porcentagem) {
    console.log("Produto com desconto: " + (preco - (preco * porcentagem / 100)));
};

Produto.prototype.calcAumento = function (preco, porcentagem) {
    console.log("Produto com aumento: " + (preco + (preco * porcentagem / 100)));
};

Smartwatch.prototype = Object.create(Produto.prototype);
Smartwatch.prototype.constructor = Smartwatch;

Smartphone.prototype = Object.create(Produto.prototype);
Smartphone.prototype.constructor = Smartphone;

Laptop.prototype = Object.create(Produto.prototype);
Laptop.prototype.constructor = Laptop;

Smartwatch.prototype.calcDesconto = function (preco, porcentagem) {
    if (porcentagem <= 10) {
        console.log("Smartwatch com desconto: " + (preco - (preco * porcentagem / 100)));
    }
};

Smartphone.prototype.calcDesconto = function (preco, porcentagem) {
    if (porcentagem <= 15 && preco <= 115) {
        console.log("Smartphone com desconto: " + (preco - (preco * porcentagem / 100)));
    }
};

Laptop.prototype.calcDesconto = function (preco, descReais) {
    if (descReais >= 97 && descReais <= 305) {
        console.log("Laptop com desconto: " + (preco - descReais));
    }
};

//const tenis = new Produto("Air Force 1", "Boot caro", 800, 1972);

const smartwatch = new Smartwatch("AppleWatch", "Watch da Apple", 4999, 123, "Quadrado");

const smartphone = new Smartphone("Moto G", "Celular Motorola", 1800, 1234, "SIM");

const laptop = new Laptop("Aspire 5", "Notebook", 3500, 12345, "SIM");

//tenis.calcDesconto(100, 5);

//tenis.calcAumento(100, 20);

smartwatch.calcDesconto(800, 10);

smartphone.calcDesconto(100, 15);

laptop.calcDesconto(2000, 100);