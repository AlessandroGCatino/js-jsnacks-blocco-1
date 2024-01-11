const startButton = document.querySelector("h1")
let numeroUtente

startButton.addEventListener("click", function(){

    {
        let cubedNum
        numeroUtente = prompt("Inserisci fino a quale numero vuoi sapere il cubo", "3")
        numeroUtente = parseInt(numeroUtente)
        document.querySelector("p").innerHTML = ``

        for (let i=1; i<=numeroUtente; i++){
            cubedNum= i*i*i
            document.querySelector("p").innerHTML += `Il cubo del numero ${i} è: ${cubedNum} <br>`
        }
    }
}
)