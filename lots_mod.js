addIngredient("mercury",{
    type:"liquid",
    color:"#c0c0c0",
    reactions: {
        meat: { set1:"broth" },
        vegetable: { set1:"broth", tempMin:60 }
    }
});
addIngredient("dry_ice", {
    color: "#b3e0ff", // light blue
    type: "solid",
    shape: "cube"
});
addIngredient("lava", {
    color: "#ff4500", // orange-red
    type: "liquid",
    reactions: {
        solid: { 
            set1: "obsidian" // Forms obsidian when cooled
        },
        heat: { 
            set1: "steam", // Turns into steam when heated
            tempMin: 700 // Boiling point of lava in Celsius
        }
    }
});
addIngredient("ice", {
    color: "#b3e0ff", // light blue
    type: "solid",
    reactions: {
        heat: {
            set1: "water", // Melts into water when heated
            tempMax: 0 // Melting point of ice in Celsius
        }
    }
});
addIngredient("earth", {
    color: "#8b5a2b", // brown
    type: "solid"
});
addIngredient("sun", {
    color: "#ffd700", // gold
    type: "energy"
});
addIngredient("prime", {
    color: "#6b8e23", // olive drab
    type: "element"
});
// Define interactions for prime
editIngredient("prime", {
    reactions: {
        heat: {
            set1: "fire", // Produces fire when heated
            tempMin: 300 // Heating threshold in Celsius
        },
        water: {
            set1: "steam", // Generates steam when exposed to water
            tempMax: 100 // Maximum temperature for steam generation
        }
    }
});
// Recipes involving prime
addRecipe("prime+heat_source", "fire");
addRecipe("prime+water", "steam");

addTool("magnet", {
    func: function(placed) {
        // Implement functionality to interact with magnetized plate
        // Example: move magnetized plate to a specific location
        placed.x = canvas.width / 2;
        placed.y = canvas.height / 2;
    },
    onSelect: function() { alert("Use the magnet to grab the magnetized plate!"); },
    whileOn: function() { console.log("Magnet selected and active."); },
    onDeselect: function() { alert("Magnet deselected."); },
    shape: "tool_magnet",
    spin: false
});

// Example elements from the periodic table
addIngredient("hydrogen", {
    color: "#ffffff", // white
    type: "gas",
    reactions: {
        fire: { set1: "explosion" }
    }
});

addIngredient("carbon", {
    color: "#000000", // black
    type: "solid"
});

addIngredient("oxygen", {
    color: "#ff0000", // red
    type: "gas"
});

// Example reactions
addRecipe("hydrogen+oxygen", "water");
addRecipe("carbon+oxygen", "carbon_dioxide");

editIngredient("oxygen", {
    reactions: {
        carbon: { set1: "carbon_dioxide" }
    }
});

// Tool example for interaction with elements
addTool("fire", {
    func: function(placed) {
        // Example: ignite nearby elements
        placed.h = 60; // set color to orange
        placed.s = 100;
        placed.l = 50;
    },
    shape: "tool_fire"
});

// Example interaction with tools
addRecipe("fire+hydrogen", "explosion");

// Unconventional liquid ingredients
addIngredient("unicorn_tears", {
    color: "#ffffff", // white
    type: "liquid",
    reactions: {
        sugar: { set1: "sweet_tears" }
    }
});

addIngredient("dragon_blood", {
    color: "#ff0000", // red
    type: "liquid",
    reactions: {
        fire: { set1: "explosion" }
    }
});

addIngredient("mermaid_splash", {
    color: "#00ffff", // cyan
    type: "liquid",
    reactions: {
        fish: { set1: "enchanted_water" }
    }
});

// Recipes involving unconventional liquids
addRecipe("unicorn_tears+sugar", "sweet_tears_cookie");

addRecipe("dragon_blood+fire", "explosion_potion");
// Additional whimsical ingredients
addIngredient("trollface", {
    color: "#ffcc00", // yellow
    type: "troll"
});

addIngredient("big_willy_sausage", {
    color: "#ff0000", // red
    type: "sausage"
});

addIngredient("rainbow_tears", {
    color: "#ff00ff", // magenta
    type: "tears"
});

addIngredient("unicorn_mermaid_blood", {
    color: "#00ffff", // cyan
    type: "blood"
});

addIngredient("dragon_poop", {
    color: "#996633", // brown
    type: "poop"
});

addIngredient("pee_wee_wee", {
    color: "#ffff00", // yellow
    type: "wee"
});

addIngredient("bush_hail", {
    color: "#00ff00", // green
    type: "hail"
});

// Recipes involving whimsical ingredients
addRecipe("trollface+cake", "trollcake");

addRecipe("big_willy_sausage+eggs", "sausage_omelette");

// Edit existing ingredients or tools
editIngredient("water", {
    reactions: {
        unicorn_mermaid_blood: { set1: "enchanted_water" }
    }
});
// Add a whimsical ingredient with the full name
addIngredient("big_willy_sausage_rainbow_tears_unicorn_mermaid_blood_dragon_poop_pee_wee_wee_bush_hail", {
    color: "#ff1493", // deep pink
    type: "whimsical"
});

// Recipe involving the full name ingredient
addRecipe("big_willy_sausage_rainbow_tears_unicorn_mermaid_blood_dragon_poop_pee_wee_wee_bush_hail+cake", "magical_delight");

// Edit existing tools or ingredients if needed
editIngredient("water", {
    reactions: {
        big_willy_sausage_rainbow_tears_unicorn_mermaid_blood_dragon_poop_pee_wee_wee_bush_hail: { set1: "enchanted_water" }
    }
});
// Add snow ingredient
addIngredient("snow", {
    color: "#ffffff", // white
    type: "solid"
});

// Add rain ingredient
addIngredient("rain", {
    color: "#87ceeb", // sky blue
    type: "liquid"
});

// Add interactions for snow
editIngredient("snow", {
    reactions: {
        heat: { set1: "water" }, // snow melts to water with heat
        fire: { set1: "steam" } // snow turns to steam with fire
    }
});

// Add interactions for rain
editIngredient("rain", {
    reactions: {
        cold: { set1: "ice" }, // rain turns to ice when cold
        plant: { set1: "growth" } // rain promotes plant growth
    }
});

// Add recipes involving snow and rain
addRecipe("snow+rain", "sleet"); // snow and rain make sleet
addRecipe("snow+cake", "frozen_cake"); // snow and cake make frozen cake
addRecipe("rain+earth", "mud"); // rain and earth make mud

// Add tools to interact with snow and rain
addTool("snow_scoop", {
    func: function(placed) {
        placed.type = "snow";
    },
    shape: "solid"
});

addTool("rain_collector", {
    func: function(placed) {
        placed.type = "rain";
    },
    shape: "liquid"
});
// Add plant ingredient
addIngredient("plant", {
    color: "#228B22", // forest green
    type: "vegetable"
});

// Add sleet ingredient
addIngredient("sleet", {
    color: "#d3d3d3", // light gray
    type: "solid"
});

// Add frozen cake ingredient
addIngredient("frozen_cake", {
    color: "#ffefd5", // papaya whip
    innerColor: "#fff8dc", // corn silk
    type: "dessert",
    shape: "cake_shape" // custom shape
});

// Add mud ingredient
addIngredient("mud", {
    color: "#8b4513", // saddle brown
    type: "solid"
});

