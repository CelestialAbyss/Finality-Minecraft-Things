// A few things I noticed while looking through the JSON recipe, there were multiple instances of minecraft:copper_nugget even though that does not exist.
// Create crushed ore also does not exist.
let C = (id) => `create:${id}`
let CS = (id) => `create_sa:${id}`
let MYST = (id) => `mysticalagriculture:${id}`
let MC = (id) => `minecraft:${id}`
onEvent('recipes', event => {
    event.remove({id: 'create_sa:hydraulic_engine_recipe'})
    event.remove({id: 'create_sa:heat_engine_recipe'})
    event.remove({id: 'create_sa:steam_engine_recipe'})
    event.remove({id: 'create_sa:book_and_quill_haunting'})
    event.recipes.createSequencedAssembly([
        Item.of(CS('heat_engine')).withChance(180.0),
        Item.of(C('copper_sheet')).withChance(8.0),
        Item.of(C('andesite_alloy')).withChance(8.0),
        Item.of(C('cogwheel')).withChance(5.0),
        Item.of(C('shaft')).withChance(2.0),
        Item.of(C('crushed_raw_zinc')).withChance(2.0),
        Item.of(C('copper_nugget')).withChance(2.0),
        MC('iron_ingot'),
        MC('compass')
    ], C('andesite_alloy'), [
        event.recipes.createDeploying([CS('incomplete_heat_engine')], [CS('incomplete_heat_engine'), C('cogwheel')]),
        event.recipes.createDeploying([CS('incomplete_heat_engine')], [CS('incomplete_heat_engine'), C('large_cogwheel')]),
        event.recipes.createDeploying([CS('incomplete_heat_engine')], [CS('incomplete_heat_engine'), C('zinc_nugget')]),
        event.recipes.createDeploying([CS('incomplete_heat_engine')], [CS('incomplete_heat_engine'), C('copper_nugget')]),
    ]).transitionalItem(CS('incomplete_heat_engine')).loops(3).id('finality:create_sa/heat_engine')
    event.recipes.createSequencedAssembly([
        Item.of(CS('hydraulic_engine')).withChance(120.0),
        Item.of(C('copper_sheet')).withChance(8.0),
        Item.of(C('crushed_raw_copper')).withChance(2.0),
        Item.of(C('copper_nugget')).withChance(2.0)
    ], C('copper_sheet'), [
        event.recipes.createFilling([CS('incomplete_hydraulic_engine')], [CS('incomplete_hydraulic_engine'), Fluid.of(MC('water'), 250)]),
        event.recipes.createPressing([CS('incomplete_hydraulic_engine')], [CS('incomplete_hydraulic_engine')]),
        event.recipes.createPressing([CS('incomplete_hydraulic_engine')], [CS('incomplete_hydraulic_engine')])
    ]).transitionalItem(CS('incomplete_hydraulic_engine')).loops(3).id('finality:create_sa/hydraulic_engine')
    event.recipes.createSequencedAssembly([
        Item.of(CS('steam_engine')).withChance(180.0),
        Item.of(C('brass_sheet')).withChance(8.0),
        Item.of(C('andesite_alloy')).withChance(8.0),
        Item.of(C('cogwheel')).withChance(5.0),
        Item.of(C('shaft')).withChance(2.0),
        Item.of(MYST('brass_essence')).withChance(2.0),
        Item.of(C('brass_nugget')).withChance(2.0),
        MC('iron_ingot'),
        MC('compass')
    ], C('brass_sheet'), [
        event.recipes.createDeploying([CS('incomplete_steam_engine')], [CS('incomplete_steam_engine'), C('cogwheel')]),
        event.recipes.createDeploying([CS('incomplete_steam_engine')], [CS('incomplete_steam_engine'), C('large_cogwheel')]),
        event.recipes.createDeploying([CS('incomplete_steam_engine')], [CS('incomplete_steam_engine'), C('propeller')]),
        event.recipes.createDeploying([CS('incomplete_steam_engine')], [CS('incomplete_steam_engine'), C('andesite_alloy')])
    ]).transitionalItem(CS('incomplete_steam_engine')).loops(3).id('finality:create_sa/hydraulic_engine')
})