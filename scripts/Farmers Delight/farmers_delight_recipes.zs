recipes.removeByName("farmersdelight:skillet");
craftingTable.addShaped("cooking_skillet", <item:farmersdelight:skillet>, [
   [<item:minecraft:air>, <item:create:iron_sheet>, <item:create:iron_sheet>],
   [<item:minecraft:air>, <item:create:iron_sheet>, <item:create:iron_sheet>],
   [<item:minecraft:brick>, <item:minecraft:air>, <item:minecraft:air>]
]);
recipes.removeByName("farmersdelight:cooking_pot");
craftingTable.addShaped("cooking_pot", <item:farmersdelight:cooking_pot>, [
   [<item:minecraft:brick>, <item:minecraft:wooden_shovel>, <item:minecraft:brick>],
   [<item:create:iron_sheet>, <item:minecraft:water_bucket>, <item:create:iron_sheet>],
   [<item:create:iron_sheet>, <item:create:iron_sheet>, <item:create:iron_sheet>]
]);