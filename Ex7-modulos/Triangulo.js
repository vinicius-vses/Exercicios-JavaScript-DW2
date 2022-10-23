export class Triangulo {

    constructor(base, altura, ladoA, ladoB, ladoC) {
        this.base = base;
        this.altura = altura;
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    get base() {
        return this.base;
    }

    set base(valor) {
        if (valor > 0)
            this.base = valor;
    }

    get altura() {
        return this.altura;
    }

    set altura(valor) {
        if (valor > 0)
            this.altura = valor;
    }

    get ladoA() {
        return this.ladoA;
    }

    set ladoA(valor) {
        if (valor > 0)
            this.ladoA = valor;
    }

    get ladoB() {
        return this.ladoB;
    }

    set ladoB(valor) {
        if (valor > 0)
            this.ladoB = valor;
    }

    get ladoC() {
        return this.ladoC;
    }

    set ladoC(valor) {
        if (valor > 0)
            this.ladoC = valor;
    }

    imprimePerTriangulo(ladoA, ladoB, ladoC) {
        return "Cálculo do perímetro do Triângulo: " + (ladoA + ladoB + ladoC);
    }

    imprimeAreaTriangulo(base, altura) {
        return "Cálculo do área do Triângulo: " + ((base * altura) / 2);
    }
}