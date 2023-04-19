import mods.createtweaker.CrushingRecipe;
<recipetype:create:crushing>.addJsonRecipe("copper_nugget", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:basalt"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": "create:copper_nugget"
    },
    {
      "chance": 0.1,
      "item": "minecraft:gunpowder"
    },
  ]
}
);