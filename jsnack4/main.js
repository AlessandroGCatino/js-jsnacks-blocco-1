const startButton = document.querySelector("h1")

startButton.addEventListener("click", function(){

        const arrayNumeri = []
        let sommaNum = 0
        numeroUtente = prompt("Inserisci fino a quale numero dovrò effettuare la somma dei dispari", "15")
        numeroUtente = parseInt(numeroUtente)

        for (let i=1; i<=numeroUtente; i++){
            arrayNumeri.push(i)
        }

        console.log(arrayNumeri)
        
        for (let i=0; i<arrayNumeri.length; i++){
            if(i%2 == 0){
                sommaNum = sommaNum+arrayNumeri[i]
                console.log(sommaNum)
            }
        }

        document.querySelector("p").innerHTML = sommaNum
}
)