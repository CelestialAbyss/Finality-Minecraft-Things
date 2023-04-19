import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("quartz_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLQQQLLL",
    "LLQQQQQLL",
    "LQQQQQQQL",
    "LQQQQQQQL",
    "LQQQQQQQL",
    "LLQQQQQLL",
    "LLLQQQLLL",
    " LLLLLLL "
  ],
  "key": {
    "Q": {
      "item": "minecraft:quartz_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:quartz"
   }, "count": 1
  },
  "acceptMirrored": false
}
);