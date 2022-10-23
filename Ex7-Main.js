/*Considere a estrutura de módulos vista na aula
● Defina três classes: círculo, retângulo e triângulo com
suas respectivas propriedades e métodos para o
cálculo de suas áreas e perímetros
● Invoque os métodos dos três objetos e apresente
seus resultados no HTML do site.*/

import { Circulo } from "./Ex7-modulos/Circulo.js";
import { Retangulo } from "./Ex7-modulos/Retangulo.js";
import { Triangulo } from "./Ex7-modulos/Triangulo.js";

const pc = new Circulo();

document.getElementById("pCirc").innerHTML = pc.imprimePerCirculo(2);

const ac = new Circulo();

document.getElementById("aCirc").innerHTML = ac.imprimeAreaCirculo(2);

const pr = new Retangulo();

document.getElementById("pRet").innerHTML = pr.imprimePerRetangulo(2,2);

const ar = new Retangulo();

document.getElementById("aRet").innerHTML = ar.imprimeAreaRetangulo(2,3);

const pt = new Triangulo();

document.getElementById("pTri").innerHTML = pt.imprimePerTriangulo(5,5,5);

const at = new Triangulo();

document.getElementById("aTri").innerHTML = at.imprimeAreaTriangulo(2,2);