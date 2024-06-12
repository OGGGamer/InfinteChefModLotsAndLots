addTool("red_dyer", {
    func: function(placed) { placed.h = 0; },
    shape:"liquid"
})

// Add a tool with more properties
addTool("red_dyer", {
    func: function(placed) { placed.h = 0; },
    onSelect: function() { alert("Use on an ingredient to dye it red!"); },
    whileOn: function() { console.log("Dyer selected."); },
    onDeselect: function() { alert("Goodbye!"); },
    onClick: function(x,y) { console.log(x,y) },
    shape:"liquid",
    spin: true
})
