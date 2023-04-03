import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("creative_crate", {
  "type": "create:mechanical_crafting",
  "pattern": [
    "BBBBBBBBB",
    "BLLLLLLLB",
    "BLOOOOOLB",
    "BLOUUUOLB",
    "BLOUUUOLB",
    "BLOUUUOLB",
    "BLOOOOOLB",
    "BLLLLLLLB",
    "BBBBBBBBB"
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
  },
"result": {
    "item": "create:creative_crate",
    "count": 1
  },
  "acceptMirrored": true
}
);