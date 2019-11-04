const populateFood = async function() {
    // console.dir(menuFile);
    $.getJSON("menu-items.json", function(menuData) {
        // console.dir(menuData.menu[0].items[0]);
        console.dir(menuData);
        const foodMenuElement = document.getElementById("food-menu"); // step 1: get parent element from document
        console.dir(foodMenuElement);
        // go through each category
        menuData.menu.forEach(category => {
            categorySection = document.createElement("section"); // step 2: create new element
            categoryHeading = document.createElement("h3"); // step 2: create new element
            categoryHeading.innerText = category.name; // step 3: create content
            categorySection.appendChild(categoryHeading); // step 4: append child
            foodMenuElement.appendChild(categorySection); // step 4: append child 
            category.items.forEach(item => {
                itemName = document.createElement("h4"); // step 2: create element
                itemName.innerText = item.name; // step 3: create content
                categorySection.appendChild(itemName); // step 4: append child
                itemDesc = document.createElement("p");
                itemDesc.innerText = item.description;
                categorySection.appendChild(itemDesc);
                itemPrice = document.createElement("b");
                itemPrice.innerText = '$' + item.price;
                categorySection.appendChild(itemPrice);
            });
        });
    });
}

// window.onload = populateFood("menu-items.json");