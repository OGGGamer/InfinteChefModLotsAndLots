addTool("chocolate_melter", {
    func: function(placed) { 
        placed.temp = 60; // set melting temperature
    },
    onSelect: function() { alert("Use the Chocolate Melter to melt chocolate!"); },
    whileOn: function() { console.log("Chocolate Melter is active."); },
    onDeselect: function() { alert("Chocolate Melter deactivated."); },
    shape: "square",
    spin: false
});
