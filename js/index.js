const cardElement = document.querySelector("#card-display .row");
const selectElement = document.querySelector(".header_form select");

const printCards = (array, element) => {
    let auxString = "";
    array.forEach((item, index) => {
        const offsetProperty = index % 5 == 0 ? "offset-md-1" : "";
        auxString += `
        <div class="col-2 ${offsetProperty} gy-3">
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

selectElement.addEventListener("change", () => {
    if (selectElement.value === "all") {
        printCards(icons, cardElement); 
    } else {
        let auxArray = icons.filter((item) => {
            return selectElement.value === item.type
        })
        printCards(auxArray, cardElement);
    }
})