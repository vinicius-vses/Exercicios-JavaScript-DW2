/*
● Considere o exercício da aula passada, mas agora utilize classes
● Implemente três subclasses que herdam da superclasse produto,
sendo elas: smartwatch, smartphone e laptop
● Sobrescreva o método “calcula desconto” em cada subclasse,
verificando as seguintes regras:
○ Smartwatch: desconto máximo de 10%
○ Smartphone: desconto máximo de 15% não ultrapassando R$ 115,00
○ Laptop: desconto mínimo de R$ 97,00 e máximo de R$ 305,00
*/

class Produto {
    #nome;
    #descricao;
    #preco;
    #codBarras;

    constructor(nome, descricao, preco, codBarras) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.codBarras = codBarras;
    }

    get nome() {
        return this.#nome;
    }

    set nome(valor) {
        if (isNaN(valor)) {
            this.#nome = valor;
        }
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(valor) {
        if (isNaN(valor)) {
            this.#descricao = valor;
        }
    }

    get preco() {
        return this.#preco;
    }

    set preco(valor) {
        if (Number.isInteger(valor)) {
            this.#preco = valor;
        }
    }

    get codBarras() {
        return this.#codBarras;
    }
    set codBarras(valor) {
        if (Number.isInteger(valor)) {
            this.#codBarras = valor;
        }
    }

    calcDesconto(preco, porcentagem) {
        console.log("Produto com desconto: " + (preco - (preco * porcentagem / 100)));
    }
}

class Smartwatch extends Produto {
    #formato;
    constructor(nome, descricao, preco, codBarras, formato) {
        super(nome, descricao, preco, codBarras);
        this.#formato = formato;
    }

    get formato() {
        return this.#formato;
    }
    set formato(forma) {
        this.#formato = forma;
    }

    calcDesconto(preco, porcentagem) {
        console.log("Smartwatch com desconto: " + (preco - (preco * porcentagem / 100)));
    }
}

class Smartphone extends Produto {
    #dobravel;
    constructor(nome, descricao, preco, codBarras, dobravel) {
        super(nome, descricao, preco, codBarras);
        this.#dobravel = dobravel;
    }

    get dobravel() {
        return this.#dobravel;
    }
    set dobravel(dobrar) {
        this.#dobravel = dobrar;
    }

    calcDesconto(preco, porcentagem) {
        if (porcentagem <= 15 && preco <= 115) {
            console.log("Smartphone com desconto: " + (preco - (preco * porcentagem / 100)));
        }
    }
}

class Laptop extends Produto {
    #touch;
    constructor(nome, descricao, preco, codBarras, touch) {
        super(nome, descricao, preco, codBarras);
        this.#touch = touch;
    }

    get touch() {
        return this.#touch;
    }
    set touch(toque) {
        this.#touch = toque;
    }

    calcDesconto(preco, descReais) {
        if (descReais >= 97 && descReais <= 305) {
            console.log("Laptop com desconto: " + (preco - descReais));
        }
    }
}

//const tenis = new Produto("Air Force 1", "Boot caro", 800, 1972);

const smartwatch = new Smartwatch("AppleWatch", "Watch da Apple", 4999, 123, "Quadrado");

const smartphone = new Smartphone("Moto G", "Celular Motorola", 1800, 1234, "SIM");

const laptop = new Laptop("Aspire 5", "Notebook", 3500, 12345, "SIM");

//tenis.calcDesconto(100, 5);

smartwatch.calcDesconto(800, 10);

smartphone.calcDesconto(100, 15);

laptop.calcDesconto(2000, 100);