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
    }).id('finality:thermal/mechanical/machine_frame')
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BD DB",
          "C   C",
          "BD DB",
          "ABCBA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "create:iron_sheet"
          },
          "C": {
            "tag": "forge:glass"
          },
          "D": {
            "item": "thermal:tin_gear"
          }
        },
        "result": {
          "item": "thermal:machine_frame"
        }
    }).id('finality:extended/thermal/machine_frame')

    // redstone flux related
    event.remove({id: 'thermal:energy_cell_frame'})
    event.recipes.createMechanicalCrafting('thermal:energy_cell_frame', [
        'LLGLL',
        'LE EL',
        'G   G',
        'LE EL',
        'LLGLL'
    ], {
        L: '#forge:ingots/lead',
        G: '#forge:glass',
        E: 'thermal:electrum_gear'
    }).id('finality:thermal/mechanical/energy_cell_frame')
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "AC CA",
        "B   B",
        "AC CA",
        "AABAA"
      ],
      "key": {
        "A": {
          "tag": "forge:ingots/lead"
        },
        "B": {
          "tag": "forge:glass"
        },
        "C": {
          "item": "thermal:electrum_gear"
        }
      },
      "result": {
        "item": "thermal:energy_cell_frame"
      }
    }).id('finality:extended/thermal/energy_cell_frame')
    event.remove({id: 'thermal:energy_cell'})
    event.recipes.createMechanicalCrafting('thermal:energy_cell', [
        'RR RR',
        'REEER',
        'IEFEI',
        'RECER',
        'RR RR'
    ], {
        R: 'thermal:cured_rubber',
        E: 'minecraft:redstone_block',
        I: 'create:iron_sheet',
        F: 'thermal:energy_cell_frame',
        C: 'thermal:rf_coil'
    }).id('finality:thermal/mechanical/energy_cell')
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AA AA",
        "ABBBA",
        "CBDBC",
        "ABEBA",
        "AA AA"
      ],
      "key": {
        "A": {
          "item": "thermal:cured_rubber"
        },
        "B": {
          "item": "minecraft:redstone_block"
        },
        "C": {
          "item": "create:iron_sheet"
        },
        "D": {
          "item": "thermal:energy_cell_frame"
        },
        "E": {
          "item": "thermal:rf_coil"
        }
      },
      "result": {
        "item": "thermal:energy_cell"
      }
    }).id('finality:extended/thermal/energy_cell')
    /*
    event.recipes.createSequencedAssembly([
        Item.of('thermal:energy_cell')
    ], 'thermal:energy_cell_frame', [
        event.recipes.createDeploying('finality:incomplete_thermal_energy_cell', ['finality:incomplete_thermal_energy_cell', 'thermal:cured_rubber']),
        event.recipes.createDeploying('finality:incomplete_thermal_energy_cell', ['finality:incomplete_thermal_energy_cell', 'thermal:rf_coil']),
        event.recipes.createDeploying('finality:incomplete_thermal_energy_cell', ['finality:incomplete_thermal_energy_cell', 'minecraft:redstone_block']),
        event.recipes.createDeploying('finality:incomplete_thermal_energy_cell', ['finality:incomplete_thermal_energy_cell', 'create:iron_sheet']),
        event.recipes.createPressing('finality:incomplete_thermal_energy_cell', ['finality:incomplete_thermal_energy_cell'])
    ]).transitionalItem('finality:incomplete_thermal_energy_cell').loops(3).id('finality:thermal/seq_assembly/energy_cell')
    */

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
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BDEDB",
          "CEEEC",
          "BDEDB",
          "ABCBA"
        ],
        "key": {
          "A": {
            "tag": "forge:ingots/bronze"
          },
          "B": {
            "item": "create:iron_sheet"
          },
          "C": {
            "tag": "forge:glass"
          },
          "D": {
            "item": "thermal:iron_gear"
          },
          "E": {
            "item": "create:fluid_tank"
          }
        },
        "result": {
          "item": "thermal:fluid_cell_frame"
        }
    }).id('finality:extended/thermal/fluid_cell_frame')
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
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BDCDB",
          "CCECC",
          "BDCDB",
          "AFGFA"
        ],
        "key": {
          "A": {
            "item": "thermal:cured_rubber"
          },
          "B": {
            "item": "create:iron_sheet"
          },
          "C": {
            "tag": "thermal:glass/hardened"
          },
          "D": {
            "item": "minecraft:iron_ingot"
          },
          "E": {
            "item": "thermal:fluid_cell_frame"
          },
          "F": {
            "item": "extendedcrafting:redstone_component"
          },
          "G": {
            "item": "thermal:redstone_servo"
          }
        },
        "result": {
          "item": "thermal:fluid_cell"
        }
    }).id('finality:extended/thermal/fluid_cell')
    // thermal machines
    /* these changes will be implemented at a later date or scrapped entirely
    event.remove({id: 'thermal:machine_furnace'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.remove({id: 'thermal:'})
    event.recipes.createSequencedAssembly([
        Item.of('thermal:machine_furnace')
    ], 'thermal:machine_frame', [
        event.recipes.createDeploying('transitionalItem', ['transitionalItem', 'ingredient']),
        event.recipes.createPressing('transitionalItem', 'transitionalItem')
    ]).transitionalItem('itemID').loops(xx).id('finality:thermal/seq_assembly/output_item_id')
    */

    /* template
    event.recipes.createSequencedAssembly([
        Item.of('output')
    ], 'thermal:machine_frame', [
        event.recipes.createDeploying('transitionalItem', ['transitionalItem', 'ingredient']),
        event.recipes.createPressing('transitionalItem', 'transitionalItem')
    ]).transitionalItem('itemID').loops(xx).id('finality:thermal/seq_assembly/output_item_id')
    */
})