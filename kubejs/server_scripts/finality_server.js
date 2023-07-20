// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

let STONEPLATES = ['stone','polished_blackstone']
let WOODPLATES = ['oak','spruce','birch','jungle','acacia','dark_oak','crimson','warped']

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
    }).id('minecraft:hopper')
	STONEPLATES.forEach(stone => {
		event.stonecutting(`${stone}_pressure_plate`, `${stone}_slab`).id(`minecraft:${stone}_pressure_plate`)
	})
	WOODPLATES.forEach(wood => {
		event.stonecutting(`${wood}_pressure_plate`, `${wood}_slab`).id(`minecraft:${wood}_pressure_plate`)
	})
	STONEPLATES.forEach(stone => {
		event.recipes.create.cutting([`${stone}_pressure_plate`, `${stone}_slab`], `${stone}`).id(`finality:${stone}_pressure_plate`)
	})
	WOODPLATES.forEach(wood => {
		event.recipes.create.cutting([`${wood}_pressure_plate`, `${wood}_slab`], `${wood}_planks`).id(`finality:${wood}_pressure_plate`)
	})
	event.shaped('light_weighted_pressure_plate', [
		'G',
		'R'
	], {
		G: 'create:golden_sheet',
		R: 'redstone'
	}).id('minecraft:light_weighted_pressure_plate')
	event.shaped('heavy_weighted_pressure_plate', [
		'G',
		'R'
	], {
		G: 'create:iron_sheet',
		R: 'redstone'
	}).id('minecraft:heavy_weighted_pressure_plate')
})
/* Work in progress.
onEvent('player.inventory.changed', event => {
    
})
*/ 