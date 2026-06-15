addLayer("ac", {
    name: "Alchemy Lab", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "AC", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked() {return (hasAchievement('ach', 31))},
		points: new Decimal(1),
        helium: new Decimal(0),
        variable: new Decimal(0),
        iron: new Decimal(0),
        lead: new Decimal(0),
        gold: new Decimal(0),
        carbon: new Decimal(0),
        antimony: new Decimal(0),
        bparticle: new Decimal(0),
        aparticle: new Decimal(0),
        gammaray: new Decimal(0),
    }},
    color: "#a23c01",
    requires: new Decimal(400), // Can be a function that takes requirement increases into account
    resource: "Alchemy Lab", // Name of prestige currency
    baseResource: "Multipliers", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    
   
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
   update() {
     if(hasAchievement('ach', 31))
     {player.ac.variable = new Decimal(1)}
   },
    hotkeys: [],
    layerShown(){{return (hasAchievement('ach', 31))
    }
    }, 
    tabFormat: {
    "Displays and explanation": {
        content: [
            "main-display",
            "resource-display"
        ]
            
        
    },
    "Elements": {
        content: [
             ["display-image", "resources/periodic.png", {"position": "absolute", "width": "800px", "height": "800px", "left": "80px"}],
          
            ]
            
            
        
        
        
    },}
} )