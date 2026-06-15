addLayer("h", {
    name: "Hyper Multiplier", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "HM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        
		points: new Decimal(0),
        variable: new Decimal(0),
        autoPrestige: false
    }},
    color: "#34aa2a",
    requires: new Decimal(400), // Can be a function that takes requirement increases into account
    resource: "Hyper Multipliers", // Name of prestige currency
    baseResource: "Multipliers", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
     nodeStyle() {
        
       if(tmp.h.canReset || player.h.unlocked) {
            return {
        "background-image": "linear-gradient(90deg,rgb(53, 255, 56) 0%, rgb(23, 203, 26) 50%, rgb(20, 136, 5) 100%)",
         "background-size": "150px 600%",
        "background-position": "40% 50%",
         "border-radius": "0px",
            }}
        else return {
       "border-radius": "0px",
        }
    },
    
   doReset(reset){
    let keep = []
     keep.push("variable")
      if(hasMilestone('hm', 3) && hasMilestone('ct', 1)) { keep.push("milestones")}
      if (reset == "v") player.h.points = new Decimal(0)
         if (layers[reset].row > this.row) {layerDataReset("h", keep)}
   },
    
    exponent: new Decimal(1), // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    autoPrestige() {
     if(hasUpgrade('v', 12) && player.h.autoPrestige == true) return true
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    branches: ["m"],
    update() {
        if((player.m.points.gte(400) || player.h.points >= 1 || player.hm.points >= 1 || player.ce.points >= 1)) {
        player.h.variable = new Decimal(1)}
    },
    hotkeys: [
        {key: "h", description: "H: Reset for hyper multipliers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.unlocked
    },
 
milestones: {
    1: {
        requirementDescription: "1 Hyper Multiplier",
        effectDescription: "Hyper... trophy? Enjoy a 4x particle boost",
        done() { return player.h.points.gte(1) },
    },
     2: {
        requirementDescription: "2 Hyper Multipliers",
        effectDescription: "Quarks and Multipliers are boosted based on Hyper Multipliers" ,
       
       
        done() { return player.h.points.gte(2) },
    },
     3: {
        requirementDescription: "3 Hyper Multiplier",
        effectDescription: "Earn the ability to craft Hyper Quarks. Hyper Quarks can stack up quickly. Maximum of 5 allowed",
        done() { return player.h.points.gte(3) },
    },
    4: {
        requirementDescription: "4 Hyper Multiplier",
        effectDescription: "Autobuy row 1 multiplier upgrades",
        done() { return player.h.points.gte(4) },
        effect() {
            if (inChallenge('a', 12)) return null
           else if (hasMilestone('h', 4)) {
                buyUpgrade("m", 11)
            buyUpgrade("m", 12)
            buyUpgrade("m", 13)
            buyUpgrade("m", 14)
            buyUpgrade("m", 15)
            buyUpgrade("m", 16)
            buyUpgrade("m", 21)
        }
    },

},

6: {
        requirementDescription: "6 Hyper Multiplier",
        effectDescription: "Passively generate 1% of multiplier",
        done() { return player.h.points.gte(6) },
        unlocked() {if(hasUpgrade('v',13)) return true}
    },
7: {
        requirementDescription: "8 Hyper Multiplier",
        effectDescription: "Autobuy row 2 multiplier upgrades",
        done() { return player.h.points.gte(8) },
        unlocked() {if(hasUpgrade('v',13)) return true},
         effect() {
             if (inChallenge('a', 12)) return null
           
           else if (hasMilestone('h', 7)) {
                buyUpgrade("m", 21)
            buyUpgrade("m", 22)
            buyUpgrade("m", 23)
            buyUpgrade("m", 24)
            buyUpgrade("m", 25)
             buyUpgrade("m", 26)
            
        }
    },
} ,
8: {
        requirementDescription: "28 Hyper Multiplier",
        effectDescription: "Double Multiplier gain(hint: buy more vinyl multiplier",
        done() { return player.h.points.gte(28) },
        unlocked() {if(hasUpgrade('hm',22)) return true}
    },
9: {
        requirementDescription: "35 Hyper Multiplier",
        effectDescription: "Vinyl multiplier now boosts atom gain",
        done() { return player.h.points.gte(35) },
        unlocked() {if(hasUpgrade('hm',22)) return true},
        effectDescrition() {
            return "currently: " + format(player.v.points.plus(1).pow(0.5)) + "x"
        }
    },
10: {
        requirementDescription: "80 Hyper Multiplier",
        effectDescription: "Pretty high, 2x particle boost",
        done() { return player.h.points.gte(80) },
        unlocked() {if(hasUpgrade('hm',33)) return true},
        
    },
11: {
        requirementDescription: "95 Hyper Multiplier",
        effectDescription: "Hyper multiplier now boosts particles",
        done() { return player.h.points.gte(80) },
        unlocked() {if(hasUpgrade('hm',33)) return true},
        
    },
12: {
        requirementDescription: "15000 Hyper Multipliers",
        effectDescription: "Complete hyper multipliers FOR GOOD! and unlock an artifact for doing so",
        done() { return player.h.points.gte(15000) },
        unlocked() {if(hasUpgrade('hm',33)) return true},
        
    },
} }
)