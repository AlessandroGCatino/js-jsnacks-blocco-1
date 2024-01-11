const startButton = document.querySelector("h1")
let numeroUtente

startButton.addEventListener("click", function(){

    let sommaNum  = 0
    for(let i=0; i<10; i++)
    {
        numeroUtente = prompt(`Inserisci il numero ${i+1} di 10`, "1")
        numeroUtente = parseInt(numeroUtente)
        sommaNum = sommaNum + numeroUtente
    }
    document.querySelector("p").innerHTML = sommaNum
    
}
)
