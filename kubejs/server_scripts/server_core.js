// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.remove({id: 'minecraft:redstone_from_smelting_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_smelting_deepslate_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_blasting_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_blasting_deepslate_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:coarse_dirt'})
    event.remove({output: 'mysticalagriculture:inferium_furnace'})
    event.remove({output: 'mysticalagriculture:prudentium_furnace'})
    event.remove({output: 'mysticalagriculture:tertium_furnace'})
    event.remove({output: 'mysticalagriculture:imperium_furnace'})
    event.remove({output: 'mysticalagriculture:supremium_furnace'})
    event.remove({output: 'projecte:dm_furnace'})
    event.remove({output: 'projecte:rm_furnace'})
    event.remove({output: 'waystones:warp_plate'})
    event.remove({output: 'waystones:attuned_shard'})
    event.remove({output: 'waystones:warp_dust'})
    event.remove({id: 'iceandfire:copper_block_to_ingots'})
    event.remove({id: 'iceandfire:copper_block'})
})

onEvent('recipes', event => {
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tome_of_finality"}'),['#forge:rods/wooden','#forge:rods/wooden']).id('finality:documentation_book')
})