// priority: 1
onEvent('item.modification', event => {
    event.modify('minecraft:wooden_sword', item => {
        item.maxDamage = 16
    })
    event.modify('minecraft:wooden_shovel', item => {
        item.maxDamage = 16
    })
    event.modify('minecraft:wooden_pickaxe', item => {
        item.maxDamage = 16
    })
    event.modify('minecraft:wooden_axe', item => {
        item.maxDamage = 16
    })
    event.modify('minecraft:wooden_hoe', item => {
        item.maxDamage = 16
    })
    event.modify('minecraft:stone_sword', item => {
        item.maxDamage = 128
    })
    event.modify('minecraft:stone_shovel', item => {
        item.maxDamage = 128
    })
    event.modify('minecraft:stone_pickaxe', item => {
        item.maxDamage = 128
    })
    event.modify('minecraft:stone_axe', item => {
        item.maxDamage = 128
    })
    event.modify('minecraft:stone_hoe', item => {
        item.maxDamage = 128
    })
    event.modify('minecraft:iron_sword', item => {
        item.maxDamage = 256
    })
    event.modify('minecraft:iron_shovel', item => {
        item.maxDamage = 256
    })
    event.modify('minecraft:iron_pickaxe', item => {
        item.maxDamage = 256
    })
    event.modify('minecraft:iron_axe', item => {
        item.maxDamage = 256
    })
    event.modify('minecraft:iron_hoe', item => {
        item.maxDamage = 256
    })	
	event.modify('minecraft:shears', item => {
        item.maxDamage = 256
    })
	event.modify('minecraft:shield', item => {
        item.maxDamage = 225
    })
    event.modify('minecraft:golden_sword', item => {
		item.maxDamage = 32
	})
	event.modify('minecraft:golden_shovel', item => {
		item.maxDamage = 32
	})
	event.modify('minecraft:golden_pickaxe', item => {
		item.maxDamage = 32
	})
	event.modify('minecraft:golden_axe', item => {
		item.maxDamage = 32
	})
	event.modify('minecraft:golden_hoe', item => {
		item.maxDamage = 32
	})
    event.modify('minecraft:diamond_sword', item => {
		item.maxDamage = 1024
	})
	event.modify('minecraft:diamond_shovel', item => {
		item.maxDamage = 1024
	})
	event.modify('minecraft:diamond_pickaxe', item => {
		item.maxDamage = 1024
	})
	event.modify('minecraft:diamond_axe', item => {
		item.maxDamage = 1024
	})
	event.modify('minecraft:diamond_hoe', item => {
		item.maxDamage = 1024
	})
    event.modify('minecraft:netherite_sword', item => {
		item.maxDamage = 2048
	})
	event.modify('minecraft:netherite_shovel', item => {
		item.maxDamage = 2048
	})
	event.modify('minecraft:netherite_pickaxe', item => {
		item.maxDamage = 2048
	})
	event.modify('minecraft:netherite_axe', item => {
		item.maxDamage = 2048
	})
	event.modify('minecraft:netherite_hoe', item => {
		item.maxDamage = 2048
	})
    // Armor durability is synchronized because it does not make sense as to why armor pieces have different durabilities.
    event.modify('minecraft:leather_helmet', item => {
		item.maxDamage = 128
	})
	event.modify('minecraft:leather_chestplate', item => {
		item.maxDamage = 128
	})
	event.modify('minecraft:leather_leggings', item => {
		item.maxDamage = 128
	})
	event.modify('minecraft:leather_boots', item => {
		item.maxDamage = 128
	})
    event.modify('minecraft:iron_helmet', item => {
		item.maxDamage = 256
	})
	event.modify('minecraft:iron_chestplate', item => {
		item.maxDamage = 256
	})
	event.modify('minecraft:iron_leggings', item => {
		item.maxDamage = 256
	})
	event.modify('minecraft:iron_boots', item => {
		item.maxDamage = 256
	})
    event.modify('minecraft:golden_helmet', item => {
		item.maxDamage = 128
	})
	event.modify('minecraft:golden_chestplate', item => {
		item.maxDamage = 128
	})
	event.modify('minecraft:golden_leggings', item => {
		item.maxDamage = 128
	})
	event.modify('minecraft:golden_boots', item => {
		item.maxDamage = 128
	})
    event.modify('minecraft:diamond_helmet', item => {
		item.maxDamage = 512
	})
	event.modify('minecraft:diamond_chestplate', item => {
		item.maxDamage = 512
	})
	event.modify('minecraft:diamond_leggings', item => {
		item.maxDamage = 512
	})
	event.modify('minecraft:diamond_boots', item => {
		item.maxDamage = 512
	})
    event.modify('minecraft:netherite_helmet', item => {
		item.maxDamage = 1024
	})
	event.modify('minecraft:netherite_chestplate', item => {
		item.maxDamage = 1024
	})
	event.modify('minecraft:netherite_leggings', item => {
		item.maxDamage = 1024
	})
	event.modify('minecraft:netherite_boots', item => {
		item.maxDamage = 1024
	})
})

// Written with the help of squoshi
/*onEvent('item.modification', event => {
    let vanilla_tool = [
		'minecraft:wooden_sword',
        'minecraft:wooden_shovel',
        'minecraft:wooden_pickaxe',
        'minecraft:wooden_axe',
        'minecraft:wooden_hoe',
		'minecraft:stone_sword',
        'minecraft:stone_shovel',
        'minecraft:stone_pickaxe',
        'minecraft:stone_axe',
        'minecraft:stone_hoe',
        'minecraft:iron_sword',
        'minecraft:iron_shovel',
        'minecraft:iron_pickaxe',
        'minecraft:iron_axe',
        'minecraft:iron_hoe',
        'minecraft:golden_sword',
        'minecraft:golden_shovel',
        'minecraft:golden_pickaxe',
        'minecraft:golden_axe',
        'minecraft:golden_hoe',
		'minecraft:diamond_sword',
        'minecraft:diamond_shovel',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_axe',
        'minecraft:diamond_hoe',
		'minecraft:netherite_sword',
        'minecraft:netherite_shovel',
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_axe',
        'minecraft:netherite_hoe',
    ].forEach(tool => {
		if (tool.contains('wooden')) {
			event.modify(tool, item => {
				item.maxDamage = 16
			})
		}
		if (tool.contains('stone')) {
			event.modify(tool, item => {
				item.maxDamage = 128
			})
		}
        if (tool.contains('iron')) {
            event.modify(tool, item => {
                item.maxDamage = 256
            })
        }
        if (tool.contains('golden')) {
            event.modify(tool, item => {
                item.maxDamage = 32
            })
        }
		if (tool.contains('diamond')) {
            event.modify(tool, item => {
                item.maxDamage = 1024
            })
        }
		if (tool.contains('netherite')) {
            event.modify(tool, item => {
                item.maxDamage = 2048
            })
        }
    })
})
*/

/*onEvent('item.modification', event => {
	event.modify('minecraft:item_name', item => {
		item.maxStackSize = 64
		item.fireResistant = true 
		item.maxDamage = numeric value
	})
})*/