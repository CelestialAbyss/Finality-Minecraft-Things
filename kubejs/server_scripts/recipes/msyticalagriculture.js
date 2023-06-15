let dirt_essence = 'mysticalagriculture:dirt_essence'
let stone_essence = 'mysticalagriculture:stone_essence'

let amethyst_essence = 'mysticalagriculture:amethyst_essence'
let copper_essence = 'mysticalagriculture:copper_essence'
let iron_essence = 'mysticalagriculture:iron_essence'
let zinc_essence = 'mysticalagriculture:zinc_essence'
let gold_essence = 'mysticalagriculture:gold_essence'
let diamond_essence = 'mysticalagriculture:diamond_essence'
let nether_quartz = 'mysticalagriculture:nether_quartz_essence'

let nether_essence = 'mysticalagriculture:nether_essence'
let fire_essence = 'mysticalagriculture:fire_essence'
let water_essence = 'mysticalagriculture:water_essence'

// requires kubejs create and mysticalagriculture
onEvent('recipes', event => {
    // infusion crystals
    event.remove({id: 'mysticalagriculture:infusion_crystal'})
    event.remove({id: 'mysticalagriculture:master_infusion_crystal'})
    event.recipes.createMixing('mysticalagriculture:infusion_crystal', ['4x mysticalagriculture:inferium_essence', '4x mysticalagriculture:prosperity_shard', 'minecraft:diamond']).id('finality:mysta_infusion_crystal')
    event.recipes.createMixing('mysticalagriculture:master_infusion_crystal', ['4x mysticalagriculture:supremium_essence', '4x mysticalagriculture:prosperity_shard', 'mysticalagriculture:supremium_gemstone']).id('finality:mysta_master_infusion_crystal')

    // renewable prosperity shards
    event.recipes.createCrushing([
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.25),
        Item.of('mysticalagriculture:prosperity_seed_base').withChance(0.0009765625)
    ], 'minecraft:coarse_dirt').processingTime(250).id('finality:renew_prosperity')

    // redstone
    event.remove({id: 'mysticalagriculture:essence/minecraft/redstone'})
    event.recipes.createMixing('16x minecraft:redstone', ['8x mysticalagriculture:redstone_essence', 'create:cinder_flour']).id('finality:mysta_mixing_redstone')
    event.recipes.createMechanicalCrafting('16x minecraft:redstone', [
        'RRR',
        'RFR',
        'RRR'
    ], {
        R: 'mysticalagriculture:redstone_essence',
        F: 'create:cinder_flour'
    }).id('finality:mysta_mechanical_redstone')

    // fire essences
    event.remove({id: 'mysticalagriculture:essence/minecraft/red_sand'}) // converted to mixing and mechanical crafting recipe exclusive
    event.recipes.createMixing('16x minecraft:red_sand', ['2x mysticalagriculture:dirt_essence', '2x mysticalagriculture:fire_essence', 'minecraft:gold_nugget']).id('finality:mysta_mix_red_sand')
    event.recipes.createMechanicalCrafting('16x minecraft:red_sand', [
        'DF',
        'FG'
    ], {
        D: dirt_essence,
        F: fire_essence,
        G: 'minecraft:gold_nugget'
    }).id('finality:mysta_mechanical_red_sand')

    event.remove({id: 'mysticalagriculture:essence/minecraft/sand'}) // converted to mixing and mechanical crafting recipe exclusive
    event.recipes.createMixing('16x minecraft:sand', ['2x mysticalagriculture:dirt_essence', '2x mysticalagriculture:fire_essence']).id('finality:mysta_mix_sand')
    event.recipes.createMechanicalCrafting('16x minecraft:sand', [
        'DF',
        'FD'
    ], {
        D: dirt_essence,
        F: fire_essence
    }).id('finality:mysta_mechanical_sand')

    event.remove({id: 'mysticalagriculture:essence/minecraft/soul_sand'}) // converted to mixing and mechanical crafting recipe exclusive
    event.recipes.createMixing('16x minecraft:soul_sand', ['8x mysticalagriculture:nether_essence', 'mysticalagriculture:fire_essence']).id('finality:mysta_mix_soul_sand')
    event.recipes.createMechanicalCrafting('16x minecraft:soul_sand', [
        'NNN',
        'NFN',
        'NNN'
    ], {
        N: nether_essence,
        F: fire_essence
    }).id('finality:mysta_mechanical_soul_sand')

    event.remove({id: 'mysticalagriculture:essence/minecraft/lava_bucket'}) // converted to lava fluid output, no longer requires a bucket
    event.recipes.createCompacting([Fluid.of('minecraft:lava', 1000)],'5x mysticalagriculture:fire_essence').id('finality:mysta_compacting_lava')

    event.remove({id: 'mysticalagriculture:essence/minecraft/tuff'}) // converting to compacting and mechanical crafting recipe exclusive
    event.recipes.createCompacting('12x minecraft:tuff', ['5x mysticalagriculture:stone_essence', 'mysticalagriculture:fire_essence']).id('finality:mysta_compacting_tuff')
    event.recipes.createMechanicalCrafting('12x minecraft:tuff', [
        ' S ',
        'SFS',
        ' S '
    ], {
        S: stone_essence,
        F: fire_essence
    }).id('finality:mysta_mechanical_tuff')
    event.remove({id: 'mysticalagriculture:essence/minecraft/flint'}) // fully removed, get flint the create way
    // earth essence related
    event.remove({id: 'mysticalagriculture:essence/minecraft/soul_soil'})
    event.recipes.createMixing('16x minecraft:soul_soil', ['8x mysticalagriculture:nether_essence', 'mysticalagriculture:earth_essence']).id('finality:mysta_mixing_soul_soil')

    // stone essence
    event.remove({id: 'mysticalagriculture:essence/minecraft/cobblestone'}) // just use a cobble generator lol
    event.remove({id: 'mysticalagriculture:essence/minecraft/stone'}) // compacting exclusive
    event.recipes.createCompacting('24x minecraft:stone', ['9x mysticalagriculture:stone_essence']).id('finality:mysta_compacting_stone')

    event.remove({id: 'mysticalagriculture:essence/minecraft/andesite'}) // andesite compacting and mechanical crafting exclusive
    event.recipes.createCompacting('16x minecraft:andesite', ['4x mysticalagriculture:stone_essence', 'mysticalagriculture:nether_quartz_essence']).id('finality:mysta_compacting_andesite')
    event.recipes.createMechanicalCrafting('16x minecraft:andesite', [
        ' S ',
        'SSS',
        ' Q '
    ], {
        S: stone_essence,
        Q: nether_quartz
    }).id('finality:mysta_mechanical_andesite')
    event.remove({id: 'mysticalagriculture:essence/minecraft/diorite'}) // diorite compacting and mechanical crafting exclusive
    event.recipes.createCompacting('16x minecraft:diorite', ['3x mysticalagriculture:stone_essence', '3x mysticalagriculture:nether_quartz_essence']).id('finality:mysta_compacting_diorite')
    event.recipes.createMechanicalCrafting('16x minecraft:diorite', [
        'SS ',
        'S Q',
        ' QQ'
    ], {
        S: stone_essence,
        Q: nether_quartz
    }).id('finality:mysta_mechanical_diorite')

    event.remove({id: 'mysticalagriculture:essence/minecraft/granite'}) // granite compacting and mechanical crafting exclusive
    event.recipes.createCompacting('16x minecraft:granite', ['4x mysticalagriculture:stone_essence', '2x mysticalagriculture:nether_quartz_essence']).id('finality:mysta_compacting_granite')
    event.recipes.createMechanicalCrafting('16x minecraft:granite', [
        ' S ',
        'SQS',
        ' Q '
    ], {
        S: stone_essence,
        Q: nether_quartz
    }).id('finality:mysta_mechanical_granite')

    event.remove({id: 'mysticalagriculture:essence/minecraft/dripstone'}) // dripstone compacting and mechanical crafting exclusive
    event.recipes.createCompacting('16x minecraft:dripstone_block', ['4x mysticalagriculture:stone_essence', 'mysticalagriculture:water_essence'])
    event.recipes.createMechanicalCrafting('16x minecraft:dripstone_block', [
        ' S ',
        'SWS',
        ' S '
    ], {
        S: stone_essence,
        W: water_essence
    }).id('finality:mysta_mechanical_dripstone')
    event.remove({id: 'mysticalagriculture:essence/minecraft/calcite'}) // calcite compacting and mechanical crafting exclusive
    event.recipes.createCompacting('16x minecraft:calcite', ['8x mysticalagriculture:stone_essence', 'mysticalagriculture:amethyst_essence']).id('finality:mysta_compacting_calcite')
    event.recipes.createMechanicalCrafting('16x minecraft:calcite', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: stone_essence,
        A: amethyst_essence
    }).id('finality:mysta_mechanical_calcite')
    event.remove({id: 'mysticalagriculture:essence/minecraft/blackstone'}) // blackstone compacting and mechanical crafting exclusive
    event.recipes.createCompacting('24x minecraft:blackstone', ['8x mysticalagriculture:nether_essence', 'mysticalagriculture:stone_essence']).id('finality:mysta_compacting_blackstone')
    event.recipes.createMechanicalCrafting('24x minecraft:blackstone', [
        'NNN',
        'NSN',
        'NNN'
    ], {
        N: nether_essence,
        S: stone_essence
    }).id('finality:mysta_mechanical_blackstone')
    event.remove({id: 'mysticalagriculture:essence/minecraft/gravel'}) // gravel mixing and mechanical crafting exclusive
    event.recipes.createMixing('16x minecraft:gravel', ['2x mysticalagriculture:dirt_essence', '2x mysticalagriculture:stone_essence']).id('finality:mysta_mixing_gravel')
    event.recipes.createMechanicalCrafting('16x minecraft:gravel', [
        'DS',
        'SD'
    ], {
        D: dirt_essence,
        S: stone_essence
    }).id('finality:mysta_mechanical_gravel')

    // create orestone essence recipes
    event.remove({id: 'mysticalagriculture:essence/create/asurine'}) // asurine compacting and mechanical crafting exclusive
    event.recipes.createCompacting('16x create:asurine', ['8x mysticalagriculture:stone_essence', 'mysticalagriculture:zinc_essence']).id('finality:mysta_compacting_asurine')
    event.recipes.createMechanicalCrafting('16x create:asurine', [
        'SSS',
        'SZS',
        'SSS'
    ], {
        S: stone_essence,
        Z: zinc_essence
    }).id('finality:mysta_mechanical_asurine')
    event.remove({id: 'mysticalagriculture:essence/create/crimsite'}) // crimsite compacting and mechanical crafting exclusive
    event.recipes.createCompacting('16x create:crimsite', ['8x mysticalagriculture:stone_essence', 'mysticalagriculture:iron_essence']).id('finality:mysta_compacting_crimsite')
    event.recipes.createMechanicalCrafting('16x create:crimsite', [
        'SSS',
        'SIS',
        'SSS'
    ], {
        S: stone_essence,
        I: iron_essence
    }).id('finality:mysta_mechanical_crimsite')
    event.remove({id: 'mysticalagriculture:essence/create/ochrum'}) // ochrum compacting and mechanical crafting exclusive
    event.recipes.createCompacting('16x create:ochrum', ['8x mysticalagriculture:stone_essence', 'mysticalagriculture:gold_essence']).id('finality:mysta_compacting_ochrum')
    event.recipes.createMechanicalCrafting('16x create:ochrum', [
        'SSS',
        'SGS',
        'SSS'
    ], {
        S: stone_essence,
        G: gold_essence
    }).id('finality:mysta_mechanical_ochrum')
    event.remove({id: 'mysticalagriculture:essence/create/veridium'}) // veridium compacting and mechanical crafting exclusive
    event.recipes.createCompacting('16x create:veridium', ['8x mysticalagriculture:stone_essence', 'mysticalagriculture:copper_essence']).id('finality:mysta_compacting_veridium')
    event.recipes.createMechanicalCrafting('16x create:veridium', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        S: stone_essence,
        C: copper_essence
    }).id('finality:mysta_mechanical_veridium')
    event.remove({id: 'mysticalagriculture:essence/create/limestone'}) // create limestone compacting and mechanical crafting exclusive
    event.recipes.createCompacting('16x create:limestone', ['9x mysticalagriculture:limestone_essence']).id('finality:mysta_compacting_limestone')
    event.recipes.createMechanicalCrafting('16x create:limestone', [
        'LLL',
        'LLL',
        'LLL'
    ], {
        L: 'mysticalagriculture:limestone_essence'
    }).id('finality:mysta_mechanical_limestone')

    // diamond essence
    event.remove({id: 'mysticalagriculture:essence/minecraft/diamond'}) // diamond essence compacting exclusive
    event.recipes.createCompacting('minecraft:diamond', ['9x mysticalagriculture:diamond_essence']).id('finality:mysta_compacting_diamond')
    event.remove({id: 'mysticalagriculture:essence/minecraft/heart_of_the_sea'}) // heart of the sea compacting and mechanical crafting exclusive
    event.recipes.createMixing('minecraft:heart_of_the_sea', ['minecraft:nautilus_shell','4x mysticalagriculture:diamond_essence', '4x mysticalagriculture:prismarine_essence', '4x mysticalagriculture:squid_essence']).id('finality:mysta_mixing_sea_heart')
    event.recipes.createMechanicalCrafting('minecraft:heart_of_the_sea', [
        '  S  ',
        ' SDP ',
        'PDNDP',
        ' PDS ',
        '  S  '
    ], {
        D: 'mysticalagriculture:diamond_essence',
        S: 'mysticalagriculture:squid_essence',
        P: 'mysticalagriculture:prismarine_essence',
        N: 'minecraft:nautilus_shell'
    })
    
    // machine frame related
    event.remove({id: 'mysticalagriculture:machine_frame'})
    event.remove({id: 'mysticalagriculture:soul_extractor'})
    event.remove({id: 'mysticalagriculture:basic_reprocessor'})
    event.recipes.createMechanicalCrafting('mysticalagriculture:machine_frame', [
        'IIIII',
        'IRRRI',
        'IRSRI',
        'IRRRI',
        'IIIII'
    ], {
        I: 'create:iron_sheet',
        R: 'minecraft:redstone',
        S: '#forge:stone'
    }).id('finality:mysta_machine_frame')
    event.recipes.createMechanicalCrafting('mysticalagriculture:soul_extractor', [
        'FFSFF',
        'F M F',
        'DBRBD',
        'F M F',
        'FFSFF'
    ], {
        F: 'mysticalagriculture:machine_frame',
        S: 'mysticalagriculture:soulium_ingot',
        D: 'mysticalagriculture:soulium_dagger',
        M: 'create:mechanical_bearing',
        R: 'create:radial_chassis',
        B: 'create:deployer'
    }).id('finality:mysta_soul_extractor')
    event.recipes.createMechanicalCrafting('mysticalagriculture:basic_reprocessor', [
        'FFSFF',
        'F M F',
        'HBRBH',
        'F M F',
        'FFSFF'
    ], {
        F: 'mysticalagriculture:machine_frame',
        S: 'mysticalagriculture:soulium_ingot',
        H: 'minecraft:iron_hoe',
        M: 'create:mechanical_bearing',
        B: 'create:deployer',
        R: 'create:radial_chassis'
    }).id('finality:mysta_basic_reprocessor')

    // miscellaneous
    event.remove({id: 'mysticalagriculture:mystical_fertilizer'})
    event.remove({id: 'mysticalagriculture:mystical_fertilizer_better'})
    event.recipes.createMixing('4x mysticalagriculture:mystical_fertilizer', ['4x mysticalagriculture:inferium_essence', '4x minecraft:bone_meal', 'minecraft:diamond']).id('finality:mysta_mystical_fertilizer')
    event.recipes.createMixing('8x mysticalagriculture:mystical_fertilizer', ['4x mysticalagriculture:inferium_essence', '4x mysticalagriculture:fertilized_essence', 'minecraft:diamond']).id('finality:mysta_mystical_fertilizer_better_eff')

})