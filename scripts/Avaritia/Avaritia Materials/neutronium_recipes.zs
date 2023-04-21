import mods.createtweaker.CrushingRecipe;
recipes.removeByModid("avaritia");
// pile
<recipetype:create:crushing>.addJsonRecipe("pile_of_neutrons", {
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
}
);
// nugget
<recipetype:create:crushing>.addJsonRecipe("neutron_nugget", {
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
}
);
// ingot
craftingTable.addShaped("extended_neutronium_ingot", <item:avaritia:neutronium_ingot>, [
  [<item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>],
  [<item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>],
  [<item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>, <item:avaritia:neutron_nugget>]
]);
// block
craftingTable.addShaped("extended_neutronium_block", <item:avaritia:neutronium_block>, [
  [<item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>],
  [<item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>, <item:avaritia:neutronium_ingot>]
]);