import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("iron_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLFFFLLL",
    "LLFFFFFLL",
    "LFFFFFFFL",
    "LFFFFFFFL",
    "LFFFFFFFL",
    "LLFFFFFLL",
    "LLLFFFLLL",
    " LLLLLLL "
  ],
  "key": {
    "F": {
      "item": "minecraft:iron_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:iron"
   }, "count": 1
  },
  "acceptMirrored": false
}
);