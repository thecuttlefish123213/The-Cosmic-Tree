addLayer("ct", {
    name: "Crafting Table", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "CT", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked() {return (hasUpgrade("m", 16))},
		points: new Decimal(1),
        hq: new Decimal(0), // Hyper Quarks
        sdust: new Decimal(0), // Stardust
        amult: new Decimal(0), // Atomic multiplier
        variable: new Decimal(0),
        stars: new Decimal(0),
        nzet: new Decimal(0),
        index: 0,
        hatom: new Decimal(0),
        agenta: new Decimal(0),
        keepLevels: new Decimal(0),
        grandeu: new Decimal(0),
    }},
    color: "#291103",
    requires: new Decimal(400), // Can be a function that takes requirement increases into account
    resource: "Crafting Table", // Name of prestige currency
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
    if (hasUpgrade("m", 16)) {
        player.ct.variable = new Decimal(1)
    }
   },
    hotkeys: [],
    layerShown(){return (hasUpgrade("m", 16)) || player.ct.variable == 1

    },
    update(diff) {
        
        if(getBuyableAmount('t', 34).gte(1)) player.ct.sdust = player.ct.sdust.plus(new Decimal(0.1).mul(getBuyableAmount('t', 34)).mul(diff))
    
    },
   tabFormat: {
    "Crafting": {
        content: [
            "main-display",
          
       
           "blank",
            ["infobox", "lore"],
           
           
            ["row",[["buyable", "11" ],["buyable", "12"],]],
            ["row",[["buyable", "13" ],["buyable", "14"],]],
            ["row",[["buyable", "15" ], ["buyable", "16"]]],
            ["row",[["buyable", "17" ], ["buyable", "18"]]],
            ["row",[["buyable", "19" ], ["buyable", "20"]]],



          
   ],
    
    },
    "Inventory": {
        content: [
            "blank",
          
            ["display-text", function() {if(hasMilestone('h', 3)) return 'You have ' + format(player.ct.hq) + ' Hyper Quarks'},
             {"font-size": "30px", 
                "color": "#000000",
                 "border": "4px ridge #788C82", 
                 "padding": "20px", 
                 "background-image": "linear-gradient(90deg, rgb(0, 255, 21) 0%, rgb(214, 240, 227) 50%, rgb(187, 0, 212) 100%)",
                  }],
            ["blank", "46px"],
            ["display-text", function() { return 'You have ' + format(player.ct.sdust) + ' Stardust'},
             {"font-size": "30px",
                 "color": "#000000",
                  "border": "4px ridge #788C82",
                   "padding": "20px",
                    "background-image": "linear-gradient(90deg, rgb(91, 11, 11) 0%, rgb(93, 255, 171) 50%, rgb(11, 11, 128) 100%) ",
               
            }],
            ["blank", "46px"],
            ["display-text", function() { if(hasUpgrade('hm', 24)) return 'You have ' + format(player.ct.amult) + ' Atomic Multipliers'},
             {"font-size": "30px",
                 "color": "#000000",
                  "border": "4px ridge #788C82",
                   "padding": "20px", 
                   "background-image": "linear-gradient(90deg, rgb(91, 11, 11) 0%, rgb(74, 7, 7) 50%, rgb(160, 38, 38) 100%)"}],
            ["blank", "46px"],   
            ["display-text", function() {  if(getBuyableAmount('t', 34).gte(1) || player.ct.stars.gte(new Decimal(1))) return 'You have ' + format(player.ct.stars) + ' Stars'},
             {"font-size": "30px",
                 "color": "#000000",
                  "border": "4px ridge #788C82",
                   "padding": "20px",
                    "background-image": "linear-gradient(90deg, rgb(230, 109, 3) 0%, rgb(218, 254, 11) 50%, rgb(227, 185, 15) 100%) ",
               
            }],
           ["blank", "46px"],
            ["display-text", function() { return 'You have ' + format(player.ct.nzet) + ' Neptunic Zets'},
             {"font-size": "30px",
                 "color": "#000000",
                  "border": "4px ridge #788C82",
                   "padding": "20px",
                    "background-image": "linear-gradient(90deg, rgb(11, 26, 91) 0%, rgb(0, 247, 255) 50%, rgb(2, 234, 255) 100%) ",
               
            }],
             ["blank", "46px"],
             ["display-text", function() { if(hasUpgrade('hm', 32)) return 'You have ' + format(player.ct.hatom) + ' Heavy Atoms'},
                {"font-size": "30px",
                    "color": "#000000",
                    "border": "4px ridge #788C82",
                    "padding": "20px",
                    "background-image": "linear-gradient(90deg, rgb(34, 23, 23) 0%, rgb(44, 24, 24) 50%, rgb(46, 13, 13) 100%) ",
               
            }],
            ["blank", "46px"],
             ["display-text", function() { if(hasMilestone('b', 3)) return 'You have ' + format(player.ct.agenta) + ' Agenta'},
             {"font-size": "30px",
                 "color": "#000000",
                "border": "4px ridge #788C82",
                 "padding": "20px",
                 "background-image": "linear-gradient(90deg, rgb(211, 60, 29) 0%, rgb(219, 84, 56) 50%, rgb(229, 46, 10)100%)",
               
            }],
            ["blank", "46px"],
             ["display-text", function() { if(hasUpgrade('n', 23)) return 'You have ' + format(player.ct.grandeu) + ' Grandeu'},
             {"font-size": "30px",
                 "color": "#000000",
                "border": "4px ridge #788C82",
                 "padding": "20px",
                 "background-image": "linear-gradient(90deg, rgb(21, 175, 80) 0%, rgb(43, 201, 64) 50%, rgb(26, 191, 65)100%)",
               
            }],],
            
    },
      "Keeps": {
        content: [
           "blank",
            ["infobox", "lore2"],
           "milestones"
   ],
    
    },
    
 },
  milestones: {
    1: {
        requirementDescription: "Keep Level 1",
        effectDescription: "Keep all Heavy Multiplier keeps(e.g. quark upgrades)",
        done() { return hasMilestone('hm', 2) && hasMilestone('hm', 3) && hasUpgrade('hm', 31) && hasUpgrade('hm', 35) },
    },
    2: {
        requirementDescription: "Keep Level 2",
        effectDescription: "Keep Boracite keeps",
        done() { return hasMilestone('b', 1) },
        effect() { player.c.permanentGeneration = true }
    },
   
 },
