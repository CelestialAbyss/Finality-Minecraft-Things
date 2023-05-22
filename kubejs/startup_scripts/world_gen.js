onEvent('worldgen.remove', event => {

})
onEvent('worldgen.add', event => {
    event.addOre(ore => {
      ore.addTarget('iceandfire:copper_ore', 'minecraft:copper_ore')       // replace iceandfire copper ore with minecraft copper ore
      ore.addTarget('iceandfire:silver_ore', 'occultism:silver_ore')
    })
})