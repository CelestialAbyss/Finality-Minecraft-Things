import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("diamond_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLDDDLLL",
    "LLDDDDDLL",
    "LDDDDDDDL",
    "LDDDDDDDL",
    "LDDDDDDDL",
    "LLDDDDDLL",
    "LLLDDDLLL",
    " LLLLLLL "
  ],
  "key": {
    "D": {
      "item": "minecraft:diamond_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:diamond"
   }, "count": 1
  },
  "acceptMirrored": false
}
);