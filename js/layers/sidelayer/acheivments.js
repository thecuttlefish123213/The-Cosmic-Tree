addLayer("ach", {
    startData() { return {                 
        unlocked() {return true},
       
    }},
    symbol: "ACH",
    name: "Achievements",
    color: "#dbdbdb",                       
     row: "side",                                
     baseResource: "particles",                
    baseAmount() { return player.points }, 
     requires: new Decimal(10),              
     type: "none",                        
    exponent: 0.5,                        

    gainMult() {                          
        return new Decimal(1)              
    },
    gainExp() {                            
        return new Decimal(1)
    },
    layerShown() { return true },          

     achievements: {
    11: {
        name: "Experienced",
        done() {return player.points.gte(100)},
        tooltip: "obtain 100 particles",
        
    },
    12: {
        name: "Varied",
        done() {return player.m.points.gte(10)},
        tooltip: "obtain 10 multipliers"
        
    },
     13: {
        name: "Secondary engagement",
        done() {return player.q.points.gte(1)},
        tooltip: "obtain 1 quark"
        
    },
     14: {
        name: "Subcurrency grind",
        done() {return player.q.uq.gte(1)},
        tooltip: "obtain 1 up quark"
        
    },
    15: {
        name: "Downtown",
        done() {return player.q.dq.gte(1)},
        tooltip: "obtain 1 down quark"
        
    },
    16: {
        name: "Doctor Strange",
        done() {return player.q.sq.gte(1)},
        tooltip: "obtain 1 strange quark"
        
    },
    17: {
        name: "Too Strange",
        done() {return player.q.sq.gte(666)},
        tooltip: "OKAY this is weird"
        
    },
    21: {
        name: "Prince Charming",
        done() {return player.q.cq.gte(1)},
        tooltip: "Self-evident"
        
    },
    22: {
        name: "Top of the barrel",
        done() {return player.q.tq.gte(1)},
        tooltip: "The barrel lives and breaths"
        
    },
    23: {
        name: "Bottom of the barrel",
        done() {return player.q.bq.gte(1)},
        tooltip: "The barrel sulks and sighs"
        
    },
    24: {
        name: "Hyper",
        done() {return player.h.points.gte(1)},
        tooltip: "The hyper bar was scrapped, don't worry"
        
    },
     25: {
        name: "Womanizer",
        done() {return player.a.points.gte(1)},
        tooltip: "You're such a womanizer"
        
    },
     26: {
        name: "Smooth music",
        done() {return player.v.points.gte(1)},
        tooltip: "How quaint"
        
    },
    27: {
        name: "The Grinder",
        done() {return player.points.gte(1e9)},
        tooltip: "Looser"
        
    },
     31: {
        name: "Periodic",
        done() {return player.a.neutrons.gte(1)},
        tooltip: "Hydrogen a good time",
        
        unlocked() {
            return true
        }
    },
     32: {
        name: "True atomizer",
        done() {return (hasChallenge('a', 11))},
        tooltip: "What an atomizer",
        
    },
    33: {
        name: "Dusty trail",
        done() {return player.c.points.gte(1)},
        tooltip: "I reckon its time for cosmic exploration",
        
    },
    34: {
        name: "Exploration",
        done() {return player.c.t.gte(1)},
        tooltip: "Telescopes away",
        
    },
     35: {
        name: "Radar technology",
        done() {return player.c.adt.gte(1)},
        tooltip: "Advancing society",
        
    },
    36: {
        name: "Deep Space",
        done() {return (getClickableState('c', 35))},
        tooltip: "You shall not traverse",
        
    },
    37: {
        name: "Dr. Heinz Doofenshmirtz",
        done() {return (hasChallenge('a', 12))},
        tooltip: "Behold the world's tiniest violinator",
        
    },
    41: {
        name: "Super-radar technology",
        done() {return (player.c.sat.gte(1))},
        tooltip: "Super-advancing society",
        
    },
     42: {
        name: "HEAVY!!!",
        done() {return (player.hm.points.gte(1))},
        tooltip: "It's so heavy it affects the achievement",
        style: {
            "width": "150px",
            "height": "150px"
        },
       
        
    },
      43: {
        name: "THE POWERHOUSE",
        done() {return (player.ce.mito.gte(1))},
        tooltip: "Mitochondria",
        
    },
    44: {
        name: "Deoxyribose",
        done() {return (player.ce.nucleus.gte(1))},
        tooltip: "Nucleus",
        
    },
     45: {
        name: "Ribosomic",
        done() {return (player.ce.endr.gte(1))},
        tooltip: "Endoplasmic reticulum",
        
    },
     46: {
        name: "The Vacuum",
        done() {return (player.ce.vacu.gte(1))},
        tooltip: "Vacuole",
        
    },
    51: {
        name: "Golgarity",
        done() {return (player.ce.golgi.gte(1))},
        tooltip: "Golgi",
        
    },
     52: {
        name: "Gooey",
        done() {return (player.ce.cytoplasm.gte(1))},
        tooltip: "Cytoplasm",
        
    },
      53: {
        name: "THE QUEST FOR LIFE",
        done() {return (player.ce.points.gte(1))},
        tooltip: "1 CELL",
        
    },
    54: {
        name: "Tetrated Prism",
        done() {return (player.t.points.gte(1))},
        tooltip: "1 tetra",
        
    }, 
    55: {
        name: "Powerized frequencies",
        done() {return (player.ct.amult.gte(1))},
        tooltip: "1 atomic multiplier",
        
    },
    56: {
        name: "The Grand Bulwark",
        done() {return (player.b.points.gte(1))},
        tooltip: "1 boracite",
        
    },
     57: {
        name: "The Junkyard",
        done() {return (player.chm.points.gte(1))},
        tooltip: "1 mechanical multiplier",
        
    },
    61: {
        name: "Bloody Hell",
        done() {return (player.ce.bloodcells.gte(1))},
        tooltip: "1 blood cell",
        
    },
    62: {
        name: "Cold Liver",
        done() {return (player.ce.hepaticcells.gte(1))},
        tooltip: "1 liver(hepatic) cell",
        
    },
    63: {
        name: "Breathables",
        done() {return (player.ce.lungcells.gte(1))},
        tooltip: "1 lung cell",
        
    },
    64: {
        name: "Kinetic",
        done() {return (player.ce.bonecells.gte(1))},
        tooltip: "1 bone cell",
        
    },
     65: {
        name: "Energy",
        done() {return (player.ce.musclecells.gte(1))},
        tooltip: "1 muscle cell",
        
    },
     66: {
        name: "Urine Core",
        done() {return (player.ce.renalcells.gte(1))},
        tooltip: "1 renal(kidney) cell",
        
    },
    67: {
        name: "Brain Power",
        done() {return (player.ce.neurons.gte(1))},
        tooltip: "1 Neuron",
        
    },
    71: {
        name: "Industrial Hell",
        done() {return (player.chm.droneMK1.gte(1))},
        tooltip: "1 Drone Mark 1",
        
    },
    72: {
        name: "Mechanical Monsters",
        done() {return (player.chm.droneMK2.gte(1))},
        tooltip: "1 Drone Mark 2",
        
    },
     73: {
        name: "Agaentian Paradise",
        done() {return (player.b.Agate.gte(1))},
        tooltip: "1 Agate",
        
    },
    74: {
        name: "Orpimental Chaos",
        done() {return (player.b.Orpiment.gte(1))},
        tooltip: "1 Orpiment",
        
    },
    75: {
        name: "Panenital",
        done() {return (player.b.Panenite.gte(1))},
        tooltip: "1 Panenite",
        
    },
    76: {
        name: "Dawn of the Colossus",
        done() {return (player.mm.points.gte(1))},
        tooltip: "1 Mega Multiplier",
        
    },
     77: {
        name: "The Ice Kingdom",
        done() {return (player.n.points.gte(1))},
        tooltip: "1 Nissionite",
        effect() {
            player.c.permanetGeneration = true
        },
        
    }, 
    81: {
        name: "Absolute Zero Paradise",
        done() {return (hasUpgrade('n', 24))},
        tooltip: "The minimum temperature",
       
        
    },

    
    
    
} 

})