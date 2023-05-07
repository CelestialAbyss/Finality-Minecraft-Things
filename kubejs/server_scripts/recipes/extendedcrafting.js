onEvent('recipes', event => {
    event.remove({id: 'minecraft:beacon'})
    event.remove({id: 'tconstruct:common/glass/vanilla/beacon'})
    event.remove({id: 'minecraft:end_crystal'})
    event.remove({id: 'tconstruct:common/glass/vanilla/end_crystal'})
    event.remove({id: 'extendedcrafting:black_iron_ingot'})
    // worldshaper
    event.recipes.createMechanicalCrafting('create:handheld_worldshaper', [
      'CPUSSS',
      'II'
    ], {
      C: 'extendedcrafting:the_ultimate_catalyst',
      S: 'create:sturdy_sheet',
      U: 'extendedcrafting:ultimate_singularity',
      P: 'create:precision_mechanism',
      I: 'extendedcrafting:the_ultimate_ingot'
    }).id('finality:create_worldshaper')
    // end crystal recipe
    event.custom({
      type: 'extendedcrafting:combination',
      powerCost: 100000,
      input: {
          item: 'minecraft:ender_eye'
      },
      ingredients: [
          Ingredient.of('#forge:glass/colorless').toJson(),
          Ingredient.of('#forge:glass/colorless').toJson(),
          Ingredient.of('#forge:glass/colorless').toJson(),
          Ingredient.of('#forge:glass/colorless').toJson(),
          Ingredient.of('minecraft:ghast_tear').toJson(),
          Ingredient.of('extendedcrafting:ender_star').toJson(),
          Ingredient.of('mysticalagriculture:prosperity_shard').toJson(),
          Ingredient.of('minecraft:fermented_spider_eye').toJson(),
      ],
      result: {
          item: 'minecraft:end_crystal'
      }
    }).id('finality:end_crystal')
    // black iron recipe
    event.shapeless('extendedcrafting:black_iron_ingot',['minecraft:iron_ingot','minecraft:black_dye','create:powdered_obsidian']).id('finality:ext_black_iron_ingot')
    // materials
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'GGG',
            'GSG',
            'OOO'
        ],
        key: {
            G: '#forge:glass/colorless',
            S: 'extendedcrafting:ender_star',
            O: 'minecraft:obsidian'
        },
        result: 'minecraft:beacon'
    }).id('finality:beacon')
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'DLLLLLD',
            'DGISIGD',
            'DGISIGD',
            'DLLLLLD',
        ],
        key: {
            L: 'minecraft:lapis_lazuli',
            D: 'minecraft:diamond',
            I: 'minecraft:iron_ingot',
            S: 'minecraft:nether_star',
            G: 'minecraft:gold_ingot'
        },
        result: {
            item: 'extendedcrafting:crystaltine_ingot',
            count: 4
        },
        acceptMirrored: false
    }).id('finality:crystaltine_mechanical_translate')
    event.recipes.createCrushing([
      'extendedcrafting:the_ultimate_nugget',
      Item.of('extendedcrafting:the_ultimate_nugget').withChance(0.25)
    ], 'extendedcrafting:ultimate_singularity').processingTime(1200).id('finality:ultimate_nugget')
    // singularities
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          ' LLLLLLL ',
          'LLLAAALLL',
          'LLAAAAALL',
          'LAAAAAAAL',
          'LAAAAAAAL',
          'LAAAAAAAL',
          'LLAAAAALL',
          'LLLAAALLL',
          ' LLLLLLL '
        ],
        key: {
          A: 'minecraft:amethyst_block',
          L: 'minecraft:crying_obsidian',
        },
        result: {
          type: 'forge:nbt',
          item: 'extendedcrafting:singularity',
          nbt: {
            Id: 'extendedcrafting:amethyst'
        }, 
        count: 1
        },
        'acceptMirrored': false
    }).id('finality:amethyst_singularity')
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
          " LLLLLLL ",
          "LLLBBBLLL",
          "LLBBBBBLL",
          "LBBBBBBBL",
          "LBBBBBBBL",
          "LBBBBBBBL",
          "LLBBBBBLL",
          "LLLBBBLLL",
          " LLLLLLL "
        ],
        "key": {
          "B": {
            "item": "create:brass_block"
          },
          "L": {
            "item": "minecraft:crying_obsidian"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "nbt": {
            "Id": "extendedcrafting:brass"
        }, 
         "count": 1
        },
        "acceptMirrored": false
    }).id('finality:brass_singularity')
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
          " CCCCCCC ",
          "CCCCCCCCC",
          "CCCCCCCCC",
          "CCCCCCCCC",
          "CCCCCCCCC",
          "CCCCCCCCC",
          "CCCCCCCCC",
          "CCCCCCCCC",
          " CCCCCCC "
        ],
        "key": {
          "C": {
            "item": "minecraft:coal_block"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "nbt": {
            "Id": "extendedcrafting:coal"
         }, "count": 1
        },
        "acceptMirrored": false
      }).id('finality:coal_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLCCCLLL",
        "LLCCCCCLL",
        "LCCCCCCCL",
        "LCCCCCCCL",
        "LCCCCCCCL",
        "LLCCCCCLL",
        "LLLCCCLLL",
        " LLLLLLL "
      ],
      "key": {
        "C": {
          "item": "minecraft:copper_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:copper"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:copper_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLDDDLLL",
        "LLDDDDDLL",
        "LDDDDDDDL",
        "LDDDDDDDL",
        "LDDDDDDDL",
        "LLDDDDDLL",
        "LLLDDDLLL",
        " LLLLLLL "
      ],
      "key": {
        "D": {
          "item": "minecraft:diamond_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:diamond"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:diamond_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLEEELLL",
        "LLEEEEELL",
        "LEEEEEEEL",
        "LEEEEEEEL",
        "LEEEEEEEL",
        "LLEEEEELL",
        "LLLEEELLL",
        " LLLLLLL "
      ],
      "key": {
        "E": {
          "item": "minecraft:emerald_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:emerald"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:emerald_singularity')
    event.custom({
      type: 'create:mechanical_crafting',
      pattern: [
        ' LLLLLLL ',
        'LLLEEELLL',
        'LLEEEEELL',
        'LEEEEEEEL',
        'LEEEEEEEL',
        'LEEEEEEEL',
        'LLEEEEELL',
        'LLLEEELLL',
        ' LLLLLLL '
      ],
      key: {
        E: 'create:electron_tube',
        L: 'minecraft:crying_obsidian',
      },
      result: {
        type: 'forge:nbt',
        item: 'extendedcrafting:singularity',
        nbt: {
          Id: 'extendedcrafting:electron_tube'
        },
        count: 1
      },
      acceptMirrored: false
    }).id('finality:electron_tube_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLAAALLL",
        "LLAAAAALL",
        "LAAAAAAAL",
        "LAAAAAAAL",
        "LAAAAAAAL",
        "LLAAAAALL",
        "LLLAAALLL",
        " LLLLLLL "
      ],
      "key": {
        "A": {
          "item": "minecraft:ender_pearl"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:ender_pearl"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:ender_singularity')
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            ' LLLLLLL ',
            'LLLGGGLLL',
            'LLGGGGGLL',
            'LGGGGGGGL',
            'LGGGGGGGL',
            'LGGGGGGGL',
            'LLGGGGGLL',
            'LLLGGGLLL',
            ' LLLLLLL '
          ],
          key: {
            G: 'minecraft:glowstone',
            L: 'minecraft:crying_obsidian'
          },
          result: {
            type: 'forge:nbt',
            item: 'extendedcrafting:singularity',
            nbt: {
                Id: 'extendedcrafting:glowstone'
            }, 
            count: 1
          },
          acceptMirrored: false
    }).id('finality:glowstone_singularity')
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            ' LLLLLLL ',
            'LLLAAALLL',
            'LLAAAAALL',
            'LAAAAAAAL',
            'LAAAAAAAL',
            'LAAAAAAAL',
            'LLAAAAALL',
            'LLLAAALLL',
            ' LLLLLLL '  
        ],
        key: {
            A: 'minecraft:gold_block',
            L: 'minecraft:crying_obsidian'
        },
        result: {
            type: 'forge:nbt',
            item: 'extendedcrafting:singularity',
            nbt: {
                Id: 'extendedcrafting:gold'
            },
            count: 1
        },
        acceptMirrored: false
    }).id('finality:gold_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLAAALLL",
        "LLAAAAALL",
        "LAAAAAAAL",
        "LAAAAAAAL",
        "LAAAAAAAL",
        "LLAAAAALL",
        "LLLAAALLL",
        " LLLLLLL "
      ],
      "key": {
        "A": {
          "item": "minecraft:gunpowder"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:gunpowder"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:gunpowder_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLRRRLLL",
        "LLRRRRRLL",
        "LRRRRRRRL",
        "LRRRRRRRL",
        "LRRRRRRRL",
        "LLRRRRRLL",
        "LLLRRRLLL",
        " LLLLLLL "
      ],
      "key": {
        "R": {
          "item": "minecraft:honey_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:honey"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:honey_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLFFFLLL",
        "LLFFFFFLL",
        "LFFFFFFFL",
        "LFFFFFFFL",
        "LFFFFFFFL",
        "LLFFFFFLL",
        "LLLFFFLLL",
        " LLLLLLL "
      ],
      "key": {
        "F": {
          "item": "minecraft:iron_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:iron"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:iron_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLAAALLL",
        "LLAAAAALL",
        "LAAAAAAAL",
        "LAAAAAAAL",
        "LAAAAAAAL",
        "LLAAAAALL",
        "LLLAAALLL",
        " LLLLLLL "
      ],
      "key": {
        "A": {
          "item": "minecraft:lapis_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:lapis_lazuli"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:lapis_lazuli_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLAAALLL",
        "LLAAAAALL",
        "LAAAAAAAL",
        "LAAAAAAAL",
        "LAAAAAAAL",
        "LLAAAAALL",
        "LLLAAALLL",
        " LLLLLLL "
      ],
      "key": {
        "A": {
          "item": "minecraft:netherite_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:netherite"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:netherite_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLRRRLLL",
        "LLRRRRRLL",
        "LRRRRRRRL",
        "LRRRRRRRL",
        "LRRRRRRRL",
        "LLRRRRRLL",
        "LLLRRRLLL",
        " LLLLLLL "
      ],
      "key": {
        "R": {
          "item": "minecraft:sea_lantern"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:sea_lantern"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:prismarine_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLQQQLLL",
        "LLQQQQQLL",
        "LQQQQQQQL",
        "LQQQQQQQL",
        "LQQQQQQQL",
        "LLQQQQQLL",
        "LLLQQQLLL",
        " LLLLLLL "
      ],
      "key": {
        "Q": {
          "item": "minecraft:quartz_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:quartz"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:quartz_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLRRRLLL",
        "LLRRRRRLL",
        "LRRRRRRRL",
        "LRRRRRRRL",
        "LRRRRRRRL",
        "LLRRRRRLL",
        "LLLRRRLLL",
        " LLLLLLL "
      ],
      "key": {
        "R": {
          "item": "minecraft:redstone_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:redstone"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:redstone_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLRRRLLL",
        "LLRRRRRLL",
        "LRRRRRRRL",
        "LRRRRRRRL",
        "LRRRRRRRL",
        "LLRRRRRLL",
        "LLLRRRLLL",
        " LLLLLLL "
      ],
      "key": {
        "R": {
          "item": "create:polished_rose_quartz"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:rose_quartz"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:rosse_quartz_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLAAALLL",
        "LLAAAAALL",
        "LAAAAAAAL",
        "LAAAAAAAL",
        "LAAAAAAAL",
        "LLAAAAALL",
        "LLLAAALLL",
        " LLLLLLL "
      ],
      "key": {
        "A": {
          "item": "ars_nouveau:source_gem_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:source_gem"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:source_gem_singularity')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " LLLLLLL ",
        "LLLZZZLLL",
        "LLZZZZZLL",
        "LZZZZZZZL",
        "LZZZZZZZL",
        "LZZZZZZZL",
        "LLZZZZZLL",
        "LLLZZZLLL",
        " LLLLLLL "
      ],
      "key": {
        "Z": {
          "item": "create:zinc_block"
        },
        "L": {
          "item": "minecraft:crying_obsidian"
        },
      },
      "result": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "nbt": {
          "Id": "extendedcrafting:zinc"
       }, "count": 1
      },
      "acceptMirrored": false
    }).id('finality:zinc_singularity')
    // sequenced assembly singularities
    // blue ice singularity
    event.recipes.createSequencedAssembly([
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:blue_ice"}').withChance(100.0),
      ],'minecraft:blue_ice',[
      event.recipes.createFilling('extendedcrafting:singularity', [
        'extendedcrafting:singularity',
        Fluid.of('minecraft:water', 25)
      ]),
      event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:blue_ice']),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(16).id('finality:blue_ice_singularity')
    // coarse dirt singularity
    event.recipes.createSequencedAssembly([
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coarse_dirt"}').withChance(100.0),
      ],'minecraft:coarse_dirt', [
        event.recipes.createFilling('extendedcrafting:singularity', [
          'extendedcrafting:singularity',
          Fluid.of('minecraft:water', 25)
        ]),
      event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:dirt']),
      event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:gravel']),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(16).id('finality:coarse_dirt_singularity')
    // sand singularity
    event.recipes.createSequencedAssembly([
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sand"}').withChance(100.0),
      ],'minecraft:sand',[
      event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:sand']),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(16).id('finality:sand_singularity')
    // cobblestone singularity
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:cobblestone"}').withChance(100.0),
    ],'minecraft:cobblestone',[
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:lava', 25)
    ]),
    event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:cobblestone']),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(256).id('finality:cobblestone_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:framed_glass}').withChance(100.0),
    ],'create:framed_glass',[
      event.recipes.createFilling('extendedcrafting:singularity',[
        'extendedcrafting:singularity',
        Fluid.of('minecraft:lava', 25)
      ]),
      event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','create:framed_glass']),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    ]).transitionalItem('extendedcrafting:singularity').loops(32).id('finality:framed_glass_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:precision_mechanism"}').withChance(75.0),
    Item.of('16x create:crushed_gold_ore').withChance(25.0),
    Item.of('32x create:cogwheel').withChance(25.0),
    Item.of('8x create:large_cogwheel').withChance(25.0),
    '32x create:precision_mechanism'
    ],'create:precision_mechanism',[
      event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','create:cogwheel']),
      event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','create:large_cogwheel']),
      event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','extendedcrafting:redstone_nugget']),
      event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','create:precision_mechanism']),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
      event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(16).id('finality:precision_mechanism_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:sturdy_sheet"}').withChance(100.0)
  ],'create:sturdy_sheet',[
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:lava', 25)
    ]),
    event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','create:sturdy_sheet']),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(16).id('finality:sturdy_sheet_singularity')
    // concrete singularities
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_black"}').withChance(100.0)
  ],'minecraft:black_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:black_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:black_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_gray"}').withChance(100.0)
  ],'minecraft:gray_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:gray_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:gray_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_light_gray"}').withChance(100.0)
  ],'minecraft:light_gray_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:light_gray_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:light_gray_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_white"}').withChance(100.0)
  ],'minecraft:white_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:white_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:white_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_brown"}').withChance(100.0)
  ],'minecraft:brown_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:brown_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:brown_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_pink"}').withChance(100.0)
  ],'minecraft:pink_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:pink_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:pink_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_cyan"}').withChance(100.0)
  ],'minecraft:cyan_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:cyan_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:cyan_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_blue"}').withChance(100.0)
  ],'minecraft:blue_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:blue_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:blue_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_lime"}').withChance(100.0)
  ],'minecraft:lime_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:lime_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:lime_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_green"}').withChance(100.0)
  ],'minecraft:green_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:green_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:green_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_yellow"}').withChance(100.0)
  ],'minecraft:yellow_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:yellow_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:yellow_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_purple"}').withChance(100.0)
  ],'minecraft:purple_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:purple_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:purple_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_magenta"}').withChance(100.0)
  ],'minecraft:magenta_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:magenta_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:magenta_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_orange"}').withChance(100.0)
    ],'minecraft:orange_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:orange_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:orange_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_red"}').withChance(100.0)
    ],'minecraft:red_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:red_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:red_concrete_singularity')
    event.recipes.createSequencedAssembly([
    Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_light_blue"}').withChance(100.0)
    ],'minecraft:light_blue_concrete',[
    event.recipes.createDeploying('extendedcrafting:singularity',['extendedcrafting:singularity','minecraft:light_blue_concrete_powder']),
    event.recipes.createFilling('extendedcrafting:singularity',[
      'extendedcrafting:singularity',
      Fluid.of('minecraft:water', 500)
    ]),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity'),
    event.recipes.createPressing('extendedcrafting:singularity','extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:light_blue_concrete_singularity')
})