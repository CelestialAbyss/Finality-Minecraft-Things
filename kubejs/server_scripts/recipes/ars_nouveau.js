let MC = (id) => `minecraft:${id}`
let C = (id) => `create:${id}`
let EXT = (id) => `extendedcrafting:${id}`
let MYST = (id) => `mysticalagriculture:${id}`
let ARS = (id) => `ars_nouveau:${id}`
let TWF = (id) => `twilightforest:${id}`
onEvent('recipes', event => {
    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.remove({id: 'ars_nouveau:apprentice_spell_book_upgrade'})
    event.remove({id: 'ars_nouveau:archmage_spell_book_upgrade'})
    event.shapeless(ARS('novice_spell_book'), [
        Item.of(MC('book')).ignoreNBT(),
        Item.of(TWF('steeleaf_shovel')).ignoreNBT(),
        Item.of(TWF('steeleaf_pickaxe')).ignoreNBT(),
        Item.of(TWF('steeleaf_axe')).ignoreNBT(),
        Item.of(TWF('steeleaf_sword')).ignoreNBT(),
        MYST('inferium_essence'),
        MC('amethyst_shard'),
        C('andesite_alloy'),
        MC('golden_carrot')
    ]).id('finality:novice_spell_book')
    event.shapeless(ARS('apprentice_spell_book'), [
        ARS('novice_spell_book'),
        MC('crying_obsidian'),
        C('rose_quartz'),
        C('rose_quartz'),
        C('rose_quartz'),
        EXT('luminessence_block'),
        EXT('luminessence_block'),
        C('blaze_cake'),
        C('blaze_cake')
    ]).id('finality:apprentice_spell_book_upgrade')
    event.shapeless(ARS('archmage_spell_book'), [
        ARS('apprentice_spell_book'),
        EXT('ender_star'),
        ARS('wilden_tribute'),
        MYST('tertium_essence'),
        MYST('tertium_essence'),
        C('precision_mechanism'),
        C('precision_mechanism'),
        C('precision_mechanism'),
        MC('totem_of_undying')
    ]).id('finality:archmage_spell_book_upgrade')
})