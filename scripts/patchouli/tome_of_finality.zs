craftingTable.addShapeless("tome_of_finality", <item:patchouli:guide_book>.withTag({"patchouli:book": "patchouli:tome_of_finality"}), [<item:minecraft:stick>, <item:minecraft:stick>]);
<item:patchouli:guide_book>.withTag({"patchouli:book": "patchouli:tome_of_finality"}).modifyTooltip((item, tooltip, flags) => {
    tooltip.insert(1, "§dHi! Please craft this book, it's important. - CelestialAbyss (Modpack Author)");
});