onEvent('recipes', event => {
    event.remove({id: 'farmersdelight:skillet'})
    event.remove({id: 'farmersdelight:cooking_pot'})
    event.shaped('farmersdelight:skillet', [
        ' SS',
        ' SS',
        'B  '
    ], {
        S: 'create:iron_sheet',
        B: 'minecraft:brick'
    }).id('finality:farmersdelight_skillet')
    event.shaped('farmersdelight:cooking_pot', [
        'BWB',
        'SHS',
        'SSS'
    ], {
        S: 'create:iron_sheet',
        B: 'minecraft:brick',
        H: 'minecraft:water_bucket',
        W: 'minecraft:wooden_shovel'
    }).id('finality:farmersdelight_cooking_pot')
})