let updateCart = function() {
    console.log("called updateCart");
    // identify the table
    let cartTable = document.getElementById("cart-content");
    console.dir(cartTable);
    // clear the table

}

// this is always called when the page loads
window.onload = updateCart;

// local storage ONLY applies to another window so this will only matter if you have two windows open
window.addEventListener("storage", updateCart);