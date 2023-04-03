import mods.createtweaker.CrushingRecipe;
<recipetype:create:crushing>.addJsonRecipe("ultimate_nugget", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "extendedcrafting:ultimate_singularity"
    },
  ],
  "results": [
    {
      "item": "extendedcrafting:the_ultimate_nugget",
    },
    {
      "item": "extendedcrafting:the_ultimate_nugget",
      "chance": 0.50
    },
    {
      "item": "extendedcrafting:the_ultimate_nugget",
      "chance": 0.25
    }
  ]
}
);