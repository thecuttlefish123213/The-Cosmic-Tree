    addLayer("d", {
    name: "Dimensions", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        variable: new Decimal(0),
        polymetrics: new Decimal(0),
        

        polygave: false,
        polygave2: false,
        polygave3: false,
        polygave4: false,
        polygave5: false,
        polygave6: false,
        polygave7: false,
        polygave8: false,

        code1: "hyperspace"
       
    }},
    polymetricsReceived() {
        return new Decimal(1).mul(buyableEffect('d', 11))
    },
    color: "#4d4a79",
  requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "Dimensional Points", // Name of prestige currency
    baseResource: "Tetras", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
     doReset(reset){
        let keep = []
      
        keep.push("variable")
         if (layers[reset].row > this.row) {layerDataReset("d", keep)}
    },
    onPrestige() {
        if(getBuyableAmount('d',11).gte(1)) player.d.polymetrics = player.d.polymetrics.plus(this.polymetricsReceived())
    },
   update() {
    if(( player.d.points >= 1))
    {player.d.variable = new Decimal(1)}
   },
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
         mult = mult.times(player.b.megatronicsMultiplier())
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    nodeStyle() {
        
       if(player.d.unlocked == true || tmp.d.canReset == true)  return {"background-image": "linear-gradient( #2b2e55, #38326b)",
        "animation": "hologram 1s linear infinite",
        "text-shadow": "0 0 30px rgb(255, 255, 255)",
        "box-shadow": "0 0 20px rgb(255, 255, 255), inset 0 0 20px rgb(255, 255, 255)",
        
        }
        
    },
    
    row: 3, // Row the layer is in on the tree (0 is the first row)
    branches: ["t", "o", "b"],
    hotkeys: [
        {key: "d", description: "D: Reset for dimensions", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
     layerShown(){return player.n.unlocked
    },
     tabFormat: {
    "Requiem for Verses": {
        content: [
            ["main-display", function() {return "main-display"},
                {"font-family": "Times New Roman"}
            ],
           ["prestige-button", function() { return "prestige-button"},{"border-radius": "0px"}],
           ["display-text", "Dimensions are fun, aren't they? We can only really process the 2nd and 3rd dimension. Limitations aside, you have to push onward. Unlock up to the 11th dimension.",
            {"font-size": "21px"}
           ],
           "blank",
            ["display-text", function() { return '<br>You have ' + format(player.d.polymetrics) + ' Polymetrics ' }, 
             {"font-size": "40px", "display": "inline-block", "color": "#beb6b6", "border": "2px ridge #989898","background-size": "cover","background-position": "center",
                "background-origin": "border-box","background-repeat": "no-repeat", "width": "600px", "height": "120px",
                "background": "radial-gradient(circle at 50% 40%, rgb(23, 8, 90) 0%, rgb(23, 12, 90) 40%, rgb(8, 7, 61) 100%)", 
                
               }
            ], 
            "blank",
           
           ["display-text", "The First Dimension", {"font-size": "30px"}],
           ["row", [["upgrade", "11"], ["upgrade", "12"], ["upgrade", "13"], ["upgrade", "14"], ["challenge", "11"], ["buyable", "11"]]],
           ["blank", "30px"],
           function() { hasChallenge('d', 11) ? ["display-text", "The Second Dimension",
            {"font-size": "30px"}
           ] : null },
           function() { hasChallenge('d', 11) ? ["row", [["upgrade", "15"], ["upgrade", "16"], ["upgrade", "17"], ["upgrade", "18"], ["challenge", "11"], ["challenge", "12"],["buyable", "12"]]]
             : null },
        ],
        
    },
    },
    upgrades: {
    11: {
        title: "A Whole New World",
        description: "Start you journey with a +10 Tetra boost, and 5 polymetrics",
        cost: new Decimal(1),
        style: {
            "width": "200px",
            "height": "200px",
            "font-size": "17px"
        },
        effect() {
            if(hasUpgrade('d', 11)) {
            if (!player.d.polygave) {
            player.d.polymetrics = player.d.polymetrics.plus(5)
             player.d.polygave = true
            }
            }
        }
        
    },
     12: {
        title: "The Brink of Continuum",
        description: "+15 polymetrics, +2 tetra boost, x100 Vinyl Boost",
        cost: new Decimal(2),
        style: {
            "width": "200px",
            "height": "200px",
            "font-size": "17px"
        },
        effect() {
            if(hasUpgrade('d', 12)) {
            if (!player.d.polygave2) {
            player.d.polymetrics = player.d.polymetrics.plus(15)
             player.d.polygave2 = true
            }
            }
        }
        
    },
    13: {
        title: "Garden of Wilted Thoughts",
        description: "+40 polymetrics",
        cost: new Decimal(4),
        style: {
            "width": "200px",
            "height": "200px",
            "font-size": "17px"
        },
        effect() {
            if(hasUpgrade('d', 12)) {
            if (!player.d.polygave3) {
            player.d.polymetrics = player.d.polymetrics.plus(40)
             player.d.polygave3 = true
            }
            }
        }
        
    },
     14: {
        title: "Spacetime Distortion",
        description: "+40 polymetrics, +10 tetra boost",
        cost: new Decimal(7),
        style: {
            "width": "200px",
            "height": "200px",
            "font-size": "17px"
        },
        effect() {
            if(hasUpgrade('d', 12)) {
            if (!player.d.polygave4) {
            player.d.polymetrics = player.d.polymetrics.plus(40)
             player.d.polygave4 = true
            }
            }
        }
        
    },
    15: {
        title: "Return to Subordinary",
        description: "+80 polymetrics, x250 Vinyl boost",
        cost: new Decimal(15),
        style: {
            "width": "200px",
            "height": "200px",
            "font-size": "17px"
        },
        effect() {
            if(hasUpgrade('d', 12)) {
            if (!player.d.polygave5) {
            player.d.polymetrics = player.d.polymetrics.plus(80)
             player.d.polygave5 = true
            }
            }
        }
        
    },
    16: {
        title: "Cosmic Spectacles",
        description: "x100 million Atom boost, x1e12 Cosmic Dust Boost",
        cost: new Decimal(32),
        style: {
            "width": "200px",
            "height": "200px",
            "font-size": "17px"
        },
        
        
    },
    17: {
        title: "Soul in the Idol",
        description: "x1.5 cell boost",
        cost: new Decimal(50),
        style: {
            "width": "200px",
            "height": "200px",
            "font-size": "17px"
        },
        
        
    },
    18: {
        title: "Sage of Logic",
        description: "+400 polymetrics",
        cost: new Decimal(50),
        style: {
            "width": "200px",
            "height": "200px",
            "font-size": "17px"
        },
        effect() {
            if(hasUpgrade('d', 12)) {
            if (!player.d.polygave6) {
            player.d.polymetrics = player.d.polymetrics.plus(400)
             player.d.polygave6 = true
            }
            }
        }
        
    },
    },
    buyables: {
    11: {
        cost(x) { return new Decimal(5).mul(x.plus(1)) },
        title: "Length",
        display() { return "Receive " + format(player.d.polymetricsReceived) + " Polymetrics on reset. "  + "cost: " + format(this.cost()) + " polymetrics"},
        canAfford() { return player[this.layer].polymetrics.gte(this.cost()) },
        effect(x) {
            return new Decimal(x).mul(2.5)
        },
        canBuyMax: true,
        buyMax() {
            let c = getBuyableAmount('d', 11)
            let B = player.d.polymetrics

            let affordable = c.mul(2).plus(1).neg().plus(c.mul(2).plus(1).pow(2).plus(B.mul(8).div(5)).sqrt()).div(2).floor()
            let summedCost = affordable.mul(affordable.plus(c.mul(2)).plus(1)).mul(2.5)
            if(summedCost.gt(player.d.polymetrics)) {
                return;
            }
            player.d.polymetrics = player.d.polymetrics.sub(summedCost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(affordable))
        },
        buy() {
            if(this.canBuyMax) {
                this.buyMax()
                return;
            }
        },
        style: {
            "width": "275px",
            "height": "275px",
            "font-size": "22px",
        }
    },
    
    },
    challenges: {
    11: {
        name: "Complex of Sanctity",
        challengeDescription: "Apply a softcap to Atoms, the more dimensional points you have, the less harsh the softcap",
        rewardDescription() {
            "Unlocked the Second Dimension"
        },
        goalDescription: "Get 1e9 Atoms",
        canComplete: function() {return player.a.points.gte(1e9)},
        style: {
            "border-radius": "0px",
            "font-size": "20px"
        }
    },
    
    }
        }
   
       )