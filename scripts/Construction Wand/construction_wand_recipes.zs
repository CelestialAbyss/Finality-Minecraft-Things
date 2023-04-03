// Infinity Wand recipe
recipes.removeByName("constructionwand:infinity_wand");
craftingTable.addShaped("cre_infinity_wand", <item:constructionwand:infinity_wand>, [
    [<item:minecraft:air>,<item:minecraft:air>,<item:extendedcrafting:ender_star>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>]
]);
mods.extendedcrafting.TableCrafting.addShaped("basic_infinity_wand", 0, <item:constructionwand:infinity_wand>, [
    [<item:minecraft:air>,<item:minecraft:air>,<item:extendedcrafting:ender_star>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>]
]);