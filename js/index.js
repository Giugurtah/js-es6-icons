// Elementi connessi all'html
const cardElement = document.querySelector("#card-display .row");
const selectElement = document.querySelector(".header_form select");
const searchElement = document.getElementById("text_search")

//Funzione di stampa carte
const printCards = (array, element) => {
    // Preparo una string ausiliaria
    let auxString = "";
    array.forEach((item, index) => {
        //Per ogni oggetto nell'array controllo se è multiplo di 5 per aggiungere un offset
        const offsetProperty = index % 5 == 0 ? "offset-xl-1" : "";
        //e poi stampo il codice html della singola carta
        auxString += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ${offsetProperty} gy-3">
            <div class="card">
                <div class="card-body text-center">
                    <i class="${item.family} ${item.prefix}${item.name} color-${item.type}"></i>
                    <br>
                    <span>${item.name}</span>
                </div>
            </div>
        </div>
        `
    });
    element.innerHTML = auxString;
};
printCards(icons, cardElement);

//Funzione di allocazione dinamica del select
const printOptions = (array, element) => {
    //Preparo una stringa ausiliaria che contiene i valori inziiali, cioè quelle option che non dipendono dal contenuto dell'database
    const auxInitialValue = `
    <option selected value="all">All</option>
    `;
    //Preparo un array ausiliario che contiene i DIVERSI type presenti nell database
    const auxArray = [];
    array.forEach((item) => {
        if(!auxArray.includes(item.type)){
            auxArray.push(item.type)
        }
    });
    //Sull'array ausiliario ciclo in modo tale da ottenere una stringa con un option per ogni diverso type nel array ausiliario
    let auxString = auxArray.reduce((currentValue, item) => {
        return currentValue + `<option value="${item}">${item.charAt(0).toUpperCase() + item.slice(1)}</option>`
    }, auxInitialValue);
    element.innerHTML = auxString;
}
printOptions(icons, selectElement);

//Event listener che attiva il filtro di ricerca
selectElement.addEventListener("change", () => {
    //Se viene selezionato all si richiama la funzione di stampa su tutto il database
    if (selectElement.value === "all") {
        printCards(icons, cardElement); 
    } else {
        //Altrimenti si richiama la funzione di stampa solo sull'array ottenuto tramite filtraggio
        let auxArray = icons.filter((item) => {
            return selectElement.value === item.type
        })
        printCards(auxArray, cardElement);
    }
})


searchElement.addEventListener("keyup", () => {
    let auxArray = icons.filter((item) => {
        return item.name.includes(searchElement.value)
    })
    printCards(auxArray, cardElement);
})
