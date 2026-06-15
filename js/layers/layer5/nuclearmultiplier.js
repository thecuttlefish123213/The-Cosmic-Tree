addLayer("nm", {
    name: "Nuclear Multiplier", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "NM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        variable: new Decimal(0),
        upgradesBought: new Decimal(0)
       
    }},
    color: "#46df04",
  requires: new Decimal(1000), // Can be a function that takes requirement increases into account
    resource: "Nuclear Multipliers", // Name of prestige currency
    baseResource: "Mega Multipliers", // Name of resource prestige is based on
    baseAmount() {return player.mm.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
     doReset(reset){
        let keep = []
      
      
         if (layers[reset].row > this.row) {layerDataReset("nm", keep)}
    },
   update() {
    
   },
    nodeStyle() {
       if(player.nm.unlocked == true || tmp.nm.canReset == true) return {"background-image": "linear-gradient( #118a01, #0f5905)",
        "animation": "radioactivePulse 1s linear infinite",
        "text-shadow": "0 0 20px rgb(38, 255, 0)",
        "box-shadow": "0 0 2px rgb(26, 255, 0), inset 0 0 0.1px rgb(0, 255, 13)",
        "border": "2px solid rgb(0, 255, 13)",
       }
    },
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
   
    row: 4, // Row the layer is in on the tree (0 is the first row)
    branches: ["mm"],
    hotkeys: [
        {key: "Shift + N", description: "Shift + N: Reset for Mega Multiplier", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
     layerShown(){return player.mm.unlocked
    },


        }
   
       )