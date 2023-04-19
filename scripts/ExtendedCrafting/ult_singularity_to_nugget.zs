import mods.createtweaker.CrushingRecipe;
// Forgot to add processing time ;-;
<recipetype:create:crushing>.addRecipe("ultimate_nugget", [<item:extendedcrafting:the_ultimate_nugget>, <item:extendedcrafting:the_ultimate_nugget> % 25], <item:extendedcrafting:ultimate_singularity>, 1200);

/* Legacy JSON
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
*/