import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("rose_quartz_singularity", {
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
      "item": "create:polished_rose_quartz"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:rose_quartz"
   }, "count": 1
  },
  "acceptMirrored": false
}
);