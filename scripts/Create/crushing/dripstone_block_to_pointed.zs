import mods.createtweaker.CrushingRecipe;
<recipetype:create:crushing>.addJsonRecipe("pointed_dripstone", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:dripstone_block"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "count": 4,
      "item": "minecraft:pointed_dripstone"
    },
    {
      "chance": 0.5,
      "item": "minecraft:pointed_dripstone"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
}
);