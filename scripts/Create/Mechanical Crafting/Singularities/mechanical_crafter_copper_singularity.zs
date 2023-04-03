import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("copper_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLCCCLLL",
    "LLCCCCCLL",
    "LCCCCCCCL",
    "LCCCCCCCL",
    "LCCCCCCCL",
    "LLCCCCCLL",
    "LLLCCCLLL",
    " LLLLLLL "
  ],
  "key": {
    "C": {
      "item": "minecraft:copper_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:copper"
   }, "count": 1
  },
  "acceptMirrored": false
}
);