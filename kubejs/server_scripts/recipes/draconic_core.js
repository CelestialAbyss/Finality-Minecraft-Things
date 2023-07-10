let gold_ingot = 'minecraft:gold_ingot'
let diamond = 'minecraft:diamond'

let draco_ingot = 'draconicevolution:draconium_ingot'
let draco_core = 'draconicevolution:draconium_core'
let wyvern_core = 'draconicevolution:wyvern_core'

onEvent('recipes', event => {
    // draconium core t1
    event.remove({id: 'draconicevolution:components/draconium_core'})
    event.recipes.createMechanicalCrafting('draconicevolution:draconium_core', [
        '  A  ',
        ' UAU ',
        'AADAA',
        ' UAU ',
        '  A  '
    ], {
        A: gold_ingot,
        U: draco_ingot,
        D: diamond
    }).id('finality:draconicevo/mechanical_draconium_core')
    // wyvern core t2
    event.remove({id: 'draconicevolution:components/wyvern_core'})
    event.recipes.createMechanicalCrafting('draconicevolution:wyvern_core', [
        ' ICI ',
        'II II',
        'C E C',
        'II II',
        ' ICI '
    ], {
        I: draco_ingot,
        C: draco_core,
        E: 'extendedcrafting:ender_star_block'
    }).id('finality:draconicevo/mechanical_wyvern_core')
    // wyvern energy controller t1
    event.remove({id: 'draconicevolution:components/wyvern_energy_core'})
    event.recipes.createMechanicalCrafting('draconicevolution:wyvern_energy_core', [
        ' DRD ',
        'DDRDD',
        'RRCRR',
        'DDRDD',
        ' DRD '
    ], {
        C: draco_core,
        D: draco_ingot,
        R: 'extendedcrafting:redstone_ingot_block'
    }).id('finality:draconicevo/wyvern_energy_core')
    // draconic energy controller t2
    event.remove({id: 'draconicevolution:components/draconic_energy_core'})
    event.recipes.createMechanicalCrafting('draconicevolution:draconic_energy_core', [
        ' IOI ',
        'II II',
        'O C O',
        'II II',
        ' IOI '
    ], {
        I: 'draconicevolution:awakened_draconium_ingot',
        O: 'draconicevolution:wyvern_energy_core',
        C: 'draconicevolution:wyvern_core'
    }).id('finality:draconicevo/draconic_energy_core')
    // reactor stabilizer focus ring
    event.remove({id: 'draconicevolution:reactor_prt_focus_ring'})
    event.recipes.createMechanicalCrafting('draconicevolution:reactor_prt_focus_ring', [
        ' GGDDDGG ',
        'GG  W  GG',
        'G       G',
        'D       D',
        'DW     WD',
        'D       D',
        'G       G',
        'GG  W  GG',
        ' GGDDDGG '
    ], {
        G: gold_ingot,
        D: diamond,
        W: wyvern_core
    }).id('finality:draconicevo/reactor_focus_ring')
    event.remove({id: 'draconicevolution:components/chaotic_energy_core'})
    event.recipes.createMechanicalCrafting('draconicevolution:chaotic_energy_core', [
        ' FEF ',
        'FF FF',
        'E C E',
        'FF FF',
        ' FEF '
    ], {
        F: 'draconicevolution:medium_chaos_frag',
        E: 'draconicevolution:draconic_energy_core',
        C: 'draconicevolution:awakened_core'
    }).id('finality:draconicevo/chaotic_energy_core')
    event.remove({id: 'draconicevolution:reactor_prt_stab_frame'})
    event.recipes.create.mechanicalCrafting('draconicevolution:reactor_prt_stab_frame', [
        'IIIII',
        'I    ',
        'CA   ',
        'I    ',
        'IIIII'
    ], {
        A: 'draconicevolution:awakened_draconium_ingot',
        C: 'draconicevolution:wyvern_core',
        I: 'create:industrial_iron_block'
    }).id('finality:draconicevo/reactor_stabilizer_frame')
    event.remove({id: 'draconicevolution:reactor_prt_rotor_full'})
    event.recipes.create.mechanicalCrafting('draconicevolution:reactor_prt_rotor_full', [
        ' OOOO',
        'DIIII',
        'CD   ',
        'DIIII',
        ' OOOO'
    ], {
        C: 'draconicevolution:wyvern_core',
        D: 'draconicevolution:draconium_ingot',
        I: 'draconicevolution:reactor_prt_in_rotor',
        O: 'draconicevolution:reactor_prt_out_rotor'
    }).id('finality:draconicevo/reactor_stabilizer_rotor_assembly')
    event.recipes.create.mechanicalCrafting('draconicevolution:reactor_prt_rotor_full', [
        ' DCD ',
        'OIDIO',
        'OI IO',
        'OI IO',
        'OI IO'
    ], {
        C: 'draconicevolution:wyvern_core',
        D: 'draconicevolution:draconium_ingot',
        I: 'draconicevolution:reactor_prt_in_rotor',
        O: 'draconicevolution:reactor_prt_out_rotor'
    }).id('finality:draconicevo/reactor_stabilizer_rotor_assembly_vertical')
    // mystical agriculture modifications
    event.remove({id: 'mysticalagriculture:essence/draconicevolution/draconium_ingot'})
    event.recipes.createCompacting('draconicevolution:draconium_ingot', ['9x mysticalagriculture:draconium_essence']).id('finality:draconicevo/draconium_ingot')
})