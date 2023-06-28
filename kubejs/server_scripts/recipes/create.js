let MC = (id) => `minecraft:${id}`
let C = (id) => `create:${id}`
onEvent('recipes', event => {
    // Note to self: Ensure all items here are base Create and vanilla!
    // duplicate recipes remover
    event.remove({id: 'create_sa:netherrack_recipe'})
    event.remove({id: 'create_sa:obsidian_haunting'})
    event.remove({id: 'create_sa:sponge_pressing'})
    // compacting
    event.recipes.createCompacting([MC('sponge'), Fluid.of(MC('water'), 1000)], [MC('wet_sponge')]).id('finality:sponge_squeezing')
    event.recipes.createCompacting([MC('diamond')], [Item.of(MC('coal_block'), 9), Fluid.of(MC('lava'), 250)]).superheated().id('finality:renew_diamond')
    event.recipes.createCompacting([MC('coal')], [Item.of(MC('dried_kelp_block'), 9)]).heated().id('finality:renew_coal')
    event.recipes.createCompacting([MC('basalt')], [MC('blue_ice'), Fluid.of(MC('lava'), 500)]).id('finality:compacting_basalt')
    event.recipes.createCompacting([MC('tuff')], [Item.of(MC('gravel'), 18), Fluid.of(MC('lava'), 250)]).superheated().id('finality:renew_tuff')
    event.recipes.createCompacting([MC('tuff')], [Item.of(MC('deepslate'), 9), Fluid.of(MC('lava'), 250)]).heated().id('finality:renew_deepslate_tuff')
    // crushing
    event.remove({id: 'create:crushing/gravel'})
    event.remove({id: 'create:crushing/netherrack'})
    event.recipes.createCrushing([MC('dirt'), Item.of(MC('flint')).withChance(0.10)], MC('gravel')).processingTime(250).id('finality:gravel_crushing')
    event.recipes.createCrushing([MC('sand'), Item.of(MC('clay_ball')).withChance(0.05)], MC('dirt')).processingTime(250).id('finality:dirt_crushing')
    event.recipes.createCrushing([Item.of(MC('pointed_dripstone'), 4), Item.of(MC('clay_ball')).withChance(0.50), Item.of(C('copper_nugget')).withChance(0.25), Item.of(C('experience_nugget')).withChance(0.75)], MC('dripstone_block')).processingTime(250).id('finality:dripstone_crushing')
    event.recipes.createCrushing([Item.of('create:copper_nugget').withChance(0.05), Item.of(MC('gunpowder')).withChance(0.10)], MC('basalt')).id('finality:basalt_crushing')
    event.recipes.createCrushing([C('cinder_flour'), Item.of(C('cinder_flour')).withChance(0.50), Item.of(MC('netherite_scrap')).withChance(0.002)], MC('netherrack')).processingTime(250).id('finality:netherrack_crushing')
    // filling
    event.recipes.createFilling(MC('netherrack'), [MC('cobblestone'), Fluid.of(C('potion'), 250, '{Potion: "minecraft:strong_healing"}')]).id('finality:living_flesh_stone')
    // haunting
    event.recipes.createHaunting(MC('deepslate'), MC('andesite')).id('finality:andesite_haunting')
    event.recipes.createHaunting(MC('crying_obsidian'), MC('obsidian')).id('finality:obsidian_haunting')
    event.recipes.createHaunting(MC('name_tag'), MC('writable_book')).id('finality:soul_nametag')
    // mixing 
    event.recipes.createMixing([MC('coarse_dirt')], [MC('dirt'), MC('gravel')]).id('finality:coarse_dirt')
    // Be3Al2(SiO3)6
    event.recipes.createMixing([MC('emerald')], [MC('quartz'), MC('glass'), Item.of(MC('iron_nugget'), 3)]).superheated().id('finality:renew_emerald')
    // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
    event.recipes.createMixing(['minecraft:nether_gold_ore'], ['create:cinder_flour', '18x minecraft:gold_nugget', Fluid.of('minecraft:lava', 250)]).id('finality:nether_gold_ore_deco')
})