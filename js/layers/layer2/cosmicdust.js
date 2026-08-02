addLayer("c", {
  name: "Cosmic Dust", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() {
    return {
      unlocked: false,
      points: new Decimal(0),
      t: new Decimal(0),
      adt: new Decimal(0),
      sat: new Decimal(0),
      variable: new Decimal(0),
      unlocked1: new Decimal(0),
      unlocked2: new Decimal(0),
      unlocked3: new Decimal(0),
      unlocked4: new Decimal(0),
      unlocked5: new Decimal(0),
      unlocked6: new Decimal(0),
      aChallengeUnlocked: false,
      cellUnlocked: false,
      updated: false,
      permanentGeneration: false,
      multiplier() {
        if (inChallenge("a", 21)) return new Decimal(1);
        else return player.ce.dna.plus(1).pow(0.3);
      },
    };
  },
  softcap() {
    let nissionite = player.n.points.toNumber();
    let equation = (0.1 + nissionite) / (challengeCompletions("n", 11) + 1);
    if (inChallenge("n", 11)) return new Decimal(equation);
    if (challengeCompletions("n", 11) >= 6 && inChallenge("n", 11))
      return new Decimal(0.99);
    else return new Decimal(50);
  },
  softcapPower() {
    let nissionite = player.n.points.toNumber();
    let equation =
      (0.01 + nissionite * 0.01) / (challengeCompletions("n", 11) * 2 + 1);
    if (challengeCompletions("n", 11) >= 6 && inChallenge("n", 11))
      equation = 0.001;
    if (inChallenge("n", 11)) return new Decimal(equation);
    else return new Decimal(0.2);
  },
  doReset(reset) {
    let keep = ["aChallengeUnlocked", "permanetGeneration"];
    if (!player.sm.canReset) {
      return null;
    }
    keep.push("t");
    keep.push("adt");
    keep.push("sat");
    keep.push("variable");
    keep.push("unlocked1");
    keep.push("unlocked2");
    keep.push("unlocked3");
    keep.push("unlocked4");
    keep.push("unlocked5");
    keep.push("unlocked6");
    keep.push("updated");
    keep.push("cellUnlocked");
    if (player.b.keepCUpgrades) {
      keep.push("upgrades");
      keep.push("clickables");
      keep.push("infoboxes");
    }
    if (layers[reset].row > this.row) {
      layerDataReset("c", keep);
    }
  },
  color: "#0004ff",
  nodeStyle: {
    "background-image":
      "linear-gradient(90deg,rgb(0, 4, 255) 0%, rgb(19, 1, 214) 50%, rgb(27, 11, 212) 100%)",
    "background-size": "150px 600%",
    "background-position": "40% 50%",
  },
  requires: new Decimal(1000000), // Can be a function that takes requirement increases into account
  resource: "Cosmic Dust", // Name of prestige currency
  baseResource: "Quarks", // Name of resource prestige is based on
  baseAmount() {
    return player.q.points;
  }, // Get the current amount of baseResource
  type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  exponent: 0.4, // Prestige currency exponent
  gainMult() {
    // Calculate the multiplier for main currency from bonuses
    mult = new Decimal(1);
    mult = mult.times(player.c.multiplier());
    if (hasUpgrade("ce", 12)) mult = mult.times(2);

    if (inChallenge("a", 21)) mult = mult.times(0.5);
    if (getBuyableAmount("t", 12).gte(1))
      mult = mult.times(buyableEffect("t", 12));
    if (player.ct.stars.gte(1)) mult = mult.times(buyableEffect("ct", 15));
    if (player.ce.points.gte(1))
      mult = mult.times(new Decimal(4).mul(player.ce.points));
    if (getBuyableAmount("t", 24).gte(1))
      mult = mult.times(buyableEffect("t", 24));
    if (getBuyableAmount("ce", 102).gte(1))
      mult = mult.times(buyableEffect("ce", 102));
    if (player.chm.multiplicitiveInverse.gte(1))
      mult = mult.times(player.chm.mInverseFunction());

    if (player.b.Arbitorite.gte(1))
      mult = mult.times(player.b.arbitoriteMultiplier());
    if (player.b.Bloodstone.gte(1))
      mult = mult.times(player.b.bloodstoneMultiplier());
    if (player.ct.bdust.gte(1)) mult = mult.times(player.ct.bdustEffect1());
    mult = mult.times(player.b.koriumMultiplier());
    if (inChallenge("d", 14)) {
      return mult;
    } else {
      if (hasUpgrade("n", 12)) mult = mult.times(5);
      if (challengeCompletions("n", 11) >= 1)
        mult = mult.times(challengeEffect("n", 11));
    }
    if (hasUpgrade("d", 39)) mult = mult.times(1e12);
    if (hasUpgrade("d", 45)) mult = mult.times(1e13);
    if (challengeCompletions("n", 11) >= 1)
      mult = mult.times(challengeEffect("n", 11));
    return mult;
  },
  passiveGeneration() {
    if (getBuyableAmount("t", 33).gte(1))
      return new Decimal(0.01).mul(getBuyableAmount("t", 33));
    if (hasMilestone("b", 1) || hasMilestone("ct", 2)) return new Decimal(1);
    if (player.c.permanentGeneration) return new Decimal(1);
  },
  update() {
    if (
      player.q.points.gte(500000) ||
      player.c.points >= 1 ||
      player.hm.points >= 1 ||
      player.ce.points >= 1
    ) {
      player.c.variable = new Decimal(1);
    }
    if (hasMilestone("b", 1)) {
      player.c.t = player.c.t.add(0.1);
    }
  },
  gainExp() {
    // Calculate the exponent on main currency from bonuses
    return new Decimal(1);
  },
  row: 1, // Row the layer is in on the tree (0 is the first row)
  hotkeys: [
    {
      key: "c",
      description: "C: Reset for cosmic dust ",
      onPress() {
        if (canReset(this.layer)) doReset(this.layer);
      },
    },
  ],
  branches: ["a", "q"],
  layerShown() {
    return player.a.unlocked;
  },

  tabFormat: {
    "Prestige and Upgrades": {
      content: [
        [
          "main-display",
          function () {
            return "main-display";
          },
          { "font-family": "Times New Roman" },
        ],
        "blank",
        [
          "prestige-button",
          function () {
            return "prestige-button";
          },
          { "border-radius": "0px" },
        ],
        "blank",
        "blank",

        [
          "display-text",
          function () {
            return "You have " + format(player.q.points) + " quarks.";
          },
        ],
        "blank",
        "upgrades",
      ],
    },
    Astronomy: {
      content: [
        [
          "display-text",
          function () {
            return "You have " + format(player.c.t) + " telescopes.";
          },
          { "border-radius": "0px", "font-size": "28px" },
        ],
        "blank",
        [
          "display-text",
          function () {
            if (hasChallenge("a", 11) || player.c.unlocked6.gte(1))
              return (
                "You have " + format(player.c.adt) + " advanced telescopes."
              );
          },
          { "border-radius": "0px", "font-size": "28px" },
        ],
        "blank",

        [
          "display-text",
          function () {
            if (player.c.unlocked5.gte(1))
              return (
                "You have " +
                format(player.c.sat) +
                " super advanced telescopes."
              );
          },
          { "border-radius": "0px", "font-size": "28px" },
        ],
        "blank",
        ["clickable", "11"],
        "blank",
        "buyables",
        "blank",
        ["infobox", "lore"],
        [
          "column",
          [
            [
              "row",
              [
                ["clickable", "21"],
                ["clickable", "22"],
                ["clickable", "23"],
                ["clickable", "24"],
                ["clickable", "25"],
              ],
            ],
          ],
        ],
        [
          "column",
          [
            [
              "row",
              [
                ["clickable", "31"],
                ["clickable", "32"],
                ["clickable", "33"],
                ["clickable", "34"],
                ["clickable", "35"],
              ],
            ],
          ],
        ],
        [
          "column",
          [
            [
              "row",
              [
                ["clickable", "41"],
                ["clickable", "42"],
                ["clickable", "43"],
                ["clickable", "44"],
                ["clickable", "45"],
              ],
            ],
          ],
        ],
        [
          "column",
          [
            [
              "row",
              [
                ["clickable", "51"],
                ["clickable", "52"],
                ["clickable", "53"],
                ["clickable", "54"],
                ["clickable", "55"],
              ],
            ],
          ],
        ],
      ],
    },
  },
  clickables: {
    11: {
      display() {
        return "Click me for telescopes";
      },
      onClick() {
        if (hasUpgrade("c", 14)) {
          player.c.t = player.c.t.add(4);
        } else if (hasUpgrade("c", 13)) {
          player.c.t = player.c.t.add(2);
        } else {
          player.c.t = player.c.t.add(1);
        }
      },
      canClick() {
        return true;
      },
    },
    21: {
      display() {
        return "Click to discover";
      },
      onClick() {
        return null;
      },
      tooltip: "nothing here",
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
      },
    },
    23: {
      display() {
        return "Click me to discover";
      },
      tooltip: "nothing here",
      onClick() {
        return null;
      },
      canClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      style: {
        "border-radius": "0px",
      },
    },
    22: {
      display() {
        return "click me to discover";
      },
      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
      },
    },
    24: {
      display() {
        return "click me to discover";
      },

      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "orange",
      },
    },
    25: {
      display() {
        return "click me to discover";
      },
      tooltip:
        "Unlock the Orbital Station(craftable). This is a very late game item. Req: 100 advanced telescopes, 50 Super advanced telescopes, 100 telescopes, 12 cosmic dust and 2000 Strange Quarks",
      onClick() {
        if (
          player.c.adt >= 100 &&
          player.c.t >= 100 &&
          player.c.points >= 12 &&
          player.q.sq >= 2000 &&
          player.c.sat >= 50
        ) {
          player.c.adt = player.c.adt.sub(100);
          player.c.t = player.c.t.sub(100);
          player.c.points = player.c.points.sub(12);
          player.q.sq = player.q.sq.sub(2000);
          player.c.sat = player.c.sat.sub(50);
          player.c.unlocked1 = new Decimal(1);
          setClickableState("c", 25, 1);
        } else return null;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },

      canClick() {
        if (
          player.c.adt >= 100 &&
          player.c.t >= 100 &&
          player.c.points >= 12 &&
          player.q.sq >= 2000
        )
          return true;
      },
      style: {
        "border-radius": "100px",
      },
    },
    31: {
      display() {
        return "click me to discover";
      },
      tooltip:
        "2x particle boost. req: 1 cosmic dust, 200 telescopes, 7 advanced telescopes",
      onClick() {
        if (player.c.adt >= 7 && player.c.t >= 200 && player.c.points >= 1) {
          player.c.adt = player.c.adt.sub(7);
          player.c.t = player.c.t.sub(200);
          player.c.points = player.c.points.sub(1);
          player.c.unlocked2 = new Decimal(1);
          setClickableState("c", 31, 1);
        } else return null;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      effect() {
        if (inChallenge("a", 21)) return new Decimal(1);
        else if (player.c.unlocked2.gte(1)) return new Decimal(2);
        else return new Decimal(1);
      },
      canClick() {
        if (player.c.adt >= 7 && player.c.t >= 200 && player.c.points >= 1)
          return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "maroon",
      },
    },
    32: {
      display() {
        return "click me to discover";
      },
      tooltip:
        "Orbital Cannon(craftable) req: 150 Advanced telescopes, 75 Super advanced telescopes, 500 telescopes, 10 cosmic dust, 999 top quarks",
      onClick() {
        if (
          player.c.adt >= 150 &&
          player.c.t >= 500 &&
          player.c.points >= 10 &&
          player.q.tq >= 999 &&
          player.c.sat >= 75
        ) {
          player.c.adt = player.c.adt.sub(150);
          player.c.sat = player.c.sat.sub(75);
          player.c.t = player.c.t.sub(500);
          player.c.points = player.c.points.sub(10);
          player.q.tq = player.q.tq.sub(999);
          player.c.unlocked3 = new Decimal(1);
          setClickableState("c", 32, 1);
        } else return null;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        if (
          player.c.adt >= 150 &&
          player.c.t >= 500 &&
          player.c.points >= 10 &&
          player.q.tq >= 999
        )
          return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "blue",
      },
    },
    33: {
      display() {
        return "click me to discover";
      },
      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "blue",
      },
    },
    34: {
      display() {
        return "click me to discover";
      },
      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "blue",
      },
    },
    35: {
      display() {
        return "click me";
      },
      tooltip:
        "Achievement-DeepSpace req: 10 Advanced telescopes, 10 telescopes, 10 cosmic dust",
      onClick() {
        if (player.c.adt >= 10 && player.c.t >= 10 && player.c.points >= 10) {
          player.c.adt = player.c.adt.sub(10);
          player.c.t = player.c.t.sub(10);
          player.c.points = player.c.points.sub(10);
          setClickableState("c", 35, 1);
        } else return null;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        if (player.c.adt >= 10 && player.c.t >= 10 && player.c.points >= 10)
          return true;
      },
      style: {
        "border-radius": "50px",
        "background-color": "blue",
      },
    },
    41: {
      display() {
        return "click me to discover";
      },
      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "blue",
      },
    },
    42: {
      display() {
        return "click me to discover";
      },
      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "purple",
      },
    },
    43: {
      display() {
        return "click me to discover";
      },
      tooltip: "Cells req: 20 cosmic dust, 500 atoms, 666 telescopes",
      onClick() {
        if (
          player.a.points >= 500 &&
          player.c.t >= 666 &&
          player.c.points >= 20
        ) {
          player.a.points = player.a.points.sub(500);
          player.c.t = player.c.t.sub(666);
          player.c.points = player.c.points.sub(20);
          player.c.cellUnlocked = true;
          setClickableState("c", 43, 1);
        } else return null;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        if (
          player.a.points >= 500 &&
          player.c.t >= 666 &&
          player.c.points >= 20
        )
          return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "indigo",
      },
    },
    44: {
      display() {
        return "click me to discover";
      },
      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "blue",
      },
    },
    45: {
      display() {
        return "click me to discover";
      },
      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "blue",
      },
    },
    51: {
      display() {
        return "click me to discover";
      },
      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "blue",
      },
    },
    52: {
      display() {
        return "click me to discover";
      },
      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "blue",
      },
    },
    53: {
      display() {
        return "click me to discover";
      },
      tooltip:
        "Unlock another atom challenge and another Cosmic Dust upgrade. Req: 400 telescopes, 4 advanced telescopes",
      onClick() {
        if (player.c.t >= 400 && player.c.adt >= 4) {
          player.c.t = player.c.t.sub(400);
          player.c.adt = player.c.adt.sub(4);
          player.c.unlocked4 = new Decimal(1);
          player.c.aChallengeUnlocked = true;
          setClickableState("c", 53, 1);
        } else return null;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        if (player.c.t >= 400 && player.c.adt >= 4) return true;
      },
      style: {
        "border-radius": "37px",
        "background-color": "blue",
      },
    },
    54: {
      display() {
        return "click me to discover";
      },
      tooltip: "Nothing here",
      onClick() {
        return true;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "blue",
      },
    },
    55: {
      display() {
        return "click me to discover";
      },
      tooltip:
        "Super Advanced telescopes req: 1500 telescopes, 15 Advanced telescopes",
      onClick() {
        if (player.c.t >= 1500 && player.c.adt >= 15) {
          player.c.updated = true;
          player.c.t = player.c.t.sub(1500);
          player.c.adt = player.c.adt.sub(15);
          player.c.unlocked5 = new Decimal(1);
          setClickableState("c", 55, 1);
        } else return null;
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
      canClick() {
        if (player.c.t >= 1500 && player.c.adt >= 15) return true;
      },
      style: {
        "border-radius": "0px",
        "background-color": "Dark green",
      },
    },
  },
  upgrades: {
    11: {
      title: "Dusty",
      description: "Passively generate 1% of Quarks",
      cost: new Decimal(3),
    },
    12: {
      title: "Radar technology",
      description:
        "Utilized advanced telescopes to perform a search of the universe. Who knows what you may unlock",
      cost: new Decimal(3),
      currencyDisplayName: "advanced telescopes",
      currencyInternalName: "adt",
      currencyLayer: "c",
      unlocked() {
        return hasChallenge("a", 11);
      },
      effect() {
        player.c.unlocked6 = new Decimal(1);
      },
    },
    13: {
      title: "Clickable grind",
      description: "Obtain 2 telescopes per click",
      cost: new Decimal(9),
    },
    14: {
      title: "Clickable grind 2.0",
      description: "Obtain 4 telescopes per click",
      cost: new Decimal(12),
      unlocked() {
        return player.c.unlocked4.gte(1);
      },
    },
    21: {
      title: "Astronomical gains",
      description: "1.5x particle gain",
      cost: new Decimal(35000),
      unlocked() {
        return hasUpgrade("hm", 37);
      },
    },
    22: {
      title: "Frequent arcs",
      description: "1.5x particle gain",
      cost: new Decimal(60000),
      unlocked() {
        return hasUpgrade("hm", 37);
      },
    },
    23: {
      title: "Diamond Mines",
      description: "1.5x atom gain",
      cost: new Decimal(75000),
      unlocked() {
        return hasUpgrade("hm", 37);
      },
    },
    24: {
      title: "Furious storm",
      description: "1.5x quark gain",
      cost: new Decimal(105000),
      unlocked() {
        return hasUpgrade("hm", 37);
      },
    },
  },
  buyables: {
    11: {
      cost() {
        return new Decimal(100);
      },
      title() {
        return "Advanced Telescope converter";
      },
      display() {
        return "Exchange your telescopes for advanced telescopes";
      },
      canAfford() {
        return player.c.t.gte(this.cost(1));
      },
      unlocked() {
        return hasChallenge("a", 11) || player.c.unlocked6.gte(1);
      },
      buyMax() {
        return true;
      },
      buy() {
        let costPerUnit = this.cost(1);
        let max = new Decimal(1);

        if (this.buyMax()) {
          // calculate how many can be bought
          max = player.c.t.div(costPerUnit).floor();
          if (max.lt(1)) max = new Decimal(1); // buy at least 1
        }

        player.c.t = player.c.t.sub(costPerUnit.mul(max));
        player.c.adt = player.c.adt.add(max);
        setBuyableAmount(
          this.layer,
          this.id,
          getBuyableAmount(this.layer, this.id).add(max),
        );
      },
      tooltip: "Costs 100 telescopes",
    },
    12: {
      cost() {
        return new Decimal(20);
      },
      title() {
        return "Super Advanced Telescope converter";
      },
      display() {
        return "Exchange your advanced telescopes for super advanced telescopes";
      },
      canAfford() {
        return player.c.adt.gte(this.cost(1));
      },
      unlocked() {
        return player.c.updated;
      },
      buyMax() {
        return true;
      },
      buy() {
        let costPerUnit = this.cost(1);
        let max = new Decimal(1);

        if (this.buyMax()) {
          // calculate how many can be bought
          max = player.c.adt.div(costPerUnit).floor();
          if (max.lt(1)) max = new Decimal(1); // buy at least 1
        }

        player.c.adt = player.c.adt.sub(costPerUnit.mul(max));
        player.c.sat = player.c.sat.add(max);
        setBuyableAmount(
          this.layer,
          this.id,
          getBuyableAmount(this.layer, this.id).add(max),
        );
      },
      tooltip: "Costs 20 advanced telescopes",
    },
  },
  infoboxes: {
    lore: {
      title: "Universe charting",
      body() {
        return "Clicking each clickable sacrfices x amount of telescopes, advanced telescopes and cosmic dust and any other resource listed. However, some reveal new stats or other goodies. Clicking a previously bought clickable will NOT add any boosts ";
      },
      unlocked() {
        return hasUpgrade("c", 12);
      },
    },
  },
});
