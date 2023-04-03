import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("emerald_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLEEELLL",
    "LLEEEEELL",
    "LEEEEEEEL",
    "LEEEEEEEL",
    "LEEEEEEEL",
    "LLEEEEELL",
    "LLLEEELLL",
    " LLLLLLL "
  ],
  "key": {
    "E": {
      "item": "minecraft:emerald_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:emerald"
   }, "count": 1
  },
  "acceptMirrored": false
}
);