infoboxes: {
    lore: {
        title: "Crafting Table",
        body() { return `The Crafting Table allows you to craft items using resources you've gathered.
         Currently, this feature is under development and will be expanded in future updates. In addition,
         there exists a tab to permanetly keep any feature that is unlocked once. This primarily pertains to components like an upgrade or challenge` }, },
    lore2: {
        title: "Keeps",
        body() { return `Each layer has its own temporary keeps, that are reset when reset by a higher layer. Unlocking all the keeps of a layer will unlock a keep layer, which is unaffectd by layer resets.` }, },
         },
    
 buyables: {
            11: {
                
        cost(x) { return [new Decimal(3).mul(x.plus(1)), new Decimal(300).mul(x.plus(1))] },
        title() { return "Hyper Quarks" },
        display() { return "Exchange " + format(this.cost()[0]) + " Hyper Multipliers and " + format(this.cost()[1]) + " Quarks for 1 Hyper Quark" },
        canAfford() {
            if (player.h.points.gte(this.cost()[0]) && player.q.points.gte(this.cost()[1])) {return true} else {return false}   
         },
         unlocked() {
            if(inChallenge('a', 12)) return false
            else if(hasMilestone('h', 3)) return true
         },
        buy() {
            player.h.points = player.h.points.sub(this.cost()[0])
            player.q.points = player.q.points.sub(this.cost()[1])
           player.ct.hq = player.ct.hq.add(1)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
       style() {
            return {backgroundImage: this.canAfford()?"linear-gradient(90deg, rgb(0, 255, 13) 0%, rgb(214, 240, 227) 50%, rgb(187, 0, 212) 100%)":"linear-gradient(90deg, rgb(0, 255, 21) 0%, rgb(214, 240, 227) 50%, rgb(183, 0, 207) 100%)",
            borderRadius: "0px", 
            border: "4px ridge #788C82",
            fontSize: "20px",
            padding: "20px",
            width: "400px",
            height: "150px",
            fontColor: "#000000",
            fontFamily: "Times New Roman",
            animation: "rippleMove 20s ease infinite",
             }
       },
       purchaseLimit: 5,
         
       
        
    },
    12: {
                
        cost(x) { return new Decimal(2) },
        title() { return "Helium" },
        display() { return "Exchange 2 protons and 2 neutrons and 2 electrons for a Helium Atom" },
        canAfford() {
            if (player.a.protons.gte(this.cost()) && player.a.neutrons.gte(this.cost()) && player.a.electrons.gte(this.cost())) {return true} else {return false}   
         },
         unlocked() {
            if(hasAchievement('ach', 31)) return true
         },
        buy() {
            player.a.protons = player.a.protons.sub(this.cost())
            player.a.neutrons = player.a.neutrons.sub(this.cost())
             player.a.electrons = player.a.electrons.sub(this.cost())
            player.ac.helium = player.ac.helium.add(1)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
       style() {
            return {backgroundImage: "linear-gradient(90deg, rgba(8, 34, 0, 0.48) 0%, rgb(43, 43, 43) 50%, rgb(48, 0, 0) 100%)",
            borderRadius: "0px", 
            border: "4px ridge #797979",
            backgroundSize: "800% 800%",
            fontSize: "20px",
            padding: "20px",
            width: "400px",
            height: "150px",
            fontColor: "#000000",
            fontFamily: "Comic Sans",
            animation: "rippleMove 20s ease infinite",
             }
       },
       
         
       
        
    },
       13: {
        
        cost(x) { return [new Decimal(5000).mul((player.ct.sdust).plus(1).pow(0.5)),
            new Decimal(100000).mul((player.ct.sdust).plus(1).pow(0.5))] },
        title() { return "Star Dust" },
        display() { return "Exchange atoms and cosmic dust for Star Dust. " +
            "Atoms cost: " + format(this.cost()[1])   +
            " Cosmic Dust cost: " + format(this.cost()[0]) 
         },
        canAfford() {
            if (player.a.points.gte(this.cost()[1]) && player.c.points.gte(this.cost()[0])) {return true} else {return false}   
         },
         unlocked() {
           return true
         },
        buy() {
             
            player.a.points = player.a.points.sub(this.cost()[1])
            player.c.points = player.c.points.sub(this.cost()[0])
            player.ct.sdust = player.ct.sdust.add(1)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
       style() {
            return {backgroundImage: this.canAfford()?"linear-gradient(90deg, rgb(91, 11, 11) 0%, rgb(93, 255, 171) 50%, rgb(11, 11, 128) 100%)":"linear-gradient(90deg, rgb(91, 11, 11) 0%, rgb(93, 255, 171) 50%, rgb(11, 11, 128) 100%)",
            borderRadius: "0px", 
            border: "4px ridge #797979",
            fontSize: "20px",
            padding: "20px",
            width: "400px",
            backgroundSize: "800% 800%",
            height: "150px",
            fontColor: "#000000",
            fontFamily: "Comic Sans",
             animation: "rippleMove 20s ease infinite",
             }
       },
       
         
       
        
    },
     14: {
        
        cost(x) { return [new Decimal(150000).mul(new Decimal(1.015).pow(x)),
            new Decimal(150000).mul(new Decimal(1.015).pow(x))] },
        title() { return "Atomic Multipliers" },
        display() { return "Exchange atoms and vinyl multipliers " +
            "Atoms cost: " + format(this.cost()[1])   +
            " Vinyl Multipliers cost: " + format(this.cost()[0]) 
         },
         effect() {
                return player.ct.amult.add(1).pow(0.7)
         },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        canAfford() {
            if (player.a.points.gte(this.cost()[1]) && player.v.points.gte(this.cost()[0])) {return true} else {return false}   
         },
         unlocked() {
           return (player.hm.atomicm.gte(1))
         },
        buy() {
            player.a.points = player.a.points.sub(this.cost()[1])
            player.v.points = player.v.points.sub(this.cost()[0])
            player.ct.amult = player.ct.amult.add(1)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
       style() {
            return {backgroundImage: this.canAfford()?"linear-gradient(90deg, rgb(91, 11, 11) 0%, rgb(74, 7, 7) 50%, rgb(160, 38, 38) 100%)":"linear-gradient(90deg, rgb(91, 11, 11) 0%, rgb(74, 7, 7) 50%, rgb(160, 38, 38) 100%)",
            borderRadius: "0px", 
            border: "4px ridge #797979",
            fontSize: "20px",
            padding: "20px",
            width: "400px",
            height: "150px",
            backgroundSize: "800% 800%",
            fontColor: "#000000",
            fontFamily: "Comic Sans",
             animation: "rippleMove 20s ease infinite",
             }
       },
       
         
       
        
    },
     15: {
        
        cost(x) { return new Decimal(100).mul(x.plus(1).pow(0.5))
             },
        title() { return "Stars" },
        display() { return "Exchange stardust for stars. Each star boosts cosmic dust and vinyl multiplier production by 2x " +
            "cost: " + format(this.cost()) +
            " currently: " + format(buyableEffect(this.layer, this.id)) + "x"
         
         },
         effect() {
                return new Decimal(2).mul(player.ct.stars)
         },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        canAfford() {
            return player.ct.sdust.gte(this.cost()) 
         },
         unlocked() {
           return (getBuyableAmount('t', 34).gte(1)) || player.ct.stars > new Decimal(1)
         },
        buy() {
            player.ct.sdust = player.ct.sdust.sub(this.cost())
          
            player.ct.stars = player.ct.stars.add(1)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
       style() {
            return {backgroundImage: this.canAfford()?"linear-gradient(90deg, rgb(240, 205, 29) 0%, rgb(255, 159, 15) 50%, rgb(140, 87, 21) 100%)":"linear-gradient(90deg, rgb(240, 205, 29) 0%, rgb(255, 159, 15) 50%, rgb(140, 87, 21) 100%)",
            borderRadius: "0px", 
            border: "4px ridge #797979",
            fontSize: "20px",
            padding: "20px",
            width: "400px",
            height: "150px",
            backgroundSize: "800% 800%",
            fontColor: "#000000",
            fontSize: "17px",
            fontFamily: "Comic Sans",
             animation: "rippleMove 20s ease infinite",
             }
       },
       
         
       
        
    },
     16: {
        
        cost(x) { return new Decimal(100000).mul(x.plus(1).pow(0.5))
             },
        title() { return "Neptunic Zet" },
        display() { return "Exchange empzet and protozet for Neptunic Zets. A Neptunic Zet boosts particles. " +
            "cost(both): " + format(this.cost()) +
            " currently: " + format(buyableEffect(this.layer, this.id)) + "x"
         
         },
         effect() {
                return new Decimal(1.5).mul(player.ct.nzet)
         },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        canAfford() {
            return player.chm.empzet.gte(this.cost()) && player.chm.protozet.gte(this.cost())
         },
         unlocked() {
           return true
         },
        buyMax() {
            let costPerUnit = new Decimal(100000).mul(getBuyableAmount(this.layer, this.id).plus(1).pow(0.5))
            let max1 = player.chm.empzet.div(costPerUnit).floor()
            let max2 = player.chm.protozet.div(costPerUnit).floor()
            let max = Decimal.min(max1, max2).floor()
           return [costPerUnit, max]
        },
        buy() {
            let [costPerUnit, max] = this.buyMax()
            if (max.lt(1)) max = new Decimal(1)
            player.chm.empzet = player.chm.empzet.sub(costPerUnit.mul(max))
            player.chm.protozet = player.chm.protozet.sub(costPerUnit.mul(max))
            player.ct.nzet = player.ct.nzet.add(max)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
       style() {
            return {backgroundImage: this.canAfford()?"linear-gradient(90deg, rgb(36, 29, 240) 0%, rgb(15, 235, 255) 50%, rgb(43, 21, 140) 100%)":"linear-gradient(90deg, rgb(29, 180, 240) 0%, rgb(35, 15, 255) 50%, rgb(21, 41, 140) 100%)",
            borderRadius: "0px", 
            border: "4px ridge #797979",
            fontSize: "20px",
            padding: "20px",
            width: "400px",
            height: "150px",
            backgroundSize: "800% 800%",
            fontColor: "#000000",
            fontSize: "17px",
            fontFamily: "Comic Sans",
             animation: "rippleMove 20s ease infinite",
             }
       },
       
         
       
        
    },
    17: {
        
        cost(x) { return [new Decimal(100000000).mul(x.plus(1).mul(Decimal.log(x.plus(1), 10)).plus(1)), new Decimal(48).mul(x.plus(1).pow(0.5))]
             },
        title() { return "Heavy Atoms" },
        display() { return "Exchange heavy multiplier and atoms for heavy atoms, heavy atoms boost vinyl multiplier and atoms gain by 1.2x, " +
            "Heavy cost: " + format(this.cost()[1]) + " | Atoms cost: " + format(this.cost()[0]) +
            " currently: " + format(buyableEffect(this.layer, this.id)) + "x"
         
         },
         effect() {
                return new Decimal(1.2).mul(player.ct.hatom)
         },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        canAfford() {
            return player.hm.points.gte(this.cost()[0]) && player.a.points.gte(this.cost()[1])
         },
         unlocked() {
           return (hasUpgrade('hm', 32))
         },
         buyMax() {
            let costPerUnit1 = this.cost()[1]
            let costPerUnit2 = this.cost()[0]
            let max1 = player.a.points.div(costPerUnit1).floor()
            let max2 = player.hm.points.div(costPerUnit2).floor()
            let max = Decimal.min(max1, max2).floor()
           return [costPerUnit1, costPerUnit2, max]
        },
        buy() {
            let [costPerUnit1, costPerUnit2, max] = this.buyMax()
            if (max.lt(1)) max = new Decimal(1)
            player.a.points = player.a.points.sub(costPerUnit1.mul(max))
            player.hm.points = player.hm.points.sub(costPerUnit2.mul(max))
            player.ct.hatom = player.ct.hatom.add(max)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
       style() {
            return {backgroundImage: this.canAfford()?"conic-gradient(90deg, rgb(19, 15, 15) 0%, rgb(30, 16, 16) 50%, rrgb(30, 6, 6)100%)":"conic-gradient(90deg, rgb(19, 13, 13) 0%, rgb(44, 13, 13) 50%, rgb(48, 27, 27) 100%)",
            borderRadius: "0px", 
            border: "4px ridge #797979",
            fontSize: "16px",
            padding: "20px",
            width: "400px",
            height: "150px",
            backgroundSize: "800% 800%",
            fontColor: "#000000",
            
            fontFamily: "Comic Sans",
             animation: "rippleMove 20s ease infinite",
             }
       },
       
         
       
        
    },
     18: {
        
        cost(x) { return new Decimal(100).mul(x.plus(1))
             },
        title() { return "Agenta" },
        display() { return "Exchange Agate for Agenta, which increases boracite gain " +
            "cost: " + format(this.cost()) + 
            " currently: " + format(buyableEffect(this.layer, this.id)) + "x"
         
         },
         effect() {
                return new Decimal(1).add(player.ct.agenta.mul(0.1))
         },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        canAfford() {
            return player.b.Agate.gte(this.cost())
         },
         unlocked() {
           return (hasMilestone('b', 3))
         },
        buyMax() {
            let costPerUnit = this.cost()[0]
            
            let max = player.b.Agate.div(costPerUnit).floor()
            
            
           return [costPerUnit, max]
        },
        buy() {
            let [costPerUnit, max] = this.buyMax()
            if (max.lt(1)) max = new Decimal(1)
            player.b.Agate = player.b.Agate.sub(costPerUnit.mul(max))
            
            player.ct.agenta = player.ct.agenta.add(max)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
       style() {
            return {backgroundImage: this.canAfford()?"linear-gradient(90deg, rgb(211, 60, 29) 0%, rgb(219, 84, 56) 50%, rgb(229, 46, 10)100%)":"linear-gradient(90deg, rgb(211, 60, 29) 0%, rgb(239, 88, 57) 50%, rgb(229, 48, 11) 100%)",
            borderRadius: "0px", 
            border: "4px ridge #797979",
            fontSize: "16px",
            padding: "20px",
            width: "400px",
            height: "150px",
            backgroundSize: "800% 800%",
            fontColor: "#000000",
            
            fontFamily: "Comic Sans",
             animation: "rippleMove 20s ease infinite",
             }
       },
       
         
       
        
    },
    19: {
        
        cost(x) { return new Decimal(100).mul(x.plus(1))
             },
        title() { return "Grandeu" },
        display() { return "A surplus of a fine judgement. Boost Tetra gain with this delicacy " +
            "cost: " + format(this.cost()) + 
            " currently: " + format(buyableEffect(this.layer, this.id)) + "x"
         
         },
         effect() {
                return new Decimal(3).mul(player.ct.Grandeu)
         },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        canAfford() {
            return player.b.Grandulum.gte(this.cost())
         },
         unlocked() {
           return (hasUpgrade('n', 23))
         },
          buyMax() {
            let costPerUnit = this.cost()[0]
            
            let max = player.b.Grandulum.div(costPerUnit).floor()
            
            
           return [costPerUnit, max]
        },
        buy() {
            let [costPerUnit, max] = this.buyMax()
            if (max.lt(1)) max = new Decimal(1)
            player.b.Grandulum = player.b.Grandulum.sub(costPerUnit.mul(max))
            
            player.ct.Grandeu = player.ct.Grandeu.add(max)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
       style() {
            return {backgroundImage: this.canAfford()?"linear-gradient(90deg, rgb(38, 188, 78) 0%, rgb(49, 186, 65) 50%, rgb(20, 196, 67)100%)":"linear-gradient(90deg, rgb(38, 188, 78) 0%, rgb(49, 186, 65) 50%, rgb(20, 196, 67)100%)",
            borderRadius: "0px", 
            border: "4px ridge #797979",
            fontSize: "16px",
            padding: "20px",
            width: "400px",
            height: "150px",
            backgroundSize: "800% 800%",
            fontColor: "#000000",
            
            fontFamily: "Comic Sans",
             animation: "rippleMove 20s ease infinite",
             }
       },
       
         
       
        
    },
    
},

 


}


)