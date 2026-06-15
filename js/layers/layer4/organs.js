addLayer("o", {
    name: "Organs", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        tissue: new Decimal(0)
        
       
    }},
    color: "#ff5100", // eventually a linear gradient
  requires: new Decimal(150), 
    resource: "Organs", // Name of prestige currency
    baseResource: "Blood Cells", // Name of resource prestige is based on
    baseAmount() {return player.ce.bloodcells}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
     doReset(reset){
        let keep = []
      
      
         if (layers[reset].row > this.row) {layerDataReset("o", keep)}
    },
   update() {
    
   },
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    
    row: 3, // Row the layer is in on the tree (0 is the first row)
    branches: ["ce","t"],
    
     layerShown(){return player.d.unlocked
    },

        }
   
       )