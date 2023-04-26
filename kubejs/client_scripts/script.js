// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide('avaritia:iron_singularity')
	event.hide('avaritia:gold_singularity')
	event.hide('avaritia:lapis_singularity')
	event.hide('avaritia:redstone_singularity')
	event.hide('avaritia:quartz_singularity')
	event.hide('avaritia:copper_singularity')
	event.hide('avaritia:tin_singularity')
	event.hide('avaritia:lead_singularity')
	event.hide('avaritia:silver_singularity')
	event.hide('avaritia:nickel_singularity')
	event.hide('avaritia:diamond_singularity')
	event.hide('avaritia:emerald_singularity')
	event.hide('avaritia:fluxed_singularity')
	event.hide('avaritia:platinum_singularity')
	event.hide('avaritia:iridium_singularity')
	event.hide('avaritia:netherite_singularity')
	event.hide('avaritia:amethyst_singularity')
	event.hide('avaritia:compressor')
	event.hide('avaritia:neutron_collector')
})