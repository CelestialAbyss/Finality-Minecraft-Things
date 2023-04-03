import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("brass_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLBBBLLL",
    "LLBBBBBLL",
    "LBBBBBBBL",
    "LBBBBBBBL",
    "LBBBBBBBL",
    "LLBBBBBLL",
    "LLLBBBLLL",
    " LLLLLLL "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:brass"
   }, "count": 1
  },
  "acceptMirrored": false
}
);

/* Old recipe
import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("brass_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLBBBLLL",
    "LLBBBBBLL",
    "LBBUZUBBL",
    "LBBZMZBBL",
    "LBBUZUBBL",
    "LLBBBBBLL",
    "LLLBBBLLL",
    " LLLLLLL "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
    "Z": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:zinc"
      }
    },
    "U": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:copper"
      }
    },
    "M": {
      "item": "create:precision_mechanism"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:brass"
   }, "count": 1
  },
  "acceptMirrored": false
}
);
*/