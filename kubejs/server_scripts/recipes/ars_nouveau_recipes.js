onEvent('recipes', event => {
    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.remove({id: 'ars_nouveau:apprentice_spell_book_upgrade'})
    event.remove({id: 'ars_nouveau:archmage_spell_book_upgrade'})
    event.shapeless('ars_nouveau:novice_spell_book',['minecraft:book','twilightforest:steeleaf_shovel','twilightforest:steeleaf_pickaxe','twilightforest:steeleaf_axe','twilightforest:steeleaf_sword']).id('finality:novice_spell_book')
    event.shapeless('ars_nouveau:apprentice_spell_book',['ars_nouveau:novice_spell_book','minecraft:crying_obsidian','create:rose_quartz','create:rose_quartz','create:rose_quartz','extendedcrafting:luminessence_block','extendedcrafting:luminessence_block','create:blaze_cake','create:precision_mechanism']).id('finality:apprentice_spell_book_upgrade')
    event.shapeless('ars_nouveau:archmage_spell_book',['ars_nouveau:apprentice_spell_book','extendedcrafting:enhanced_ender_catalyst','ars_nouveau:wilden_tribute','extendedcrafting:crystaltine_ingot','extendedcrafting:crystaltine_ingot','projecte:dark_matter','projecte:dark_matter','projecte:dark_matter','minecraft:totem_of_undying']).id('finality:archmage_spell_book_upgrade')
})