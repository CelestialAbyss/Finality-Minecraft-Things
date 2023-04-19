import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("coal_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " CCCCCCC ",
    "CCCCCCCCC",
    "CCCCCCCCC",
    "CCCCCCCCC",
    "CCCCCCCCC",
    "CCCCCCCCC",
    "CCCCCCCCC",
    "CCCCCCCCC",
    " CCCCCCC "
  ],
  "key": {
    "C": {
      "item": "minecraft:coal_block"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:coal"
   }, "count": 1
  },
  "acceptMirrored": false
}
);