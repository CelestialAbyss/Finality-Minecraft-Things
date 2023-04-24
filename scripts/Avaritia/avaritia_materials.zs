// Crafting Tables
craftingTable.addShaped("av_compressed_crafting_table", <item:avaritia:compressed_crafting_table>, [
    [<item:minecraft:crafting_table>, <item:minecraft:crafting_table>, <item:minecraft:crafting_table>],
    [<item:minecraft:crafting_table>, <item:minecraft:crafting_table>, <item:minecraft:crafting_table>],
    [<item:minecraft:crafting_table>, <item:minecraft:crafting_table>, <item:minecraft:crafting_table>]
]);
craftingTable.addShaped("av_double_compressed_crafting_table", <item:avaritia:double_compressed_crafting_table>, [
    [<item:avaritia:compressed_crafting_table>, <item:avaritia:compressed_crafting_table>, <item:avaritia:compressed_crafting_table>],
    [<item:avaritia:compressed_crafting_table>, <item:avaritia:compressed_crafting_table>, <item:avaritia:compressed_crafting_table>],
    [<item:avaritia:compressed_crafting_table>, <item:avaritia:compressed_crafting_table>, <item:avaritia:compressed_crafting_table>]
]);
craftingTable.addShaped("av_extreme_crafting_table", <item:avaritia:extreme_crafting_table>, [
    [<item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>],
    [<item:avaritia:crystal_matrix_ingot>, <item:avaritia:double_compressed_crafting_table>, <item:avaritia:crystal_matrix_ingot>],
    [<item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>]
]);
<item:avaritia:extreme_crafting_table>.modifyTooltip((item, tooltip, flags) => {
    tooltip.insert(1, "§bOnce used for crafting, its power was taken away by the Creator.");
    tooltip.insert(2, "§3Can only be used as a large chest or an extremely large 3x3 Crafting Table.");
});
// Record Fragment
craftingTable.addShapeless("extended_record_fragment", <item:avaritia:record_fragment> * 8, [<tag:items:minecraft:music_discs>]);
// Crystal Matrix Recipes
craftingTable.addShaped("extended_diamond_lattice", <item:avaritia:diamond_lattice>, [
    [<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:air>],
    [<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>]
]);
// crystal ingot
craftingTable.addShaped("ext_crystal_matrix_ingot", <item:avaritia:crystal_matrix_ingot>, [
    [<item:avaritia:diamond_lattice>, <item:minecraft:nether_star>, <item:avaritia:diamond_lattice>],
    [<item:avaritia:diamond_lattice>, <item:minecraft:nether_star>, <item:avaritia:diamond_lattice>]
]);
// cyrstal matrix block
craftingTable.addShaped("ext_crystal_matrix_block", <item:avaritia:crystal_matrix_block>, [
    [<item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>],
    [<item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>],
    [<item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>]
]);
craftingTable.addShapeless("crystal_matrix_block_uncrafting", <item:avaritia:crystal_matrix_ingot> * 9, [
	<item:avaritia:crystal_matrix_block>
]);
// Neutronium Recipes
// to get neutron pile
<recipetype:create:crushing>.addRecipe("pile_of_neutrons", [<item:avaritia:neutron_pile>, <item:avaritia:neutron_pile> % 25, <item:create:experience_nugget> % 25], <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:coal"}), 500);
// to get neutron nugget
<recipetype:create:crushing>.addRecipe("neutron_nugget", [<item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget> % 25, <item:create:experience_nugget> % 25], <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:copper"}), 500);
// neutron nugget 
craftingTable.addShaped("extended_neutron_nugget", <item:avaritia:neutron_nugget>, [
  [<item:avaritia:neutron_pile>, <item:avaritia:neutron_pile>, <item:avaritia:neutron_pile>],
  [<item:avaritia:neutron_pile>, <item:avaritia:neutron_pile>, <item:avaritia:neutron_pile>],
  [<item:avaritia:neutron_pile>, <item:avaritia:neutron_pile>, <item:avaritia:neutron_pile>]
]);
// neutronium ingot
craftingTable.addShaped("extended_neutronium_ingot", <item:avaritia:neutronium_ingot>, [
  [<item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>],
  [<item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>],
  [<item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>]
]);
// neutronium block
craftingTable.addShaped("extended_neutronium_block", <item:avaritia:neutronium_block>, [
  [<item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>]
]);
craftingTable.addShapeless("neutronium_block_uncrafting", <item:avaritia:neutronium_ingot> * 9, [
	<item:avaritia:neutronium_block>
]);
craftingTable.addShapeless("neutronium_ingot_uncrafting", <item:avaritia:neutron_nugget> * 9, [
	<item:avaritia:neutronium_ingot>
]);
// Infinity Recipes
<recipetype:create:compacting>.addRecipe("compacting_infinity_catalyst", <constant:create:heat_condition:none>, [<item:avaritia:infinity_catalyst> % 100], [<item:extendedcrafting:ultimate_singularity> * 1, <item:avaritia:record_fragment>]);
mods.extendedcrafting.TableCrafting.addShaped("extended_infinity_ingot", <item:avaritia:infinity_ingot>, [
  [<item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:infinity_catalyst>, <item:avaritia:infinity_catalyst>, <item:avaritia:crystal_matrix_ingot>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>]
]);
craftingTable.addShaped("extended_infinity_block", <item:avaritia:infinity_block>, [
  [<item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>],
  [<item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>],
  [<item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>, <item:avaritia:infinity_ingot>],
]);
craftingTable.addShapeless("infinity_block_uncrafting", <item:avaritia:infinity_ingot> * 9, [
	<item:avaritia:infinity_block>
]);
// ExtendedCrafting Conversion
<recipetype:create:compacting>.addRecipe("the_ultimate_block_conversion", <constant:create:heat_condition:none>, [<item:extendedcrafting:the_ultimate_block> * 9], [<item:avaritia:infinity_block> * 9]);
// Archived JSON recipes below
/*<recipetype:create:compacting>.addJsonRecipe("the_ultimate_block_conversion", {
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "avaritia:infinity_block"
    },
    {
      "item": "avaritia:infinity_block"
    },
    {
      "item": "avaritia:infinity_block"
    },
    {
      "item": "avaritia:infinity_block"
    },
    {
      "item": "avaritia:infinity_block"
    },
    {
      "item": "avaritia:infinity_block"
    },
    {
      "item": "avaritia:infinity_block"
    },
    {
      "item": "avaritia:infinity_block"
    },
    {
      "item": "avaritia:infinity_block"
    }
  ],
  "results": [
    {
      "item": "extendedcrafting:the_ultimate_block",
      "count": 9,
    }
  ]
}
);*/
/*<recipetype:create:crushing>.addJsonRecipe("pile_of_neutrons", {
  "type": "create:crushing",
  "ingredients": [
    {
	"type": "forge:nbt",
      "item": "extendedcrafting:singularity",
	"nbt": {
		"Id": "extendedcrafting:coal"
    }
  }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": "avaritia:neutron_pile"
    },
    {
      "chance": 0.25,
      "item": "avaritia:neutron_pile"
    },
    {
      "chance": 0.25,
      "item": "create:experience_nugget"
    },
  ]
});*/
/*<recipetype:create:crushing>.addJsonRecipe("neutron_nugget", {
  "type": "create:crushing",
  "ingredients": [
    {
	"type": "forge:nbt",
      "item": "extendedcrafting:singularity",
	"nbt": {
		"Id": "extendedcrafting:copper"
    }
  }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": "avaritia:neutron_nugget"
    },
    {
      "chance": 0.25,
      "item": "avaritia:neutron_nugget"
    },
    {
      "chance": 0.25,
      "item": "create:experience_nugget"
    },
  ]
});*/
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