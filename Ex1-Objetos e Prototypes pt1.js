/*Implemente um objeto que represente um círculo com três atributos de PI (3.14, 3.14159, 3.1415926536) e um de raio.

Implemente dois métodos: um para o cálculo da área e outro para o perímetro do círculo.

Implemente um método que imprime os diferentes valores de área e perímetro do círculo
para os diferentes valores de PI.

Considere o Object.deﬁneProperties() para:

Deﬁnir os getters e setters dos atributos;
Não permitir a exclusão dos atributos.*/

function Circulo(raio) {

    Object.defineProperties(this, {
        pi1: {
            value: 3.14,
            enumerable: true,
            configurable: false,
            // get: function () {
            // return pi1;
            // },
            // set: function (valor) {
            // if (Number.isNaN(valor)) {
            // console.log("Valor de PI incorreto");
            // } else {
            // pi1 = valor;
            // }
            // }
        },

        pi2: {
            value: 3.14159,
            enumerable: true,
            configurable: false,
            // get: function () {
            // return pi2;
            // },
            // set: function (valor) {
            // if (Number.isNaN(valor)) {
            // console.log("Valor de PI incorreto");
            // } else {
            // pi2 = valor;
            // }
            // }
        },

        pi3: {
            value: 3.1415926536,
            enumerable: true,
            configurable: false,
            // get: function () {
            // return pi3;
            // },
            // set: function (valor) {
            // if (Number.isNaN(valor)) {
            // console.log("Valor de PI incorreto");
            // } else {
            // pi3 = valor;
            // }
            // }
        },

        raio: {
            enumerable: true,
            configurable: false,
            get: function () {
                return raio;
            },
            set: function (valor) {
                if (Number.isNaN(valor)) {
                    console.log("Valor de Raio incorreto");
                } else {
                    raio = valor;
                }
            }
        }
    });

    this.calcArea = function (pi) {
        return area = pi * (this.raio * this.raio)
    },

        this.calcPerimetro = function (pi) {
            return perimetro = 2 * pi * this.raio
        },

        this.imprimeValores = function () {
            console.log(this.calcArea(this.pi1));
            console.log(this.calcArea(this.pi2));
            console.log(this.calcArea(this.pi3));
            console.log(this.calcPerimetro(this.pi1));
            console.log(this.calcPerimetro(this.pi2));
            console.log(this.calcPerimetro(this.pi3));
        }
}

const circulo = new Circulo(5);

circulo.imprimeValores();