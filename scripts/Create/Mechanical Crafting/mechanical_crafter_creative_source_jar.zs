import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("creative_source_jar", {
  "type": "create:mechanical_crafting",
  "pattern": [
    "AAAAAAAAA",
    "LSSSSSSSL",
    "LSSSSSSSL",
    "LSSUUUSSL",
    "LSSUUUSSL",
    "LSSUUUSSL",
    "LSSSSSSSL",
    "LSSSSSSSL",
    "AAAAAAAAA"
  ],
  "key": {
    "S": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:source_gem"
    }
  },
    "U": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "L": {
      "tag": "forge:glass"
    },
    "A":{
        "item": "ars_nouveau:archwood_slab"
    }
  },
"result": {
    "item": "ars_nouveau:creative_source_jar",
    "count": 1
  },
  "acceptMirrored": true
}
);