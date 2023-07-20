onEvent('recipes', event => {
    event.remove({id: 'iceandfire:copper_block_to_ingots'})
    event.remove({id: 'iceandfire:copper_block'})
    event.remove({id: 'iceandfire:copper_ingot_to_nuggets'})
    event.shapeless('create:copper_nugget', ['iceandfire:copper_nugget']).id('finality:idf_copper_to_copper')
    event.shapeless('minecraft:copper_ingot', ['iceandfire:copper_ingot']).id('finality:idf_copper_ingot_to_copper_ingot')
    event.shapeless('minecraft:copper_block', ['iceandfire:copper_block']).id('finality:idf_copper_block_to_copper_block')
})