export class Circulo {

    constructor(raio) {
        this.raio = raio;
    }

    get raio() {
        return this.raio;
    }

    set raio(valor) {
        if (valor > 0)
            this.valor = valor;
    }

    imprimePerCirculo(raio) {
        return "Cálculo da perimetro do Círculo: " + (2 * Math.PI * raio);
    }

    imprimeAreaCirculo(raio) {
        return "Cálculo da área do Círculo: " + (Math.PI * Math.pow(raio, 2));
    }
}