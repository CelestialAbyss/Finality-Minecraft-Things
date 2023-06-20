// priority: 0

console.info('Registering Finality items...')

let FIN = (id) => `finality:${id}`
// let I = '_'
// let INC = 'incomplete'
// let DRMT = 'dormant'
// let AWK = 'awakened'
// materials 3
// let CONC = 'concrete'
// minecraft materials
// let COBBL = 'cobblestone'
// let CRSDT = 'coarse_dirt'
// nature materials
// let SND = 'sand'
// let BLU_ICE = 'blue_ice'
// create materials
// let ANDT = 'andesite'
// let ZI = 'zinc'
// let CU = 'copper'
// let BRSS = 'brass'
// let RQRTZ = 'rose_quartz'
// let F_GLSS = 'framed_glass'
// let PRECISION = 'precision_mechanism'
// let STURDY = 'sturdy_sheet'
// colors
// let BLCK = 'black'
// let GRAY = 'gray'
// let LGRY = 'light_gray'
// let WHTE = 'white'
// let BRWN = 'brown'
// let PINK = 'pink'
// let CYAN = 'cyan'
// let BLUE = 'blue'
// let LIME = 'lime'
// let GREN = 'green'
// let YLLW = 'yellow'
// let PPRL = 'purple'
// let MGNT = 'magenta'
// let ORNG = 'orange'
// let RED = 'red'
// let LBLU = 'light_blue'
let NATR = ['blue_ice', 'sand', 'coarse_dirt', 'cobblestone']
let CMAT = ['andesite_alloy', 'zinc', 'copper', 'brass', 'rose_quartz', 'framed_glass', 'precision_mechanism', 'sturdy_sheet']
let CLLY = ['steel', 'bronze']
let DYE = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
// type 4
let SING = 'singularity'
let SCOR = 'singularity_core'
onEvent('item.registry', event => { // Register new items here event.create('example_item').displayName('Example Item')
	// minecraft core forgot what was supposed to be here
	// singularity related
	event.create(FIN(DRMT+I+SCOR)).texture('finality:item/dormant_singularity_core').maxStackSize(16)
	/*
	INCOMPLETE SINGULARITY CORES
	*/
	event.create(FIN(INC+I+BLU_ICE, SCOR))
	/*
	INCOMPLETE SINGULARITIES
	for use for making a singularity. dormant core to incomplete core to singularity
	follow format .displayName().texture().maxStackSize(1)
	*/
	// incomplete minecraft singularities
	NATR.forEach(insert => event.create(FIN(`incomplete_${insert}_singularity`)).texture(`finality:item/incomplete_singularities/nature/incomplete_${insert}`).maxStackSize(1))
	// event.create(FIN('incomplete_blue_ice_singularity')).texture('finality:item/incomplete_nature/incomplete_blue_ice').maxStackSize(1)
	// event.create(FIN('incomplete_coarse_dirt_singularity')).texture('finality:item/incomplete_nature/incomplete_coarse_dirt').maxStackSize(1)
	// event.create(FIN('incomplete_sand_singularity')).texture('finality:item/incomplete_nature/incomplete_sand').maxStackSize(1)
	// event.create(FIN('incomplete_cobblestone_singularity')).texture('finality:item/incomplete_nature/incomplete_cobblestone').maxStackSize(1)
	// incomplete create singularities
	CMAT.forEach(MTRL => event.create(FIN(`incomplete_${MTRL}_singularity`)).texture(`finality:item/incomplete_${MTRL}`).maxStackSize(1))
	// event.create(FIN('incomplete_andesite_alloy_singularity')).texture('finality:item/incomplete_andesite_core').maxStackSize(1)
	// event.create(FIN('incomplete_copper_singularity')).texture('finality:item/incomplete_copper_core').maxStackSize(1)
	// event.create(FIN('incomplete_zinc_singularity')).texture('finality:item/incomplete_zinc_core').maxStackSize(1)
	// event.create(FIN('incomplete_brass_singularity')).texture('finality:item/incomplete_brass_core').maxStackSize(1)
	// event.create(FIN('incomplete_rose_quartz_singularity')).texture('finality:item/incomplete_roseq_core').maxStackSize(1)
	// event.create(FIN('incomplete_framed_glass_singularity')).texture('finality:item/incomplete_framed_glass').maxStackSize(1)
	// event.create(FIN('incomplete_precision_mechanism_singularity')).texture().maxStackSize(1)
	// event.create(FIN('incomplete_sturdy_sheet_singularity')).texture().maxStackSize(1)
	// incomplete alloy singularity cores
	event.create(FIN('incomplete_steel_singularity')).texture('finality:item/incomplete_steel_core').maxStackSize(1)
	event.create(FIN('incomplete_bronze_singularity')).texture('finality:item/incomplete_bronze_core').maxStackSize(1)
	// incomplete concrete singularity cores
	Color.DYE.forEach(color => event.create(FIN(`incomplete_concrete_${color}_singularity`)).texture(`finality:item/incomplete_singularities/concrete/incomplete_concrete_${color}`).maxStackSize(1))
	// event.create(FIN('incomplete_concrete_' + BLCK + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_black').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + WHTE + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_white').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + PINK + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_pink').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + ORNG + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_orange').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + RED  + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_red').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + GRAY + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_gray').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + BRWN + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_brown').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + CYAN + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_cyan').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + GREN + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_green').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + LGRY + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_light_gray').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + LBLU + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_light_blue').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + LIME + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_lime').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + YLLW + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_yellow').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + BLUE + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_blue').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + MGNT + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_magenta').maxStackSize(1)
	// event.create(FIN('incomplete_concrete_' + PPRL + '_singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_purple').maxStackSize(1)
	/*
	ACTIVATED SINGULARITY CORES
	follow format .displayName().texture().maxStackSize(1)
	*/
	// activated singularity cores
	// work in progressevent.create('finality:andesite_singularity_core').displayName('Andesite Singularity Core').texture('finality:item/andesite_core').maxStackSize(8)
	// tools
	event.create('finality:final_pickaxe', 'pickaxe').tier('final_items').displayName('Particula Eversorem').texture('finality:item/final_pickaxe').maxStackSize(1).group('tools')
	event.create('finality:final_axe', 'axe').tier('final_items').displayName('Natura Exitium').texture('finality:item/final_axe').maxStackSize(1).group('tools')
	event.create('finality:final_shovel', 'shovel').tier('final_items').displayName('Terra Confractus').texture('finality:item/final_shovel').maxStackSize(1).group('tools')
	event.create('finality:final_hoe', 'hoe').tier('final_items').displayName('Agricola Manus').texture('finality:item/final_hoe').maxStackSize(1).group('tools')
	// weapons
	event.create('finality:final_sword', 'sword').tier('final_items').displayName('Corevis Ultimatum').texture('finality:item/final_sword').maxStackSize(1).group('combat')
	// armor
	event.create('finality:final_helmet', 'helmet').tier('final_armor').displayName('Conscientia Oculi').texture('finality:item/final_helmet').maxStackSize(1).group('combat')
	event.create('finality:final_chestplate', 'chestplate').tier('final_armor').displayName('Vitale Cordis').texture('finality:item/final_chestplate').maxStackSize(1).group('combat')
	event.create('finality:final_leggings', 'leggings').tier('final_armor').displayName('Universum Motus').texture('finality:item/final_leggings').maxStackSize(1).group('combat')
	event.create('finality:final_boots', 'boots').tier('final_armor').displayName('Gravitas Anchoram').texture('finality:item/final_boots').maxStackSize(1).group('combat')
})


