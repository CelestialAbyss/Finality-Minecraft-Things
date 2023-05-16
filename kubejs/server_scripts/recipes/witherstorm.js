let evil = 'graveyard:corruption'
onEvent('recipes', event => {
    event.shaped('witherstormmod:tainted_flesh_block', [
        'CCC',
        'CNC',
        'CCC'
    ], {
        C: evil,
        N: 'minecraft:netherrack'
    }).id('finality:tainted_flesh_block')
    event.shaped('witherstormmod:tainted_glass', [
        'CCC',
        'CGC',
        'CCC'
    ], {
        C: evil,
        G: '#forge:glass/colorless'
    }).id('finality:tainted_glass')
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 5000000,
        "input": {
          "item": "extendedcrafting:ender_star"
        },
        "ingredients": [
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          },
          {
            "item": "graveyard:corruption"
          }
        ],
        "result": {
          "item": "witherstormmod:withered_nether_star"
        }
    }).id('finality:withered_nether_star')
})