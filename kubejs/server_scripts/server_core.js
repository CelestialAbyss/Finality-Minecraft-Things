// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tome_of_finality"}'), [
        '#forge:rods/wooden',
        '#forge:rods/wooden'
    ]).id('finality:documentation_book')
    event.remove({id: 'minecraft:redstone_from_smelting_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_smelting_deepslate_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_blasting_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_blasting_deepslate_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:coarse_dirt'})
    event.remove({output: 'waystones:warp_plate'})
    event.remove({output: 'waystones:attuned_shard'})
    event.remove({output: 'waystones:warp_dust'})
    event.remove({id: 'iceandfire:copper_block_to_ingots'})
    event.remove({id: 'iceandfire:copper_block'})
    event.remove({id: 'minecraft:bucket'})
    event.remove({id: 'minecraft:clock'})
    event.remove({id: 'minecraft:compass'})
    event.remove({id: 'minecraft:hopper'})
    event.shaped('minecraft:bucket',[
        'F F',
        ' F '
    ],{
        F: 'create:iron_sheet'
    }).id('finality:bucket')
    event.shaped('minecraft:clock',[
        ' G ',
        'GMG',
        ' G '
    ],{
        G: 'create:golden_sheet',
        M: 'create:precision_mechanism'
    }).id('finality:mechanical_clock')
    event.shaped('minecraft:compass',[
        ' F ',
        'FRF',
        ' F '
    ],{
        F: 'create:iron_sheet',
        R: 'minecraft:redstone'
    }).id('finality:compass')
    event.shaped('minecraft:hopper',[
        'F F',
        'FCF',
        ' F '
    ],{
        F: 'create:iron_sheet',
        C: '#forge:chests/wooden'
    }).id('finality:hopper')
})
/* Work in progress.
onEvent('player.inventory.changed', event => {
    
})
*/ 