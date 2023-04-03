import mods.create.MechanicalCrafterManager;
// MechanicalCrafterManager.addRecipe(name as string, output as IItemStack, ingredients as IIngredient[][]) as void

<recipetype:create:mechanical_crafting>.addRecipe("create_crystaltine_ingot", <item:extendedcrafting:crystaltine_ingot> * 4, [
    [<item:minecraft:diamond>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:diamond>,], 
    [<item:minecraft:diamond>, <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:nether_star>, <item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:diamond>,], 
    [<item:minecraft:diamond>, <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:nether_star>, <item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:diamond>,],
    [<item:minecraft:diamond>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:diamond>,]
    ]);