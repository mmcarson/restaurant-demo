populateFood = function() {
    // console.dir(menuFile);
    $.getJSON("menu-items.json", function(menuData) {
        // console.dir(menuData.menu[0].items[0]);
        console.dir(menuData);
        // document.getElementById("food-menu").innerText = menuData;
    });
}

// window.onload = populateFood("menu-items.json");