onEvent('block.registry', event => { // Register new blocks here event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	// incomplete thermal machines
	event.create('finality:incomplete_thermal_energy_cell').material('metal').hardness(50.0).displayName('Incomplete Thermal Energy Cell Frame').textureAll('finality:block/incomplete_energy_cell').requiresTool(true)
	event.create('finality:incomplete_machine_furnace').material('metal').hardness(50.0).displayName('Incomplete Redstone Furnace').texture('front', 'texturepath').texture('side', 'texturepath')
	/*
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	*/
})
onEvent('fluid.registry', event => {
	event.create('finality:condensed_universal_entropy').thickTexture(0x7800FF).noBucket() // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
})

// tiers
onEvent('item.registry.tool_tiers', event => {
	event.add('final_items', tier => {
		tier.uses = -1 
		tier.speed = 255.0
		tier.attackDamageBonus = 65.0
		tier.level = 5
		tier.enchantmentValue = 30
	})
})
onEvent('item.registry.armor_tiers', event => {
	event.add('final_armor', tier => {
	  	tier.durabilityMultiplier = -1 // Each slot will be multiplied with [13, 15, 16, 11]
	  	tier.slotProtections = [8, 24, 16, 8] // Slot indicies are [FEET, LEGS, BODY, HEAD]
	  	tier.enchantmentValue = 30
	  	tier.equipSound = 'minecraft:item.armor.equip_netherite'
	  	tier.toughness = 5.0 // diamond has 2.0, netherite 3.0
	  	tier.knockbackResistance = 3.0
	})
})