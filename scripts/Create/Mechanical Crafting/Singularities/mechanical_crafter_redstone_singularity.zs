import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("redstone_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLRRRLLL",
    "LLRRRRRLL",
    "LRRRRRRRL",
    "LRRRRRRRL",
    "LRRRRRRRL",
    "LLRRRRRLL",
    "LLLRRRLLL",
    " LLLLLLL "
  ],
  "key": {
    "R": {
      "item": "minecraft:redstone_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:redstone"
   }, "count": 1
  },
  "acceptMirrored": false
}
);