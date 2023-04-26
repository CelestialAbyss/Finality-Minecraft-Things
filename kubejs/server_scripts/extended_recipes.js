onEvent('recipes', event => {
    event.custom({
        'type': 'extendedcrafting:shaped_table',
        'pattern': [
          'ABA',
          'BCB',
          'ABA'
        ],
        'key': {
          'A': {
            'type': 'forge:nbt',
            'item': 'extendedcrafting:singularity',
            'count': 1,
            'nbt': '{Id:\'extendedcrafting:glowstone\'}'
          },
          'B': {
            'type': 'forge:nbt',
            'item': 'extendedcrafting:singularity',
            'count': 1,
            'nbt': '{Id:\'extendedcrafting:redstone\'}'
          },
          'C': {
            'type': 'forge:nbt',
            'item': 'extendedcrafting:singularity',
            'count': 1,
            'nbt': '{Id:\'extendedcrafting:diamond\'}'
          }
        },
        'result': {
          'item': 'minecraft:diamond_block'
        }
      }).id('extendedcrafting:')
})