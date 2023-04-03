import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("glowstone_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLGGGLLL",
    "LLGGGGGLL",
    "LGGGGGGGL",
    "LGGGGGGGL",
    "LGGGGGGGL",
    "LLGGGGGLL",
    "LLLGGGLLL",
    " LLLLLLL "
  ],
  "key": {
    "G": {
      "item": "minecraft:glowstone"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:glowstone"
   }, "count": 1
  },
  "acceptMirrored": false
}
);