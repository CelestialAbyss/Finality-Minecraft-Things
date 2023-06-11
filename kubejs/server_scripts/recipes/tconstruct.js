onEvent('recipes', event => {
    event.remove({id: 'tconstruct:smeltery/seared/grout'})
    event.remove({id: 'tconstruct:smeltery/seared/grout_multiple'})
    event.recipes.createMixing('2x tconstruct:grout', ['minecraft:clay_ball', '#minecraft:sand', 'minecraft:gravel']).id('finality:tconstruct/grout')
    event.recipes.createMixing('9x tconstruct:grout', ['minecraft:clay', '4x #minecraft:sand', '4x: minecraft:gravel']).id('finality:tconstruct/grout_batch')
})