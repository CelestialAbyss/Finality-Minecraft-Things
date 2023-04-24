import mods.createtweaker.CrushingRecipe;
import mods.create.MechanicalCrafterManager;
recipes.removeByName("minecraft:beacon");
craftingTable.addShaped("minecraft_beacon", <item:minecraft:beacon>, [
    [<tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>],
    [<tag:items:forge:glass/colorless>, <item:extendedcrafting:ender_star>, <tag:items:forge:glass/colorless>],
    [<item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>]
]);
// CuttingManager.addRecipe(name as string, output as Percentaged<IItemStack>, input as IIngredient, duration as int) as void
<recipetype:create:cutting>.addRecipe("black_iron_slate_refined", [(<item:extendedcrafting:black_iron_slate> * 9) % 100], <item:extendedcrafting:black_iron_block>, 250);
// MechanicalCrafterManager.addRecipe(name as string, output as IItemStack, ingredients as IIngredient[][]) as void
<recipetype:create:mechanical_crafting>.addRecipe("create_crystaltine_ingot", <item:extendedcrafting:crystaltine_ingot> * 4, [
    [<item:minecraft:diamond>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:diamond>,], 
    [<item:minecraft:diamond>, <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:nether_star>, <item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:diamond>,], 
    [<item:minecraft:diamond>, <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:nether_star>, <item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:diamond>,],
    [<item:minecraft:diamond>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:diamond>,]
]);
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
