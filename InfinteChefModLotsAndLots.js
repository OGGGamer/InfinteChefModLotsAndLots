// Add basic ingredients
addIngredient("tomato", {
    color: "#ff6347", // tomato red
    type: "vegetable"
});

addIngredient("cheese", {
    color: "#ffd700", // gold
    type: "dairy"
});

addIngredient("chocolate", {
    color: "#7b3f00", // chocolate brown
    type: "sweet"
});

addIngredient("bread", {
    color: "#deb887", // bread brown
    type: "grain"
});

addIngredient("butter", {
    color: "#ffdab9", // butter yellow
    type: "dairy"
});

addIngredient("egg", {
    color: "#ffff66", // egg yellow
    type: "protein"
});

// Add detailed ingredients with custom properties
addIngredient("sliced_tomato", {
    color: "#ff6347", // tomato red
    innerColor: "#f8f9fa", // light gray
    type: "tomato",
    shape: "slice"
});

addIngredient("grilled_cheese", {
    color: "#ffd700", // gold
    innerColor: "#deb887", // bread brown
    type: "sandwich",
    shape: "sandwich_grilled"
});

addIngredient("chocolate_cake", {
    color: "#7b3f00", // chocolate brown
    innerColor: "#ffff66", // egg yellow
    type: "cake",
    shape: "cake"
});

// Add ingredients with reactions
addIngredient("cheese_burger", {
    color: "#ffd700", // gold
    innerColor: "#deb887", // bread brown
    type: "burger",
    shape: "burger"
});

// Change attributes of existing ingredients
editIngredient("tomato", {
    color: "#ff6347", // tomato red
    innerColor: "#f8f9fa", // light gray
    shape: "slice"
});

// Add recipes
addRecipe("bread+cheese", "grilled_cheese");
addRecipe("cake+butter?+chocolate", "chocolate_cake");
addRecipe("bread+cheese+meat", "cheese_burger");

// Add tools
addTool("knife", {
    func: function(placed) {
        placed.type = "sliced_" + placed.type;
    },
    shape: "knife"
});

addTool("spatula", {
    func: function(placed) {
        console.log("Using spatula on ingredient:", placed);
        placed.flip = !placed.flip; // Example action: flip ingredient
    },
    onSelect: function() { alert("Select an ingredient to flip with the spatula!"); },
    whileOn: function() { console.log("Spatula selected."); },
    onDeselect: function() { alert("Spatula deselected."); },
    onClick: function(x, y) { console.log("Clicked at:", x, y); },
    shape: "spatula",
    spin: true
});

// Add more ingredients, recipes, and tools as desired
