const startButton = document.querySelector("h1")

const nomi = [
    "Carlo",
    "Mauro",
    "Franco",
    "Marco",
    "Giulia",
    "Sara",
    "Paola",
    "Valeria"
]

const cognomi = [
    "Rossi",
    "Bianchi",
    "Verdi",
    "Polaretto",
    "Totti"
]

startButton.addEventListener("click", function(){

    document.querySelector("p").innerHTML = "La lista degli invitati è: <br>"
    for (let i=0; i<nomi.length; i++)
    {
        for (let j=0; j<cognomi.length; j++)
        {
            document.querySelector("p").innerHTML += `${nomi[i]} ${cognomi[j]} <br>`
        }
    }
        
}
)