addLayer("bf", {
  startData() {
    return {
      unlocked: true,
      points: new Decimal(1),
    };
  },

  color: "#201869",

  row: "side",

  requires: new Decimal(10),
  tooltip() {
    return "Come fight some bosses!";
  },
  type: "none",
  exponent: 0.5,

  gainMult() {
    return new Decimal(1);
  },
  gainExp() {
    return new Decimal(1);
  },

  layerShown() {
    return true;
  },
});
