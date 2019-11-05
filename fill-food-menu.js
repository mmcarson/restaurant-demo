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
            let categorySize = 0;
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
                if (item.image) {
                    imageID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); // generating random ID
                    itemImage = document.createElement("img");
                    itemImage.setAttribute("id", imageID);
                    itemImage.setAttribute("src", item.image); //setAttribute
                    categorySection.appendChild(itemImage);
                    categorySize += $('#' + imageID).height() / 200;
                }
                categorySize++;
                categorySection.setAttribute("style", "grid-row: span " + categorySize);
            });
        });
    });
}

// window.onload = populateFood("menu-items.json");