populateFood = function() {
    // console.dir(menuFile);
    $.getJSON("menu-items.json", function(menuData) {
        console.dir(menuData);
    });
}

// window.onload = populateFood("menu-items.json");