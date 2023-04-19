// Ars T1 Book
recipes.removeByName("ars_nouveau:novice_spell_book");
craftingTable.addShapeless("novice_spell_book", <item:ars_nouveau:novice_spell_book>, [<item:minecraft:book>, <item:twilightforest:steeleaf_shovel>, <item:twilightforest:steeleaf_pickaxe>, <item:twilightforest:steeleaf_axe>, <item:twilightforest:steeleaf_sword>]);
// Original DM script: 
// craftingTable.addShapeless("novice_spell_book", <item:ars_nouveau:novice_spell_book>, [<item:minecraft:book>, <item:projecte:dm_shovel>, <item:projecte:dm_pick>, <item:projecte:dm_axe>, <item:projecte:dm_sword>]);

// Ars T2 Book 
recipes.removeByName("ars_nouveau:apprentice_spell_book_upgrade");
craftingTable.addShapeless("apprentice_spell_book", <item:ars_nouveau:apprentice_spell_book>, [<item:ars_nouveau:novice_spell_book>, <item:minecraft:crying_obsidian>, <item:create:rose_quartz>, <item:create:rose_quartz>, <item:create:rose_quartz>, <item:extendedcrafting:luminessence_block>, <item:extendedcrafting:luminessence_block>, <item:create:blaze_cake>, <item:create:precision_mechanism>]);

// Ars T3 Book
recipes.removeByName("ars_nouveau:archmage_spell_book_upgrade");
craftingTable.addShapeless("archmage_spell_book_upgrade", <item:ars_nouveau:archmage_spell_book>, [<item:ars_nouveau:apprentice_spell_book>, <item:extendedcrafting:enhanced_ender_catalyst>, <item:ars_nouveau:wilden_tribute>, <item:extendedcrafting:crystaltine_ingot>, <item:extendedcrafting:crystaltine_ingot>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:minecraft:totem_of_undying>]);
