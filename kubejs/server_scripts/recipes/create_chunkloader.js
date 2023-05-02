onEvent('recipes', event => {
    event.remove({id: 'createchunkloading:crafting/chunk_loader'})
    event.recipes.createMechanicalCrafting('createchunkloading:chunk_loader', [
        ' E ',
        'EBE',
        ' E '
    ], {
        E: 'minecraft:emerald',
        B: 'minecraft:beacon'
    }).id('finality:contraption_chunk_loader')
})