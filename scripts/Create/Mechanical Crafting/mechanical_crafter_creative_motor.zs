import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("creative_motor", {
  "type": "create:mechanical_crafting",
  "pattern": [
    "BBBBBBBB ",
    "BLOOOOOL ",
    "LLOCBBBB ",
    "RLOAUPEEE",
    "LLOCBBBB ",
    "BLOOOOOL ",
    "BBBBBBBB ",
    "  EEEEE  "
  ],
  "key": {
    "O": {
      "item": "minecraft:obsidian"
    },
    "L": {
      "item": "create:sturdy_sheet"
    },
    "U": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "B": {
      "item": "extendedcrafting:the_ultimate_block"
    },  
    "P": {
      "item": "create:precision_mechanism"
    },
    "C": {
      "item": "extendedcrafting:the_ultimate_component"
    },
    "A": {
      "item": "extendedcrafting:the_ultimate_catalyst"
    },
    "E": {
      "item": "create:andesite_alloy"
    },
    "R": {
      "item": "create:rotation_speed_controller"
    },
  },
"result": {
    "item": "create:creative_motor",
    "count": 1
  },
  "acceptMirrored": true
}
);