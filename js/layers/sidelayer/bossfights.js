addLayer("BF", {
  startData() {
    return {
      unlocked: true,
      points: new Decimal(1),
      mjolnir: new Decimal(0),
      stormbreaker: new Decimal(0),
      infinityGauntlet: new Decimal(0),
      oCannon: new Decimal(0),
    };
  },
  infoboxes: {
    axioms: {
      title: "Boss Fights",
      body() {
        return `Prepare to fight a boss using weapons you can occasionally find!
             `;
      },
    },
  },
  color: "#201869",

  row: "side",

  requires: new Decimal(10),
  tooltip() {
    return "Come fight some bosses!";
  },
  type: "none",
  exponent: 0.5,
  update() {
    if (getGridData("art", 403) == 2)
      player[this.layer].oCannon = new Decimal(1);
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
  tabFormat: {
    "Boss Fighting": {
      content: [
        ["infobox", "axioms"],
        [
          "raw-html",
          `<div class='horizontalBox' style='width: 600px; height: 500px; border: 2px solid white; box-sizing: border-box; background-color: black; '><br><br>
            
           </div>`,
        ],
      ],
    },
    Weapons: {
      content: [
        [
          "display-text",
          "Weapons will appear and be equippable as you unlock them",
          { "font-size": "20px" },
        ],
        "blank",
        [
          "display-text",
          () => `Currently equipped: ` + player.equipped,
          { "font-size": "35px" },
        ],
        "blank",
        [
          "row",
          [
            [
              "display-text",
              "Wood-Stick",
              {
                "font-size": "65px",
                "background-image":
                  "linear-gradient(90deg, #665226 0%, rgb(94, 68, 21) 50%, rgb(116, 96, 60) 100%)",
                border: "3px ridge black",
                "background-size": "700px 100px",
              },
            ],
            "blank",
            [
              "raw-html",
              `
              <button id='EquipButton' style='width: 100px; height: 100px;' onclick="weaponsFunction(this)" data-answer="Wood Stick">(Un)Equip!</button>`,
            ],
            "blank",
            [
              "display-text",
              "dmg: 1<br> cooldown: 2 sec<br> crit chance: 0%<br> armor: none",
              { "font-size": "20px" },
            ],
          ],
        ],
        function () {
          return player.ct.blackKnife.gte(1)
            ? [
                "row",
                [
                  [
                    "display-text",
                    "Black Knife",
                    {
                      "font-size": "65px",
                      "background-image":
                        "linear-gradient(90deg, #24211d 0%, rgb(44, 36, 22) 50%, rgb(49, 37, 15) 100%)",
                      border: "3px ridge black",
                      "background-size": "700px 100px",
                    },
                  ],
                  "blank",
                  [
                    "raw-html",
                    `
              <button id='EquipButton2' style='width: 100px; height: 100px;' onclick="weaponsFunction(this)" data-answer: "Wood Stick">(Un)Equip!</button>`,
                  ],
                  "blank",
                  [
                    "display-text",
                    "dmg: 66<br> cooldown: 7 sec<br> crit chance: 15%<br> crit damage: 250<br> armor: +20HP",
                    { "font-size": "20px" },
                  ],
                ],
              ]
            : null;
        },
        function () {
          return player.BF.oCannon.gte(1)
            ? [
                "row",
                [
                  [
                    "display-text",
                    "Orbital Cannon",
                    {
                      "font-size": "65px",
                      "background-image":
                        "linear-gradient(90deg, #c9c2ba 0%, rgb(226, 207, 175) 50%, rgb(151, 143, 127) 100%)",
                      border: "3px ridge black",
                      "background-size": "700px 100px",
                    },
                  ],
                  "blank",
                  [
                    "raw-html",
                    `
              <button id='EquipButton3' style='width: 100px; height: 100px;' onclick="weaponsFunction(this)" data-answer: "Orbital Cannon">(Un)Equip!</button>`,
                  ],
                  "blank",
                  [
                    "display-text",
                    "dmg: 500<br> cooldown: 90 sec<br> crit chance: 0<br> crit damage: N/A<br> armor: +50HP",
                    { "font-size": "20px" },
                  ],
                ],
              ]
            : null;
        },
      ],
    },
  },
});
