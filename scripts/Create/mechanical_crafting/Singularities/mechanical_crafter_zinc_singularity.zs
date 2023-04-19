import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("zinc_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLZZZLLL",
    "LLZZZZZLL",
    "LZZZZZZZL",
    "LZZZZZZZL",
    "LZZZZZZZL",
    "LLZZZZZLL",
    "LLLZZZLLL",
    " LLLLLLL "
  ],
  "key": {
    "Z": {
      "item": "create:zinc_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:zinc"
   }, "count": 1
  },
  "acceptMirrored": false
}
);