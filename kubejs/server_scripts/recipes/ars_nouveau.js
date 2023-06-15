onEvent('recipes', event => {
    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.remove({id: 'ars_nouveau:apprentice_spell_book_upgrade'})
    event.remove({id: 'ars_nouveau:archmage_spell_book_upgrade'})
    event.shapeless('ars_nouveau:novice_spell_book', [
        Item.of('minecraft:book').ignoreNBT(),
        Item.of('twilightforest:steeleaf_shovel').ignoreNBT(),
        Item.of('twilightforest:steeleaf_pickaxe').ignoreNBT(),
        Item.of('twilightforest:steeleaf_axe').ignoreNBT(),
        Item.of('twilightforest:steeleaf_sword').ignoreNBT(),
        'mysticalagriculture:inferium_essence',
        'minecraft:amethyst_shard',
        'create:andesite_alloy',
        'minecraft:golden_carrot']).id('finality:novice_spell_book')
    event.shapeless('ars_nouveau:apprentice_spell_book', [
        'ars_nouveau:novice_spell_book','minecraft:crying_obsidian',
        'create:rose_quartz',
        'create:rose_quartz',
        'create:rose_quartz',
        'extendedcrafting:luminessence_block',
        'extendedcrafting:luminessence_block',
        'create:blaze_cake',
        'create:blaze_cake']).id('finality:apprentice_spell_book_upgrade')
    event.shapeless('ars_nouveau:archmage_spell_book', [
        'ars_nouveau:apprentice_spell_book',
        'extendedcrafting:ender_star',
        'ars_nouveau:wilden_tribute',
        'mysticalagriculture:tertium_essence',
        'mysticalagriculture:tertium_essence',
        'create:precision_mechanism',
        'create:precision_mechanism',
        'create:precision_mechanism',
        'minecraft:totem_of_undying']).id('finality:archmage_spell_book_upgrade')
})