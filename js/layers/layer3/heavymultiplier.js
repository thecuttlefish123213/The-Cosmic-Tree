addLayer("hm", {
    name: "Heavy Multiplier", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "HVM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        variable: new Decimal(0),
        
        atomicm: new Decimal(0),
       
    }},
    color: "#252525",
    requires: new Decimal(21), // Can be a function that takes requirement increases into account
    resource: "Heavy Multipliers", // Name of prestige currency
    baseResource: "Hyper Multipliers", // Name of resource prestige is based on
    baseAmount() {return player.h.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
     doReset(reset){
        let keep = []
        if(hasUpgrade('mm', 12) || hasMilestone('ct', 3)) {
            keep.push("upgrades", "milestones")
        }
        keep.push("variable")
         if (layers[reset].row > this.row) {layerDataReset("hm", keep)}
    },
   update() {
    if((player.m.points.gte(1e9) || player.hm.points >= 1))
    {player.hm.variable = new Decimal(1)}
    if(hasUpgrade('mm', 11)) {
        player.hm.points = player.hm.points.plus(0.01)
    }
   },
   
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
       if(player.chm.heavyTrox.gte(1)) mult = mult.times(player.chm.hTroxMultiplierFunction())
        if(hasUpgrade('mm', 11)) mult = mult.times(3)
        if(hasUpgrade('mm', 21)) mult = mult.times(2)
        return mult
    },
    passiveGeneration() {
        
      if(hasUpgrade('mm', 11)) return 1
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    doReset(reset){
        let keep = []
        
        keep.push("atomicm")
        keep.push("variable")
         if (layers[reset].row > this.row) {layerDataReset("hm", keep)}
    },
    nodeStyle: {
        "border-radius": "0px",
        "width": "125px",
        "height": "125px",
        "background-image": "linear-gradient( #3b3b3b, #1c1c1c)", 
        "border-color": "rgb(34, 34, 34)",
         "font-size": "50px"
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    branches: ["h","v"],
    hotkeys: [
        {key: "shift + h", description: "Shift + H: Reset for Heavy Multipliers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.v.unlocked
    },
  


   
    upgrades: {
    11: {
        title: "10x boost to Multipliers",
        description: "Red Pill",
        cost() {if(hasUpgrade('hm', 12)) return new Decimal(20)
            else return new Decimal(1)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px"
        },
        branches: [21, 22]
    },
    
    12: {
        title: "10x boost to Quarks",
        description: "Violet Pill",
        cost() {if(hasUpgrade('hm', 11)) return new Decimal(20)
            else return new Decimal(1)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
        branches: [23, 24]
    },
     21: {
        title: "Unlock more multiplier upgrades",
        description: "Red dice",
        cost() {
            if(hasUpgrade('hm', 22)) return new Decimal(40)
                else return new Decimal(3)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
         unlocked() {return (hasUpgrade('hm', 11))},
          branches: [31]
    },
    
     22: {
        title: "Unlock more hyper multiplier milestones",
        description: "Red state",
        cost() {
            if(hasUpgrade('hm', 21)) return new Decimal(40)
                else return new Decimal(3)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
         unlocked() {return (hasUpgrade('hm', 11))},
          branches: [32]
    },
   
     23: {
        title: "Unlock more quark upgrades",
        description: "Violet dice",
        cost() {
            if(hasUpgrade('hm', 24)) return new Decimal(40)
                else return new Decimal(3)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
        unlocked() {return (hasUpgrade('hm', 12))},
          branches: [35]
        
    },
    
    24: {
        title: "Unlock Atomic Multipliers<br>(craftable). They boost Atom gain by 1.1x and Vinyl per one bought. ",
        description: "Violet state",
        cost() {
            if(hasUpgrade('hm', 23)) return new Decimal(40)
                else return new Decimal(3)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
        unlocked() {return (hasUpgrade('hm', 12))},
        effect() {
            player.hm.atomicm = new Decimal(1)
        },
         branches: [36]
        
    },
    31: {
        title: "Keep Multiplier upgrades on reset",
        description: "Red diaphram",
        cost() {
            if(hasUpgrade('hm', 32)) return new Decimal(100)
                else return new Decimal(10)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
         unlocked() {return (hasUpgrade('hm', 21))},
         effect() {
            return player.hm.auto1 = new Decimal(1)
         },
         branches: [33]
    },
    
     32: {
        title: "Unlock more craftables",
        description: "Red hearth",
        cost() {
            if(hasUpgrade('hm', 31)) return new Decimal(100)
                else return new Decimal(10)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
         unlocked() {return (hasUpgrade('hm', 21))},
          branches: [34]
    },
   
     33: {
        title: "Unlock more hyper multiplier milestones",
        description: "Heavy physics",
        cost() {
            if(hasUpgrade('hm', 34)) return new Decimal(200)
                else return new Decimal(15)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
        unlocked() {return (hasUpgrade('hm', 31))},
         
        
    },
    
    34: {
        title: "Top Quarks boost multiplier gain. ",
        description: "Heavy Solution",
        cost() {
            if(hasUpgrade('hm', 33)) return new Decimal(200)
                else return new Decimal(15)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
        effect() {
            return player.q.tq.plus(1).pow(0.6)
        },
        effectDisplay() {
            return format(upgradeEffect('hm', 34)) + "x"
        },
        unlocked() {return (hasUpgrade('hm', 32))},
        
        
    },
     35: {
        title: "Keep quark upgrades on reset",
        description: "Violet diaphram",
        cost() {
            if(hasUpgrade('hm', 36)) return new Decimal(100)
                else return new Decimal(10)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
         effect() {
            return player.hm.auto2 = new Decimal(1)
         },
         unlocked() {return (hasUpgrade('hm', 23))},
         branches: [37]
    },
    
     36: {
        title: "Unlock more atom challenges",
        description: "Violet thunder",
        cost() {
            if(hasUpgrade('hm', 35)) return new Decimal(100)
                else return new Decimal(10)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
         unlocked() {return (hasUpgrade('hm', 24))},
           branches: [38]
    },
   
     37: {
        title: "Unlock row 2 cosmic dust upgrades",
        description: "Cellular biology",
        cost() {
            if(hasUpgrade('hm', 38)) return new Decimal(200)
                else return new Decimal(15)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
        unlocked() {return (hasUpgrade('hm', 35))}
        
    },
    
    38: {
        title: "Unlock the ability to buy <i>S. Solfataricus</i><br>(prokaryotes)",
        description: "Cellular storm",
        cost() {
            if(hasUpgrade('hm', 37)) return new Decimal(200)
                else return new Decimal(15)
        },
        style: {
            "border-radius": "0px",
            "width": "150px",
            "height": "150px",
            "opacity": "1"
        },
        unlocked() {return (hasUpgrade('hm', 36))}
        
    },


},
     
    milestones: {
    1: {
        requirementDescription: "1 Heavy Multiplier",
        effectDescription: "It's quite heavy in here. 10x particle boost",
        done() { return player.hm.points.gte(1) }
    },
    2: {
        requirementDescription: "20 Heavy Multiplier",
        effectDescription: "Keep Vinyl Multiplier upgrades(and buyable)",
        done() { return player.hm.points.gte(20) },
        effect() {
            return player.hm.auto3 = new Decimal(1)
        },
    },
      3: {
        requirementDescription: "50 Heavy Multiplier",
        effectDescription: "Keep Hyper Multiplier Milestones on reset",
        done() { return player.hm.points.gte(50) },
           effect() {
            return player.hm.auto4 = new Decimal(1)
        },
    }
    
},
 
tabFormat: {
    "Prestige and Upgrades": {
        content: [
            ["main-display", function() {return "main-display"},
                {"font-family": "Times New Roman"}
            ],
           "blank",
           ["prestige-button", function() {return "prestige-button"},
              {"border-radius": "0px"}
           ],
            "blank",
            "blank",
          
            ["display-text", function() {return 'You have ' + format(player.h.points) + ' hyper multipliers'}],
            "blank",
            "milestones",
         ["upgrade-tree",[
            [11,12],
            [21,22,23,24],
            [31,32,35,36],
            [33,34,37,38]
         ]]
           ],
        
    },} } )

    