import mods.createtweaker.CrushingRecipe;
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