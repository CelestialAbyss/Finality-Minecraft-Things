let evil = 'graveyard:corruption'
let essence = 'mysticalagradditions:insanium_essence'
onEvent('recipes', event => {
    event.shaped('witherstormmod:tainted_flesh_block', [
        'CEC',
        'ENE',
        'CEC'
    ], {
        C: evil,
        E: essence,
        N: 'minecraft:netherrack'
    }).id('finality:tainted_flesh_block')
    event.shaped('witherstormmod:tainted_glass', [
        'CEC',
        'EGE',
        'CEC'
    ], {
        C: evil,
        E: essence,
        G: '#forge:glass/colorless'
    }).id('finality:tainted_glass')
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 5000000,
        "powerRate": 4500000,
        "input": { "item": "extendedcrafting:ender_star" },
        "ingredients": [
            { "item": "graveyard:corruption" },
            { "item": "mysticalagradditions:insanium_essence" },
            { "item": "graveyard:corruption" },
            { "item": "mysticalagradditions:insanium_essence" },
            { "item": "graveyard:corruption" },
            { "item": "mysticalagradditions:insanium_essence" },
            { "item": "graveyard:corruption" },
            { "item": "graveyard:corruption" },
            { "item": "mysticalagradditions:insanium_essence" },
            { "item": "graveyard:corruption" },
            { "item": "mysticalagradditions:insanium_essence" },
            { "item": "graveyard:corruption" },
            { "item": "mysticalagradditions:insanium_essence" },
            { "item": "graveyard:corruption" },
            { "item": "mysticalagradditions:insanium_essence" },
            { "item": "graveyard:corruption" }
        ],
        "result": { "item": "witherstormmod:withered_nether_star" }
    }).id('finality:withered_nether_star')
})