onEvent('recipes', event => {
  event.remove({output: 'projecte:philosophers_stone'})
  event.shaped('projecte:philosophers_stone', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'),
    B: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
    C: Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:diamond"}')
  }).id('finality:ext_philosophers_stone')
  event.shaped('projecte:philosophers_stone', [
    'BAB',
    'ACA',
    'BAB'
  ], {
    A: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'),
    B: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
    C: Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:diamond"}')
  }).id('finality:ext_philosophers_stone_alt')
  // transmutation stations
  event.remove({id: 'projecte:transmutation_table'})
  event.shaped('projecte:transmutation_table', [
    'DED',
    'ESE',
    'DED'
  ], {
    D: 'projecte:dark_matter',
    E: 'extendedcrafting:elite_catalyst',
    S: 'projecte:philosophers_stone'
  }).id('finality:projecte_transmutation_table')
  event.remove({id: 'projecte:transmutation_tablet'})
  event.shaped('projecte:transmutation_tablet', [
    'RUR',
    'UTU',
    'RUR'
  ], {
    R: 'projecte:red_matter_block',
    U: 'extendedcrafting:ultimate_catalyst',
    T: 'projecte:transmutation_table'
  }).id('finality:projecte_transmutation_tablet')
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
  // red matter (ingredient)
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
  // watch
  event.remove({id: 'projecte:watch_of_flowing_time'})
  event.shaped('projecte:watch_of_flowing_time', [
    'DGD',
    'ECE',
    'DGD'
  ], {
    C: 'minecraft:clock',
    D: 'projecte:dark_matter',
    G: 'minecraft:glowstone',
    E: 'extendedcrafting:enhanced_ender_component'
  }).id('finality:projecte_time_controller')
})