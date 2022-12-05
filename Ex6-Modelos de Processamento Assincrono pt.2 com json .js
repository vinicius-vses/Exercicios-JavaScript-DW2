/*Acesse: https://www.deckofcardsapi.com/ e leia sua
documentação
● Utilize o recurso Fetch ou Axios para:
    ○ Gerar um baralho de 52 cartas
    ○ Selecionar 4 cartas
    ○ Apresentar as cartas selecionadas em uma página
HTML*/

async function requisitar() {
    try {
        const card1 = await
          fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
          if (card1.status >= 200 && card1.status < 300) {
            card1JSON = await card1.json();
            carta1(card1JSON.deck_id, card1JSON.remaining);
          } else {
            throw new Error(card1.status + " :(");
          }
        
        } catch (erro) {
            document.getElementById("card1").innerHTML
            = erro;
        }

    try {
        const card2 = await
            fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            if (card2.status >= 200 && card2.status < 300) {
            card2JSON = await card2.json();
            carta2(card2JSON.deck_id, card2JSON.remaining);
            } else {
            throw new Error(resposta2GET.status + " :(");
            }
            
        } catch (erro) {
            document.getElementById("card2").innerHTML
            = erro;
        }
        
        try {
            const card3 = await
                fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
                if (card3.status >= 200 && card3.status < 300) {
                card3JSON = await card3.json();
                carta3(card3JSON.deck_id, card3JSON.remaining);
                } else {
                throw new Error(card3.status + " :(");
                }
                
            } catch (erro) {
                document.getElementById("card3").innerHTML
                = erro;
            } 
            
        try {
            const card4 = await
                fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
                if (card4.status >= 200 && card4.status < 300) {
                card4JSON = await card4.json();
                carta4(card4JSON.deck_id, card4JSON.remaining);
                } else {
                throw new Error(card4.status + " :(");
                }
                    
            } catch (erro) {
                document.getElementById("card4").innerHTML
                = erro;
            } 
};

async function carta1(deckId, qtdCartas){
    try {
        const card1 = await
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                deckId,
                qtdCartas
            })
        });
        if (card1.status >= 200 && card1.status < 300) {
             document.getElementById("card1").innerHTML
             = await card1.text();
        } else {
            throw new Error(card1.status + " :(");
        }
    } catch (erro) {
        document.getElementById("card1").innerHTML
        = erro;
    }
};

async function carta2(deckId, qtdCartas){
    try {
        const card2 = await
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                deckId,
                qtdCartas
            })
        });
        if (card2.status >= 200 && card2.status < 300) {
             document.getElementById("card2").innerHTML
             = await card2.text();
        } else {
            throw new Error(card2.status + " :(");
        }
    } catch (erro) {
        document.getElementById("card2").innerHTML
        = erro;
    }
};

async function carta3(deckId, qtdCartas){
    try {
        const card3 = await
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                deckId,
                qtdCartas
            })
        });
        if (card3.status >= 200 && card3.status < 300) {
             document.getElementById("card3").innerHTML
             = await card3.text();
        } else {
            throw new Error(card3.status + " :(");
        }
    } catch (erro) {
        document.getElementById("card3").innerHTML
        = erro;
    }
};

async function carta4(deckId, qtdCartas){
    try {
        const card4 = await
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                deckId,
                qtdCartas
            })
        });
        if (card4.status >= 200 && card4.status < 300) {
             document.getElementById("card4").innerHTML
             = await card4.text();
        } else {
            throw new Error(card4.status + " :(");
        }
    } catch (erro) {
        document.getElementById("card4").innerHTML
        = erro;
    }
};