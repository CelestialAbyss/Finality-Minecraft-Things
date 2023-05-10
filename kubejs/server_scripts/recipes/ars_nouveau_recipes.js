onEvent('recipes', event => {
    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.remove({id: 'ars_nouveau:apprentice_spell_book_upgrade'})
    event.remove({id: 'ars_nouveau:archmage_spell_book_upgrade'})
    event.shapeless('ars_nouveau:novice_spell_book',['minecraft:book','minecraft:iron_shovel','minecraft:iron_pickaxe','minecraft:iron_axe','minecraft:iron_sword','twilightforest:steeleaf_ingot','blue_skies:charoite','create:andesite_alloy','minecraft:golden_carrot']).id('finality:novice_spell_book')
    event.shapeless('ars_nouveau:apprentice_spell_book',['ars_nouveau:novice_spell_book','minecraft:crying_obsidian','create:rose_quartz','create:rose_quartz','create:rose_quartz','extendedcrafting:luminessence_block','extendedcrafting:luminessence_block','create:blaze_cake','create:blaze_cake']).id('finality:apprentice_spell_book_upgrade')
    event.shapeless('ars_nouveau:archmage_spell_book',['ars_nouveau:apprentice_spell_book','extendedcrafting:enhanced_ender_catalyst','ars_nouveau:wilden_tribute','projecte:dark_matter','projecte:dark_matter','create:precision_mechanism','create:precision_mechanism','create:precision_mechanism','minecraft:totem_of_undying']).id('finality:archmage_spell_book_upgrade')
})