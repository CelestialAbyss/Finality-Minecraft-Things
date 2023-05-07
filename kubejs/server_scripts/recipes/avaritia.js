onEvent('recipes', event => {
    event.remove({mod: 'avaritia'})
    // crafting tables
    event.shaped('avaritia:compressed_crafting_table', [
        'TTT',
        'TTT',
        'TTT'
    ], {
        T:'minecraft:crafting_table'
    }).id('finality:compressed_crafting_table')
    event.shaped('avaritia:double_compressed_crafting_table', [
        'TTT',
        'TTT',
        'TTT'
    ], {
        T:'avaritia:compressed_crafting_table'
    }).id('finality:double_compressed_crafting_table')
    event.shaped('avaritia:extreme_crafting_table', [
        'MMM',
        'MTM',
        'MMM'
    ], {
        T:'avaritia:double_compressed_crafting_table',
        M:'avaritia:crystal_matrix_block'
    }).id('finality:extreme_crafting_table')
    // base materials
    // diamond lattice
    event.shaped('avaritia:diamond_lattice', [
        'D D',
        ' D ',
        'D D'
    ], { 
        D: 'minecraft:diamond'
    }).id('finality:avaritia_diamond_lattice')
    // crystal matrix ingot
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "ABABA",
            "AABAA",
            "ABABA",
        ],
        key: {
            A: 'avaritia:diamond_lattice',
            B: 'extendedcrafting:ender_star'
        },
        result: 'avaritia:crystal_matrix_ingot'
    }).id('finality:avaritia_crystal_matrix_ingot')
    // crystal matrix block compression
    event.shaped('avaritia:crystal_matrix_block', [
        'CCC',
        'CCC',
        'CCC'
    ], { 
        C: 'avaritia:crystal_matrix_ingot'
    }).id('finality:avaritia_crystal_matrix_block')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'CCC',
            'CCC',
            'CCC'
        ],
        key: {
            C: 'avaritia:crystal_matrix_ingot'
        },
        result: 'avaritia:crystal_matrix_block'
    }).id('finality:ext_avaritia_matrix_block_compression')
    event.shapeless('9x avaritia:crystal_matrix_ingot',['avaritia:crystal_matrix_block']).id('finality:avaritia_matrix_block_decompression')
    event.custom({
        "type": "extendedcrafting:shapeless_table",
        "ingredients": [
          {
            "item": "avaritia:crystal_matrix_block"
          }
        ],
        "result": {
          "item": "avaritia:crystal_matrix_ingot",
          "count": "9"
        }
    }).id('finality:ext_avaritia_matrix_block_decompression')
    // neutronium materials
    // neutron step1 pile
    event.recipes.createCrushing([
        'avaritia:neutron_pile',
        Item.of('avaritia:neutron_pile').withChance(0.25)
    ],Item.of('extendedcrafting:singularity','{Id: "extendedcrafting:coal"}')).processingTime(500).id('finality:avaritia_pile_of_neutrons')
    // neutron step2 nugget
    event.shaped('avaritia:neutron_nugget',[
        'PPP',
        'PPP',
        'PPP'
    ], {
        P: 'avaritia:neutron_pile'
    }).id('finality:avaritia_neutron_nugget')
    event.shapeless('9x avaritia:neutron_pile',['avaritia:neutron_nugget']).id('finality:avaritia_neutron_nugget_decompression')
    // neutron step3 ingot
    event.shaped('avaritia:neutronium_ingot',[
        'GGG',
        'GGG',
        'GGG'
    ], {
        G: 'avaritia:neutron_nugget'
    }).id('finality:avaritia_neutronium_ingot')
    // neutron ingot decompression
    event.shapeless('9x avaritia:neutron_nugget',['avaritia:neutronium_ingot']).id('finality:avaritia_neutron_ingot_decompression')
    event.shaped('avaritia:neutronium_block',[
        'III',
        'III',
        'III'
    ], {
        I: 'avaritia:neutronium_ingot'
    }).id('finality:avaritia_neutronium_block_compression')
    event.shapeless('9x avaritia:neutronium_ingot', ['avaritia:neutronium_block']).id('finality:avaritia_neutronium_block_decompression')
    // record fragment
    event.shapeless('avaritia:record_fragment',['#forge:records']).id('finality:avaritia_record_shattering')
    // infinity
    // infinity catalyst acquisition
    event.recipes.createMixing(['avaritia:infinity_catalyst'], [Item.of('extendedcrafting:ultimate_singularity'), Item.of('avaritia:record_fragment')]).superheated().id('finality:avaritia_infinity_catalyst_creation')
    // infinity ingot
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAAAA",
          "ABCBCBCBA",
          "ACBCBCBCA",
          "ABCBCBCBA",
          "AAAAAAAAA"
        ],
        "key": {
          "A": {
            "item": "avaritia:neutronium_ingot"
          },
          "B": {
            "item": "avaritia:crystal_matrix_ingot"
          },
          "C": {
            "item": "avaritia:infinity_catalyst"
          }
        },
        "result": {
          "item": "avaritia:infinity_ingot"
        }
      }).id('finality:avaritia_infinity_ingot')
    // infinity block
    event.shaped('avaritia:infinity_block', [
        'III',
        'III',
        'III'
    ], {
        I: 'avaritia:infinity_ingot'
    }).id('finality:avaritia_infinity_block')
    // infinity block decompression
    event.shapeless('9x avaritia:infinity_ingot', ['avaritia:infinity_block']).id('finality:avaritia_infinity_block_uncrafting')
    // everything else
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            ' NNNNNNN ',
            'NTTTTTTTN',
            'NTTTTTTTN',
            'NCCCTCCCN',
            'NTTTTTTTN',
            'NTTTTTTTN',
            'NNNNNNNNN',
            '  NN NN  ',
            '  NN NN  '
        ],
        key: {
            N: 'avaritia:neutronium_ingot',
            C: 'avaritia:infinity_catalyst',
            T: 'avaritia:infinity_ingot'
        },
        result: 'avaritia:infinity_helmet'
    }).id('finality:infinity_helmet')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            ' NN   NN ',
            'NNN   NNN',
            'NNNNNNNNN',
            ' NTTTTTN ',
            ' NTSMBTN ',
            ' NTTTTTN ',
            ' NTTTTTN ',
            ' NTTTTTN ',
            '  NNNNN  '
        ],
        key: {
            N: 'avaritia:neutronium_ingot',
            T: 'avaritia:infinity_ingot',
            S: 'avaritia:ultimate_stew',
            M: 'avaritia:crystal_matrix_block',
            B: 'avaritia:cosmic_meatballs'
        },
        result: 'avaritia:infinity_chestplate'
    }).id('finality:infinity_chestplate')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'NNNNNNNNN',
            'NTTTTTTTN',
            'NTNNNNNTN',
            'NTN   NTN',
            'NMN   NMN',
            'NTN   NTN',
            'NTN   NTN',
            'NTN   NTN',
            'NNN   NNN'
        ],
        key: {
            N: 'avaritia:neutronium_ingot',
            T: 'avaritia:infinity_ingot',
            M: 'avaritia:crystal_matrix_block'
        },
        result: 'avaritia:infinity_legs'
    }).id('finality:infinity_legs')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            ' NNN NNN ',
            ' NTN NTN ',
            ' NTN NTN ',
            'NNTN NTNN',
            'NTTN NTTN',
            'NNNN NNNN'
        ],
        key: {
            N: 'avaritia:neutronium_ingot',
            T: 'avaritia:infinity_ingot'
        },
        result: 'avaritia:infinity_boots'
    }).id('finality:infinity_boots')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '       TT',
            '      TTT',
            '     TTT ',
            '    TTT  ',
            ' X TTT   ',
            '  MTT    ',
            '  NM     ',
            ' N  X    ',
            'C        '
        ],
        key: {
            N: 'avaritia:neutronium_ingot',
            T: 'avaritia:infinity_ingot',
            C: 'avaritia:infinity_catalyst',
            X: 'avaritia:crystal_matrix_ingot',
            M: 'avaritia:crystal_matrix_block'
        },
        result: 'avaritia:infinity_sword'
    }).id('finality:infinity_sword')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '   AA    ',
            '  A B    ',
            ' A  B    ',
            'AC  B    ',
            'DE  B    ',
            'AC  B    ',
            ' A  B    ',
            '  A B    ',
            '   AA    '
        ],
        key: {
            A: 'avaritia:infinity_ingot',
            B: 'avaritia:neutron_nugget',
            C: 'avaritia:endest_pearl',
            D: 'avaritia:infinity_catalyst',
            E: 'avaritia:crystal_matrix_block',
        },
        result: 'avaritia:infinity_bow'
    }).id('finality:infinity_bow')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'AAABB    ',
            'AAACB    ',
            'AAABD    ',
            'A   D    ',
            '    D    ',
            '    D    ',
            '    D    ',
            '    D    ',
            '    D    '
        ],
        key: {
            A: 'avaritia:infinity_ingot',
            B: 'avaritia:infinity_block',
            C: 'avaritia:infinity_catalyst',
            D: 'avaritia:neutronium_ingot'
        },
        result: 'avaritia:infinity_axe'
    }).id('finality:infinity_axe')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '     A   ',
            ' BBBBBB  ',
            'BBBBBBB  ',
            'B    BB  ',
            '     A   ',
            '     A   ',
            '     A   ',
            '     A   ',
            '     A   '
        ],
        key: {
            A: 'avaritia:neutronium_ingot',
            B: 'avaritia:infinity_ingot'
        },
        result: 'avaritia:infinity_hoe'
    }).id('finality:infinity_hoe')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '    A    ',
            ' BBBCBBB ',
            'BBBBABBBB',
            'BB  A  BB',
            '    A    ',
            '    A    ',
            '    A    ',
            '    A    ',
            '    A    '
        ],
        key: {
            A: 'avaritia:neutronium_ingot',
            B: 'avaritia:infinity_ingot',
            C: 'avaritia:infinity_catalyst'
        },
        result: 'avaritia:infinity_pickaxe'
    }).id('finality:infinity_pickaxe')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '      AAA',
            '     AAAA',
            '      BAA',
            '     C A ',
            '    C    ',
            '   C     ',
            '  C      ',
            'DC       ',
            ' D       '
        ],
        key: {
            A: 'avaritia:infinity_ingot',
            B: 'avaritia:infinity_block',
            C: 'avaritia:neutronium_ingot',
            D: 'avaritia:neutron_nugget'
        },
        result: 'avaritia:infinity_shovel'
    }).id('finality:infinity_shovel')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '       AB',
            '      ABA',
            '     ABA ',
            '    ABA  ',
            ' C ABA   ',
            '  CDA    ',
            '  EC     ',
            ' E  C    ',
            'F        '
        ],
        key: {
            A: 'minecraft:netherite_ingot',
            B: 'minecraft:blaze_powder',
            C: 'minecraft:bone',
            D: 'avaritia:crystal_matrix_ingot',
            E: 'minecraft:oak_log',
            F: 'minecraft:nether_star'
        },
        result: 'avaritia:skullfire_sword'
    }).id('finality:skullfire_sword')
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '   AAA   ',
            ' AABBBAA ',
            ' ABBBBBA ',
            'ABBBCBBBA',
            'ABBCDCBBA',
            'ABBBCBBBA',
            ' ABBBBBA ',
            ' AABBBAA ',
            '   AAA   '
        ],
        key: {
            A: 'minecraft:end_stone',
            B: 'minecraft:ender_pearl',
            C: 'extendedcrafting:ender_ingot_block',
            D: 'extendedcrafting:ender_star'
        },
        result: 'avaritia:endest_pearl'
    }).id('finality:endest_pearl')
    // ultimate stew recipe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '   A   ',
            '  BCB  ',
            ' DEFEG ',
            'HIJKLMN',
            ' DEOEG ',
            '  PQR  ',
            '   S   '
        ],
        key: {
            A:'minecraft:baked_potato',
            B:'minecraft:beetroot',
            C:'minecraft:potato',
            D:'minecraft:melon_slice',
            E:'minecraft:cactus',
            F:'minecraft:beetroot_soup',
            G:'minecraft:pumpkin',
            H:'minecraft:golden_apple',
            I:'minecraft:apple',
            J:'minecraft:glistering_melon_slice',
            K:'avaritia:neutron_pile',
            L:'minecraft:pumpkin_pie',
            M:'minecraft:carrot',
            N:'minecraft:golden_carrot',
            O:'minecraft:mushroom_stew',
            P:'minecraft:red_mushroom',
            Q:'minecraft:bread',
            R:'minecraft:brown_mushroom',
            S:'minecraft:wheat',
        },
        result: 'avaritia:ultimate_stew'
    }).id('finality:ultimate_stew')
    // cosmic meatballs
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'A B C',
            ' DEF ',
            'GHIJK',
            ' LMN ',
            'O   P'
        ],
        key: {
            'A': {
                'item': 'minecraft:chicken'
              },
              'B': {
                'item': 'minecraft:salmon'
              },
              'C': {
                'item': 'minecraft:cod'
              },
              'D': {
                'item': 'minecraft:cooked_chicken'
              },
              'E': {
                'item': 'minecraft:cooked_salmon'
              },
              'F': {
                'item': 'minecraft:cooked_cod'
              },
              'G': {
                'item': 'minecraft:rabbit'
              },
              'H': {
                'item': 'minecraft:cooked_rabbit'
              },
              'I': {
                'item': 'avaritia:neutron_pile'
              },
              'J': {
                'item': 'minecraft:cooked_mutton'
              },
              'K': {
                'item': 'minecraft:mutton'
              },
              'L': {
                'item': 'minecraft:cooked_porkchop'
              },
              'M': {
                'item': 'minecraft:egg'
              },
              'N': {
                'item': 'minecraft:cooked_beef'
              },
              'O': {
                'item': 'minecraft:porkchop'
              },
              'P': {
                'item': 'minecraft:beef'
              }
        },
        result: 'avaritia:cosmic_meatballs'
    }).id('finality:cosmic_meatballs')
})