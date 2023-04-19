import mods.create.MixingManager;
//Emerald (nether quartz, black iron, glass,)
<recipetype:create:mixing>.addRecipe("renewable_emerald", <constant:create:heat_condition:superheated>, [<item:minecraft:emerald> % 100], [<item:minecraft:quartz>, <item:minecraft:glass>, (<item:minecraft:iron_nugget> * 3)], [<fluid:minecraft:lava> * 250], 200);