addLayer("vo", {
  name: "Volts", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "V", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() {
    return {
      unlocked: false,
      points: new Decimal(0),
      variable: new Decimal(0),
      upgradesBought: new Decimal(0),
    };
  },
  color: "#a00686",
  requires: new Decimal(1e308), // Can be a function that takes requirement increases into account
  resource: "Volts", // Name of prestige currency
  baseResource: "Particles", // Name of resource prestige is based on
  baseAmount() {
    return player.points;
  }, // Get the current amount of baseResource
  type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  doReset(reset) {
    let keep = [];

    if (layers[reset].row > this.row) {
      layerDataReset("vo", keep);
    }
  },
  update() {},
  nodeStyle() {
    if (player.vo.unlocked == true || tmp.vo.canReset == true)
      return {
        "background-image": "radial-gradient(circle, #b4b96c, #a4a70c)",
        animation:
          "flicker 0.7s ease-in-out infinite, rippleMove 2s ease-in-out infinite",
        "text-shadow": "0 0 70px rgb(147, 161, 15)",
        "box-shadow":
          "0 0 2px rgb(207, 218, 60), inset 0 0 0.1px rgb(169, 172, 33)",
        border: "5px solid rgb(67, 68, 8)",
        "font-size": "60px",
        width: "125px",
        height: "125px",
      };
  },
  exponent: 0.5, // Prestige currency exponent
  gainMult() {
    // Calculate the multiplier for main currency from bonuses
    mult = new Decimal(1);

    return mult;
  },
  gainExp() {
    // Calculate the exponent on main currency from bonuses
    return new Decimal(1);
  },

  row: 5, // Row the layer is in on the tree (0 is the first row)
  branches: ["ax", "sm", "nm", "e"],
  hotkeys: [
    {
      key: "Shift + V",
      description: "Shift + V: for Volts",
      onPress() {
        if (canReset(this.layer)) doReset(this.layer);
      },
    },
  ],
  layerShown() {
    return player.ax.unlocked;
  },
});
