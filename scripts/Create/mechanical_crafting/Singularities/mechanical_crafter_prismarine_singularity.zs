import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("prismarine_singularity", {
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
      "item": "minecraft:sea_lantern"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:sea_lantern"
   }, "count": 1
  },
  "acceptMirrored": false
}
);