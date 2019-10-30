// regular named function
function makeCartRow(item, price) {
    let row = document.createElement("tr");
    // td is table data
    let itemData = document.createElement("td");
    itemData.innerText = item;
    row.appendChild(itemData);
    let priceData = document.createElement("td");
    priceData.innerText = price;
    row.appendChild(priceData);
    return row;
}

// anonymous function as a variable
let updateCart = function() {
    console.log("called updateCart");
    // identify the table
    let cartTable = document.getElementById("cart-content");
    console.dir(cartTable);
    // clear the table
    cartTable.innerHTML = "";
    // add the headers
    let headerRow = document.createElement("tr");
    let itemHeader = document.createElement("th");
    let amountHeader = document.createElement("th");
    itemHeader.innerText = "Item";
    amountHeader.innerText = "Amount";
    headerRow.appendChild(itemHeader);
    headerRow.appendChild(amountHeader);
    cartTable.appendChild(headerRow);
    // add the example items
    cartTable.appendChild(makeCartRow("soup", "$3"));
    cartTable.appendChild(makeCartRow("salad", "$3"));
    cartTable.appendChild(makeCartRow("sandwich", "$5"));
}

// this is always called when the page loads
window.onload = updateCart;

// local storage ONLY applies to another window so this will only matter if you have two windows open
window.addEventListener("storage", updateCart); // not used yet