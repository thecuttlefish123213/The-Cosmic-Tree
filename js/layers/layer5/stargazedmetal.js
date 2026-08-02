addLayer("sm", {
  name: "Stargazed Metal", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "SM", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() {
    return {
      unlocked: false,
      points: new Decimal(0),
      starglass: new Decimal(0),
      starglassCap: new Decimal(5),
      challengeGoal: new Decimal(1e6),
      timer: 0,
      canReset: true,

      starglassFunction() {
        return this.starglass.plus(1).pow(3);
      },
    };
  },
  infoboxes: {
    challenges: {
      title: "Challenge Explanation",
      body() {
        return `There are two challenges, Heaven's Cherubs and Hell's Allstars. Heaven's Cherubs is easy, Hell's Allstars IS HARD!!!. Hell's Allstars
        gives a better reward, but it's not enough to make a major difference in overall progress. The option is up to you on how you want to proceed.
             `;
      },
    },
  },
  color: "#a00686",
  requires: new Decimal(1000000), // Can be a function that takes requirement increases into account
  resource: "Stargazed Metal", // Name of prestige currency
  baseResource: "Nissionite", // Name of resource prestige is based on
  baseAmount() {
    return player.n.points;
  }, // Get the current amount of baseResource
  type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  doReset(reset) {
    let keep = ["canReset"];

    if (layers[reset].row > this.row) {
      layerDataReset("sm", keep);
    }
  },
  update() {
    if (player[this.layer].starglass.gte(player[this.layer].starglassCap)) {
      player[this.layer].starglass = new Decimal(5);
    }

    if (player[this.layer].timer > 0) {
      player[this.layer].timer--;
    }
    if (player[this.layer].timer == 0) {
      setClickableState(this.layer, 11, false);
    }
  },
  nodeStyle: {
    "border-radius": "0px",
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

  row: 4, // Row the layer is in on the tree (0 is the first row)
  branches: ["n", "ax"],
  hotkeys: [
    {
      key: "Ctrl + S",
      description: "Ctrl + S: Stargazed Metal",
      onPress() {
        if (canReset(this.layer)) doReset(this.layer);
      },
    },
  ],
  layerShown() {
    return player.nm.unlocked;
  },
  tabFormat: {
    "Cosmic Corridor": {
      "font-color": "black",
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
            return "You have " + format(player.n.points) + " Nissionite.";
          },
        ],
        [
          "display-text",
          function () {
            return "You have " + format(player.sm.starglass) + " Starglass.";
          },
        ],
        [
          "display-text",
          function () {
            return (
              "Starglass is boosting particles by: " +
              format(player.sm.starglassFunction()) +
              "x"
            );
          },
        ],
        [
          "display-text",
          function () {
            return "Current Starglass cap: " + format(player.sm.starglassCap);
          },
        ],
        "blank",
        "milestones",
        "clickables",
        "upgrades",
        ["infobox", "challenges"],
        "challenges",
      ],
    },
  },
  milestones: {
    0: {
      requirementDescription: "Cosmic Fluctuation",
      effectDescription: "Cosmic Dust no longer resets, 10x Nissionite boost",
      done() {
        return player[this.layer].points.gte(1);
      },
    },
    1: {
      requirementDescription: "2 Stargazed Metal",
      effectDescription:
        "Unlock the magnifyer, which allows you to convert stargazed metal to starglass every minute",
      done() {
        return player[this.layer].points.gte(2);
      },
      onComplete() {
        player[this.layer].canReset = false;
      },
    },
    2: {
      requirementDescription: "5 Starglass",
      effectDescription:
        "Raise Nissionite gain to the 1.1 power, double dimensional point gain",
      done() {
        return player[this.layer].starglass.gte(5);
      },
      unlocked() {
        return player[this.layer].starglass.gte(1);
      },
    },
    3: {
      requirementDescription: "15 Starglass",
      effectDescription:
        "Add 2 to Nissionite gain, add 2 to dimensional point gain",
      done() {
        return player[this.layer].starglass.gte(15);
      },
      unlocked() {
        return player[this.layer].starglass.gte(1);
      },
    },
  },
  clickables: {
    11: {
      title: "Magnifyer",
      display() {
        return "Convert stargazed metal into starglass every minute.";
      },
      unlocked() {
        return hasMilestone("sm", 1);
      },
      canClick() {
        return hasMilestone("sm", 1) && player[this.layer].timer == 0;
      },
      marked() {
        if (getClickableState(this.layer, this.id) == true) {
          return true;
        } else {
          return false;
        }
      },
      onClick() {
        if (player[this.layer].points.gte(1)) {
          setClickableState(this.layer, this.id, true);
          player[this.layer].points = new Decimal(0);
          player[this.layer].starglass = player[this.layer].starglass.add(1);
          player[this.layer].timer = 3600;
        } else {
          return;
        }
      },
      style: {
        width: "200px",
        height: "200px",
        "font-size": "22px",
      },
    },
  },
  challenges: {
    11: {
      name: "Heaven's Cherubs",
      challengeDescription:
        "Apply a softcap to nissionite, every stargazed metal lessens the softcap! ",
      goalDescription: "Obtain 1 Million Nissionite",
      canComplete: function () {
        return player.n.points.gte(1000000);
      },

      completionLimit: 7,
      rewardDisplay() {
        return "Raise Starglass cap";
      },
      onComplete() {
        if (challengeCompletions(this.layer, 11) >= 1) {
          player[this.layer].starglassCap = player[this.layer].starglassCap.mul(
            new Decimal(challengeCompletions(this.layer, 11)).plus(1),
          );
        }
      },
    },
    12: {
      name: "Hell's Allstars",
      challengeDescription:
        "Disable every gain increase to particles(except starglass), every completion raises the goal requirement ",
      goalDescription() {
        return (
          "Obtain: " + format(player[this.layer].challengeGoal) + " Particles"
        );
      },
      canComplete: function () {
        return player.points.gte(player[this.layer].challengeGoal);
      },

      completionLimit: 5,
      rewardDisplay() {
        return "Raise Starglass Cap, once at 5 completions, you get an artifact!";
      },
      onComplete() {
        if (challengeCompletions(this.layer, 12) >= 1) {
          player[this.layer].challengeGoal = player[
            this.layer
          ].challengeGoal.pow(
            new Decimal(challengeCompletions(this.layer, 12)).plus(1),
          );
          player[this.layer].starglassCap = player[this.layer].starglassCap.mul(
            new Decimal(challengeCompletions(this.layer, 12)).plus(2),
          );
        }
      },
    },
  },
});
