addLayer("OS", {
  startData() {
    return {
      unlocked: false,
      points: new Decimal(1),
      ccells: new Decimal(0),
      fOrgans: new Decimal(0),
      aLifeform: new Decimal(0),
      ccellsUnlocked: false,
      fOrgansUnlocked: false,
      aLifeformunlocked: false,

      sAntenna: new Decimal(0),
    };
  },

  color: "#868592",

  row: "side",

  requires: new Decimal(10),
  tooltip() {
    return "You have 1 Orbital Station";
  },
  type: "none",
  exponent: 0.5,
  tabFormat: {
    Headquarters: {
      content: [
        "blank",
        "blank",
        [
          "display-text",
          "Welcome, enjoy the cosmic spectacles",
          { "font-size": "35px", "font-family": "Times New Roman" },
        ],
        [
          "display-text",
          function () {
            return player[this.layer].sAntenna.gte(1)
              ? "You have " +
                  format(player[this.layer].sAntenna) +
                  " Spatial Antennas"
              : null;
          },
          { "font-size": "20px", "font-family": "Times New Roman" },
        ],
        "blank",
        ["buyable", "14"],
      ],
    },
    Astronomy: {},
    "Orbital Station": {
      content: [
        [
          "display-text",
          "WELCOME TO THE IMPERIAL STATION, OR ORBITAL STATION. STATISTICS: UNKNOWN, GOAL: [redacted], PROCEED WITH CAUTION THROUGHOUT THE UNKNOWN EXPANSE",
          { "font-size": "35px", "font-family": "Times New Roman" },
        ],
        "blank",
        [
          "display-text",
          function () {
            return player[this.layer].ccells.gte(1)
              ? "YOU HAVE " +
                  format(player[this.layer].ccells) +
                  " COSMIC CELLS"
              : null;
          },
          { "font-size": "20px", "font-family": "Times New Roman" },
        ],
        [
          "display-text",
          function () {
            return player[this.layer].fOrgans.gte(1)
              ? "YOU HAVE " +
                  format(player[this.layer].fOrgans) +
                  " FOREIGN ORGANS"
              : null;
          },
          { "font-size": "20px", "font-family": "Times New Roman" },
        ],
        ["buyable", "11"],
        ["buyable", "12"],
      ],
    },
  },
  gainMult() {
    return new Decimal(1);
  },
  gainExp() {
    return new Decimal(1);
  },

  layerShown() {
    return true;
  },
  buyables: {
    11: {
      cost(x) {
        return new Decimal(1e20).mul(
          player[this.layer].ccells.plus(1).mul(100),
        );
      },
      display() {
        return (
          "FIRST ASSIGNMENT: DOCUMENT ALIEN LIFE" +
          " | Cell cost: " +
          format(this.cost()) +
          " | Cosmic Dust: " +
          format(this.cost())
        );
      },

      canAfford() {
        return (
          player.ce.points.gte(this.cost()) && player.c.points.gte(this.cost())
        );
      },
      unlocked() {
        return player[this.layer].ccellsUnlocked;
      },
      buy() {
        player.ce.points = player.ce.points.sub(this.cost());
        player.c.points = player.c.points.sub(this.cost());

        player[this.layer].ccells = player[this.layer].ccells.add(1);

        setBuyableAmount(
          this.layer,
          this.id,
          getBuyableAmount(this.layer, this.id).add(1),
        );
      },
      style: {
        "border-radius": "1000px",
        "border-color": "#000000",
        "font-family": "Times New Roman",
        "font-size": "16px",
        width: "300px",
        height: "300px",
        animation: "move 7s ease-in-out infinite",
      },
    },
    12: {
      cost(x) {
        return new Decimal(100).add(player[this.layer].fOrgans.plus(1));
      },
      display() {
        return (
          "SECOND ASSIGNMENT: COLLECT ORGANIC SAMPLES" +
          " | Cosmic Cell Cost: " +
          format(this.cost())
        );
      },

      canAfford() {
        return player[this.layer].ccells.gte(this.cost());
      },
      unlocked() {
        return player[this.layer].fOrgansUnlocked;
      },
      buy() {
        player[this.layer].ccells = player[this.layer].ccells.sub(this.cost());

        player[this.layer].fOrgans = player[this.layer].fOrgans.add(1);

        setBuyableAmount(
          this.layer,
          this.id,
          getBuyableAmount(this.layer, this.id).add(1),
        );
      },
      style: {
        "border-radius": "1000px",
        "border-color": "#000000",
        "font-family": "Times New Roman",
        "font-size": "16px",
        width: "300px",
        height: "300px",
        animation: "move 5.6s ease-in-out infinite",
      },
    },
    14: {
      cost(x) {
        return new Decimal(100);
      },
      display() {
        return (
          "Convert Super Advanced telescopes into Spatial Antennas" +
          " | SAT cost: " +
          format(this.cost())
        );
      },

      canAfford() {
        return player.c.sat.gte(this.cost());
      },

      buy() {
        player.c.sat = player.c.sat.sub(this.cost());

        player[this.layer].sAntenna = player[this.layer].sAntenna.add(1);

        setBuyableAmount(
          this.layer,
          this.id,
          getBuyableAmount(this.layer, this.id).add(1),
        );
      },
      style: {
        "border-radius": "0px",
        "border-color": "#000000",
        "font-family": "Times New Roman",
        "font-size": "16px",
        width: "200px",
        height: "200px",
      },
    },
  },
});
