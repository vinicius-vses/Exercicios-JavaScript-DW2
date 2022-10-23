export class Retangulo {

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    get base() {
        return this.base;
    }

    set base(valor) {
        if (valor > 0)
            this.valor = valor;
    }

    get altura() {
        return this.altura;
    }

    set altura(valor) {
        if (valor > 0)
            this.valor = valor;
    }

    imprimePerRetangulo(base, altura) {
        return "Cálculo do perímetro do Retângulo: " + (2 * (base + altura));
    }

    imprimeAreaRetangulo(base, altura) {
        return "Cálculo do área do Retângulo: " + (base * altura);
    }
}