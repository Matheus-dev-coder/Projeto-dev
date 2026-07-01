document.querySelector("button").addEventListener("click", geraCodigo);

let endereco = "https://api.groq.com/openai/v1/chat/completions";

const API_KEY = ""; // Insira sua chave de API aqui

async function geraCodigo() {
    let textarea = document.querySelector(".texto-pagina").value;

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: textarea
                },
                {
                    role: "system",
                    content: "Você é um desenvolvedor Front-End especialista..."
                }
            ]
        })
    });

    let dados = await resposta.json();
    let resultado = dados.choices[0].message.content;

    let espacoCodigo = document.querySelector(".bloco-codigo");
    let espacoSite = document.querySelector(".bloco-site");

    espacoCodigo.textContent = resultado;
    espacoSite.srcdoc = resultado;
}