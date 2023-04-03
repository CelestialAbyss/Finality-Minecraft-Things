import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("source_gem_singularity", {
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
      "item": "ars_nouveau:source_gem_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:source_gem"
   }, "count": 1
  },
  "acceptMirrored": false
}
);