// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	// minecraft core

	// incomplete singularity cores (create related)
	event.create('finality:incomplete_andesite_singularity_core').displayName('Incomplete Andesite Singularity Core').texture('finality:item/incomplete_andesite_core').maxStackSize(1)
	event.create('finality:incomplete_copper_singularity_core').displayName('Incomplete Copper Singularity Core').texture('finality:item/incomplete').maxStackSize(1)
	event.create('finality:incomplete_zinc_singularity_core').displayName('Incomplete Zinc Singularity Core').texture('finality:item/incomplete').maxStackSize(1)
	event.create('finality:incomplete_brass_singularity_core').displayName('Incomplete Brass Singularity Core').texture('finality:item/incomplete').maxStackSize(1)
	event.create('finality:incomplete_rosequartz_singularity_core').displayName('Incomplete Rose Quartz Singularity Core').texture('finality:item/incomplete').maxStackSize(1)
	// incomplete singularity cores (alloys)
	event.create('finality:incomplete_steel_singularity_core').displayName('Incomplete Steel Singularity Core').texture('finality:item/incomplete').maxStackSize(1)
	event.create('finality:incomplete_bronze_singularity_core').displayName('Incomplete Bronze Singularity Core').texture('finality:item/incomplete').maxStackSize(1)
	// incomplete singularity cores (concrete)
	event.create('finality:incomplete_black_concrete_singularity_core').displayName('Incomplete Black Concrete Singularity Core').texture('finality:item/incomplete').maxStackSize(1)

	// activated singularity cores
	event.create('finality:andesite_singularity_core').displayName('Andesite Singularity Core').texture('finality:item/andesite_core').maxStackSize(8)

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
	// event.create('example_block').maaterial('wood').hardness(1.0).displayName('Example Block')
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
	event.add('tier_id', tier => {
	  tier.durabilityMultiplier = -1 // Each slot will be multiplied with [13, 15, 16, 11]
	  tier.slotProtections = [8, 24, 16, 8] // Slot indicies are [FEET, LEGS, BODY, HEAD]
	  tier.enchantmentValue = 30
	  tier.equipSound = 'minecraft:item.armor.equip_netherite'
	  tier.toughness = 5.0 // diamond has 2.0, netherite 3.0
	  tier.knockbackResistance = 3.0
	})
  })