// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

// modpackid shortcut
let FIN = (id) => `finality:${id}`

// concrete
let concr_col = ['black', 'gray', 'light_gray', 'white', 'brown', 'pink', 'light_blue', '']

// nature
let nature = ['blue_ice', 'coarse_dirt', 'sand']

// concrete singularity shortcuts

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	// minecraft core forgot what was supposed to be here
	// singularity related
	event.create('finality:dormant_singularity_core').texture('finality:item/dormant_singularity_core').maxStackSize(16)
	/*
	INCOMPLETE SINGULARITY CORES SECTION
	follow format .displayName().texture().maxStackSize(1)
	*/
	// incomplete minecraft singularity cores
	event.create(FIN('incomplete_blue_ice_singularity')).texture('finality:item/incomplete_nature/incomplete_blue_ice').maxStackSize(1)
	event.create(FIN('incomplete_coarse_dirt_singularity')).texture('finality:item/incomplete_nature/incomplete_coarse_dirt').maxStackSize(1)
	event.create(FIN('incomplete_sand_singularity')).texture('finality:item/incomplete_nature/incomplete_sand').maxStackSize(1)
	event.create(FIN('incomplete_cobblestone_singularity')).texture('finality:item/incomplete_nature/incomplete_cobblestone').maxStackSize(1)
	// incomplete create singularity cores
	event.create(FIN('incomplete_andesite_singularity')).displayName('Incomplete Andesite Singularity Core').texture('finality:item/incomplete_andesite_core').maxStackSize(1)
	event.create(FIN('incomplete_copper_singularity')).displayName('Incomplete Copper Singularity Core').texture('finality:item/incomplete_copper_core').maxStackSize(1)
	event.create(FIN('incomplete_zinc_singularity')).displayName('Incomplete Zinc Singularity Core').texture('finality:item/incomplete_zinc_core').maxStackSize(1)
	event.create(FIN('incomplete_brass_singularity')).displayName('Incomplete Brass Singularity Core').texture('finality:item/incomplete_brass_core').maxStackSize(1)
	event.create(FIN('incomplete_rosequartz_singularity')).displayName('Incomplete Rose Quartz Singularity Core').texture('finality:item/incomplete_roseq_core').maxStackSize(1)
	event.create(FIN('incomplete_framed_glass_singularity')).displayName('Incomplete Framed Glass Singularity').maxStackSize(1)
	event.create(FIN('incomplete_precision_mechanism_singularity')).displayName('').maxStackSize(1)
	event.create(FIN('incomplete_sturdy_sheet_singularity')).displayName('').maxStackSize(1)
	// incomplete alloy singularity cores
	event.create(FIN('incomplete_steel_singularity')).displayName('Incomplete Steel Singularity Core').texture('finality:item/incomplete_steel_core').maxStackSize(1)
	event.create(FIN('incomplete_bronze_singularity')).displayName('Incomplete Bronze Singularity Core').texture('finality:item/incomplete_bronze_core').maxStackSize(1)
	// incomplete concrete singularity cores
	event.create(FIN('incomplete_concrete_black_singularity')).displayName('Incomplete Black Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_black').maxStackSize(1)
	event.create(FIN('incomplete_concrete_white_singularity')).displayName('Incomplete White Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_white').maxStackSize(1)
	event.create(FIN('incomplete_concrete_pink_singularity')).displayName('Incomplete Pink Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_pink').maxStackSize(1)
	event.create(FIN('incomplete_concrete_orange_singularity')).displayName('Incomplete Orange Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_orange').maxStackSize(1)
	event.create(FIN('incomplete_concrete_red_singularity')).displayName('Incomplete Red Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_red').maxStackSize(1)
	event.create(FIN('incomplete_concrete_gray_singularity')).displayName('Incomplete Gray Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_gray').maxStackSize(1)
	event.create(FIN('incomplete_concrete_brown_singularity')).displayName('Incomplete Brown Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_brown').maxStackSize(1)
	event.create(FIN('incomplete_concrete_cyan_singularity')).displayName('Incomplete Cyan Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_cyan').maxStackSize(1)
	event.create(FIN('incomplete_concrete_green_singularity')).displayName('Incomplete Green Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_green').maxStackSize(1)
	event.create(FIN('incomplete_concrete_light_gray_singularity')).displayName('Incomplete Light Gray Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_light_gray').maxStackSize(1)
	event.create(FIN('incomplete_concrete_light_blue_singularity')).displayName('Incomplete Light Blue Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_light_blue').maxStackSize(1)
	event.create(FIN('incomplete_concrete_lime_singularity')).displayName('Incomplete Lime Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_lime').maxStackSize(1)
	event.create(FIN('incomplete_concrete_yellow_singularity')).displayName('Incomplete Yellow Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_yellow').maxStackSize(1)
	event.create(FIN('incomplete_concrete_blue_singularity')).displayName('Incomplete Blue Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_blue').maxStackSize(1)
	event.create(FIN('incomplete_concrete_magenta_singularity')).displayName('Incomplete Magenta Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_magenta').maxStackSize(1)
	event.create(FIN('incomplete_concrete_purple_singularity')).displayName('Incomplete Purple Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_purple').maxStackSize(1)
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

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	
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