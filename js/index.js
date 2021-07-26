const cardElement = document.querySelector("#card-display .row");

const printCards = (array, element) => {
    let auxString = "";
    array.forEach((item, index) => {
        // const offsetProperty = index % 5 == 0 ? "offset-md-1" : ""; //*Metto direttamente una proprietà w-20 per ottenere 5 colonne, invece di usare offset
        auxString += `
        <div class="w-20 gy-3">
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