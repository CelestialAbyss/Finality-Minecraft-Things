onEvent('recipes', event => {
  event.remove({output: 'projecte:philosophers_stone'})
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'ABA',
      'BCB',
      'ABA'
      ],
      key: {
        A: {
          type: 'forge:nbt',
          item: 'extendedcrafting:singularity',
          count: 1,
          nbt: '{Id:\'extendedcrafting:glowstone\'}'
          },
        B: {
          type: 'forge:nbt',
          item: 'extendedcrafting:singularity',
          count: 1,
          nbt: '{Id:\'extendedcrafting:redstone\'}'
          },
        C: {
          type: 'forge:nbt',
          item: 'extendedcrafting:singularity',
          count: 1,
          nbt: '{Id:\'extendedcrafting:diamond\'}'
          }
        },
        result: {
          item: 'projecte:philosophers_stone'
        }
    }).id('finality:ext_philosophers_stone')
  event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
          'BAB',
          'ACA',
          'BAB'
        ],
        key: {
          A: {
            type: 'forge:nbt',
            item: 'extendedcrafting:singularity',
            count: 1,
            nbt: '{Id:\'extendedcrafting:glowstone\'}'
          },
          B: {
            type: 'forge:nbt',
            item: 'extendedcrafting:singularity',
            count: 1,
            nbt: '{Id:\'extendedcrafting:redstone\'}'
          },
          C: {
            type: 'forge:nbt',
            item: 'extendedcrafting:singularity',
            count: 1,
            nbt: '{Id:\'extendedcrafting:diamond\'}'
          }
        },
        result: {
          item: 'projecte:philosophers_stone'
        }
    }).id('finality:ext_philosophers_stone_alt')
  // dark matter (ingredient)
  event.remove({output: 'projecte:dark_matter'})
  event.shaped('projecte:dark_matter', [
    'AAA',
    'AEA',
    'AAA'
  ], {
    A: 'projecte:aeternalis_fuel',
    E: 'extendedcrafting:elite_catalyst'
  }).id('finality:crafting_dm')
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'AAA',
      'AEA',
      'AAA'
    ],
    key: {
      A: 'projecte:aeternalis_fuel',
      E: 'extendedcrafting:elite_catalyst'
    },
    result: {
      item: 'projecte:dark_matter'
    }
  }).id('finality:basic_dm')
  // red matter (ingredient)
  // rm craftingtable
  event.remove({output: 'projecte:red_matter'})
  event.shaped('projecte:red_matter', [
    'ADA',
    'DUD',
    'ADA'
  ], {
    A: 'projecte:aeternalis_fuel',
    D: 'projecte:dark_matter',
    U: 'extendedcrafting:ultimate_catalyst'
  }).id('finality:crafting_rm')
  // basic projecte rm 
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'ADA',
      'DUD',
      'ADA'
    ],
    key: {
      A: 'projecte:aeternalis_fuel',
      D: 'projecte:dark_matter',
      U: 'extendedcrafting:ultimate_catalyst'
    },
    result: {
      item: 'projecte:red_matter'
    }
  }).id('finality:basic_rm')
})