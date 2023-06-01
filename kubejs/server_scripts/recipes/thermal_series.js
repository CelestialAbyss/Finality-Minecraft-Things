// requires kubejs create and thermal foundation, cultivation, dynamics, expansion, innovation and integration
onEvent('recipes', event => {
    // rubber acquisition
    event.remove({id: 'thermal:rubber_from_vine'})
    event.remove({id: 'thermal:rubber_from_dandelion'})
    event.recipes.createMixing('thermal:rubber', [Item.of('9x minecraft:vine'), Fluid.of('minecraft:water', 1000)]).id('finality:vine_rubber')
    // basics
    event.remove({id: 'thermal:machine_frame'})
    event.recipes.createMechanicalCrafting('thermal:machine_frame', [
        'ISGSI',
        'ST TS',
        'G   G',
        'ST TS',
        'ISGSI'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'create:iron_sheet',
        G: '#forge:glass',
        T: 'thermal:tin_gear'
    }).id('finality:thermal_machine_frame')

    // fluid related
    event.remove({id: 'thermal:fluid_cell_frame'})
    event.recipes.createMechanicalCrafting('thermal:fluid_cell_frame', [
        'BSGSB',
        'SCFCS',
        'GFFFG',
        'SCFCS',
        'BSGSB'
    ], {
        B: '#forge:ingots/bronze',
        G: '#forge:glass',
        F: 'create:fluid_tank',
        S: 'create:iron_sheet',
        C: 'thermal:iron_gear'
    }).id('finality:thermal_fluid_cell_frame')
    event.remove({id: 'thermal:fluid_cell'})
    event.recipes.createMechanicalCrafting('thermal:fluid_cell', [
        'RIHIR',
        'IGHGI',
        'HHFHH',
        'IGHGI',
        'RCECR'
    ], {
       R: 'thermal:cured_rubber',
       I: 'create:iron_sheet',
       H: '#thermal:glass/hardened',
       E: 'thermal:redstone_servo',
       F: 'thermal:fluid_cell_frame',
       G: 'minecraft:iron_ingot',
       C: 'extendedcrafting:redstone_component'
    }).id('finality:thermal_fluid_cell')
})