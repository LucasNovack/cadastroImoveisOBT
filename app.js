function app(){

    window.event.preventDefault() // previne att automatica

    let tipo = document.querySelector("select[name='type']").value // recebe valor do tipo 
    let area = document.getElementById("area").value // recebe valor da area
    let rent = document.querySelector("select[name='opcao']").value // recebe valor se esta alugado
    let disponibilidade = document.createElement("h3")

    switch(rent){
        case "Sim": rent = "Alugado"
        disponibilidade.style.backgroundColor = "red"
        disponibilidade.style.color = "white"
        break
        case "Não": rent = "Desocupado"
        disponibilidade.style.backgroundColor = "green"
        disponibilidade.style.color = "white"
    }

    if (area === ""){
        alert("Preencha tudo por favor")
    }

    else{

    let novaRes = new Residencia(tipo,area,rent) // cria nova residencia usando a classe e as variaveis do dom
    let localInsercao = document.getElementById("listaImov") // Adicionar o local na variavel
    let p = document.createElement("p") // cria um paragrafo no DOM
    let p1 = document.createElement("p")

    disponibilidade.innerText = rent
    
    let texto = (`<b>Área:</b> ${novaRes.area}m²<br> <b>Tipo da Residência:</b> ${novaRes.tipo}<br>`)
    p.innerHTML = texto

    let hr = document.createElement("hr")
    let botao = document.createElement("button")
    botao.innerText = "Remover Imóvel"
    botao.onclick = () =>{
        let removido = botao.parentNode
        removido.remove()
    }

    localInsercao.appendChild(p1) // poe o texto dentro do local de insercao
    p.appendChild(disponibilidade)
    p1.appendChild(p)
    p1.appendChild(botao)
    p1.appendChild(hr)

    document.getElementById("form1").reset() // Seleciona o form do DOM e reseta o mesmo, deixando pronto para o próximo uso
}
}


