recipes.removeByModid("avaritia");
<recipetype:create:compacting>.addRecipe("compacting_time_catalyst", <constant:create:heat_condition:none>, [<item:avaritia:infinity_catalyst> % 100], [<item:extendedcrafting:ultimate_singularity> * 1, <item:avaritia:record_fragment>]);
mods.extendedcrafting.TableCrafting.addShaped("extended_infinity_ingot", <item:avaritia:infinity_ingot>, [
  [<item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>]
]);
mods.extendedcrafting.TableCrafting.addShaped("extended_infinity_block", <item:avaritia:infinity_block>, [
  [<item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>],
  [<item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>],
  [<item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>],
]);

// Archived recipes below
/*<recipetype:create:compacting>.addJsonRecipe("infinity_ingot", {
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "extendedcrafting:the_ultimate_block"
    },
    {
      "item": "extendedcrafting:the_ultimate_block"
    },
    {
      "item": "extendedcrafting:the_ultimate_block"
    },
    {
      "item": "extendedcrafting:the_ultimate_block"
    },
    {
      "item": "extendedcrafting:the_ultimate_block"
    },
    {
      "item": "extendedcrafting:the_ultimate_block"
    },
    {
      "item": "extendedcrafting:the_ultimate_block"
    },
    {
      "item": "extendedcrafting:the_ultimate_block"
    },
    {
      "item": "extendedcrafting:the_ultimate_block"
    }
  ],
  "results": [
    {
      "item": "avaritia:infinity_ingot"
    }
  ]
}
);
*/

/*import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("infinity_catalyst", {
  "type": "create:mechanical_crafting",
  "pattern": [
    "TOQRP",
    "CLDEH",
    "FUZSG"
  ],
  "key": {
    "C": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:coal"
    }
  },
    "L": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:lapis_lazuli"
    }
  },
    "T": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:gunpowder"
    }
  },
    "O": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:glowstone"
    }
  },
    "Q": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:quartz"
    }
  },
    "R": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:redstone"
    }
  },
    "P": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:rose_quartz"
    }
  },
    "D": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:diamond"
    }
  },
    "E": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:emerald"
    }
  },
    "F": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:iron"
    }
  },
    "U": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:copper"
    }
  },
    "Z": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:zinc"
    }
  },
    "S": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:brass"
    }
  },
    "G": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:gold"
    }
  },
    "H": {
    "item": "create:precision_mechanism",
    }
  },
"result": {
    "item": "avaritia:infinity_catalyst",
    "count": 1
  },
  "acceptMirrored": true
}
);
*/