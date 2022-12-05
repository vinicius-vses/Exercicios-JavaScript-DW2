async function requisitarGET() {
    try{
        const fetchDados = await fetch("http://localhost:8000/dados");

        document.getElementById("res").innerHTML = await fetchDados.text();
    } catch (erro) {
        return erro;
    }
};

requisitarGET();

async function requisitarPOST() {
  const nome = document.getElementById("nome").value;
  const profissao = document.getElementById("profissao").value;
  try {
    const fetchDados = await fetch("http://127.0.0.1:8000/dados", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        profissao: profissao,
      }),
    });
    document.getElementById("res").innerHTML = await fetchDados.text();
  } catch (err) {
    return err;
  }
}
