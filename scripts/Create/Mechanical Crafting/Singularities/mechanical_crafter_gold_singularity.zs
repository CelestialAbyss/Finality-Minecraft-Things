import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("gold_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLAAALLL",
    "LLAAAAALL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LLAAAAALL",
    "LLLAAALLL",
    " LLLLLLL "
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:gold"
   }, "count": 1
  },
  "acceptMirrored": false
}
);