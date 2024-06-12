// Add a basic ingredient
addIngredient("tomato", {
    color: "#ff6347", // tomato red
    type: "vegetable"
});

// Add a detailed ingredient with custom properties
addIngredient("sliced_tomato", {
    color: "#ff6347", // tomato red
    innerColor: "#f8f9fa", // light gray
    type: "tomato",
    shape: "slice"
});

// Add an ingredient with reactions
addIngredient("cheese", {
    type: "dairy",
    color: "#ffd700", // gold
    reactions: {
        bread: { set1: "sandwich" },
        meat: { set1: "burger" }
    }
});

// Add a simple recipe
addRecipe("bread+cheese", "cheese sandwich");

// Add a recipe with an optional ingredient
addRecipe("cake+butter?+chocolate", "chocolate cake");

// Add a tool to interact with ingredients
addTool("knife", {
    func: function(placed) {
        placed.type = "sliced_" + placed.type;
    },
    shape: "knife"
});

// Add a tool with more properties
addTool("spatula", {
    func: function(placed) {
        console.log("Using spatula on ingredient:", placed);
        // Example action: flip ingredient
        placed.flip = !placed.flip;
    },
    onSelect: function() { alert("Select an ingredient to flip with the spatula!"); },
    whileOn: function() { console.log("Spatula selected."); },
    onDeselect: function() { alert("Spatula deselected."); },
    onClick: function(x, y) { console.log("Clicked at:", x, y); },
    shape: "spatula",
    spin: true
});