/*Acesse: https://www.deckofcardsapi.com/ e leia sua
documentação
● Utilize o recurso Fetch ou Axios para:
    ○ Gerar um baralho de 52 cartas
    ○ Selecionar 4 cartas
    ○ Apresentar as cartas selecionadas em uma página
HTML*/

requisitar = async () => {
    try {
        const respostaGET = await
            fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=4");

        if (respostaGET.status >= 200 && respostaGET.status < 300) {
            respostaJSON = await respostaGET.json();
            document.getElementById("carta1").src = respostaJSON.cards[0].image;
            document.getElementById("carta2").src = respostaJSON.cards[1].image;
            document.getElementById("carta3").src = respostaJSON.cards[2].image;
            document.getElementById("carta4").src = respostaJSON.cards[3].image;
        } else {
            throw new Error(respostaGET.status);
        }
    } catch (erroGET) {
        document.getElementById('erro').innerHTML = erroGET;
    };
}

requisitar();