import mods.createtweaker.CrushingRecipe;
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