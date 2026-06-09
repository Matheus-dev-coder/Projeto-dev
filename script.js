document.querySelector("button").addEventListener("click", geraCodigo);

let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function geraCodigo(){
    let textarea = document.querySelector(".texto-pagina").value
    let resosta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            

        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [ 
                {
                    "role": "user",
                    "content": textarea
                },
                {
                    "role": "system",
                    "content": "Você é um desenvolvedor Front-End especialista em HTML5 e CSS3. Sua tarefa é receber um tema de negócio e criar uma página web completa, moderna e responsiva. Regras: - Responda SOMENTE com código.- Utilize apenas HTML e CSS (não use JavaScript, frameworks ou bibliotecas externas).- A página deve estar totalmente em Português do Brasil.- Crie um design profissional e moderno.- Utilize boas práticas de HTML semântico.- Inclua:- Cabeçalho (header)- Seção principal (hero)- Sobre a empresa- Serviços ou produtos  - Depoimentos de clientes- Chamada para ação (CTA)- Rodapé (footer)- O CSS deve estar dentro da tag <style>.- O HTML deve estar completo, incluindo <!DOCTYPE html>, <html>, <head> e <body>.- Use cores, tipografia e elementos visuais adequados ao tema informado.- A página deve ser responsiva para celulares e computadores.- Não adicione explicações, comentários ou textos fora do código.- Retorne apenas um único bloco de código HTML."

                }
            ],
        })
    })
    let dados = await resosta.json()
    let resultado = dados.choices[0].message.content

    let espacoCodigo = document.querySelector(".bloco-codigo")
    let espacoSite = document.querySelector(".bloco-site")

    espacoCodigo.textContent = resultado
    espacoSite.srcdoc = resultado
}
