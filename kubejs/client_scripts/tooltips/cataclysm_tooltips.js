onEvent('item.tooltip', tooltip => {
    tooltip.addAdvanced('cataclysm:infernal_forge', (item, advanced, text) => {
        text.set(1, Text.of('§6Right click on a block to cause AoE damage around yourself, it sends mobs flying.')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
        text.set(2, Text.of('§6Also important to note, this is actually a pickaxe.'))
        text.add(3, Text.of('§6Shift for more info.'))
        text.add(4, Text.of('§5Press Shift to show additional info.'))
        text.add(5, Text.of('§5If any green text (not weapon stats) shows up below, then something has gone wrong with my corrections. - CelestialAbyss'))
    })
    tooltip.addAdvanced('cataclysm:monstrous_helm', (item, advanced, text) => {
        text.set(1, Text.of('§6Falling below half of your HP will push away entities and grant buffs.'))
        text.set(2, Text.of('§6You are given additional Defense, Knockback Resistance and Regeneration.'))
        text.add(3, Text.of('§5Press Shift to show additional info.'))
        text.add(4, Text.of('§5If any green text (not weapon stats) shows up below, then something has gone wrong with my corrections. - CelestialAbyss'))
    })
    tooltip.addAdvanced('cataclysm:the_incinerator', (item, advanced, text) => {
        text.set(1, Text.of('§6Hold right click for 3 seconds until you hear a sound.'))
        text.set(2, Text.of('§6After hearing the roar of the flames, let go to unleash devastation in a straight line.'))
        text.set(3, Text.of('§6WARNING: Dropped items in the line of fire will be destroyed!'))
        text.add(4, Text.of("§5Press Shift to show additional info."))
        text.add(5, Text.of('§5If any green text (not weapon stats) shows up below, then something has gone wrong with my corrections. - CelestialAbyss'))
    })
    tooltip.addAdvanced('cataclysm:bulwark_of_the_flame', (item, advanced, text) => {
        text.set(1, Text.of('§6Functions regularly like a shield, but with a charge ability.'))
        text.set(2, Text.of('§6While sneaking and blocking, let go of the right mouse button to charge forward.'))
        text.add(3, Text.of('§6Entities that collide with a wall are stunned from the impact and take additional damage.'))
        text.add(4, Text.of("§5Press Shift to show additional info."))
        text.add(5, Text.of('§5If any green text (not weapon stats) shows up below, then something has gone wrong with my corrections. - CelestialAbyss'))
    })
    tooltip.addAdvanced('cataclysm:void_scatter_arrow', (item, advanced, text) => {
        text.add(1, Text.of('§6This arrow explodes on impact, creating many fragments in the process.'))
        text.add(2, Text.of("§5Press Shift to show additional info."))
    })
    tooltip.addAdvanced('cataclysm:void_core', (item, advanced, text) => {
        text.add(1, Text.of('§6Right click on the ground to cause Void Rune spikes to erupt in a straight line in front of you.'))
        text.add(2, Text.of("§5Press Shift to show additional info."))
        text.add(3, Text.of('§5If any green text (not weapon stats) shows up below, then something has gone wrong with my corrections. - CelestialAbyss'))
    })
    tooltip.addAdvanced('cataclysm:gauntlet_of_guard', (item, advanced, text) => {
        text.set(1, Text.of('§6When held in your main hand, you can pull entities towards you by holding right click.'))
        text.add(2, Text.of('§6Be sure to give them a golden punch afterwards!'))
        text.add(3, Text.of("§5Press Shift to show additional info."))
        text.add(4, Text.of('§5If any green text (not weapon stats) shows up below, then something has gone wrong with my corrections. - CelestialAbyss'))
    })
    // Ignitium Armor corrections
    tooltip.addAdvanced('cataclysm:ignitium_helmet', (item, advanced, text) => {
        text.add(1, Text.of('§6Provides Lava Vision.'))
        text.add(2, Text.of("§5Press Shift to show additional info. Original developer tooltip text is below. - CelestialAbyss"))
    })
    tooltip.addAdvanced('cataclysm:ignitium_chestplate', (item, advanced, text) => {
        text.add(1, Text.of('§6You can combine an Elytra with this in the Smithing Table.'))
        text.add(2, Text.of("§5Press Shift to show additional info. Original developer tooltip text is below. - CelestialAbyss"))
    })
    tooltip.addAdvanced('cataclysm:ignitium_leggings', (item, advanced, text) => {
        text.add(1, Text.of('§6The developer, L_Ender says "Flame Reflex" ...but the item fails to give any form of Fire Resistance.'))
        text.add(2, Text.of("§5Press Shift to show additional info. Original developer tooltip text is below. - CelestialAbyss"))
    })
    tooltip.addAdvanced('cataclysm:ignitium_boots', (item, advanced, text) => {
        text.add(1, Text.of('§6Lava Walker, allows you to walk on lava.'))
        text.add(2, Text.of("§6DOES NOT provide Fire Resistance, even with the full set!"))
        text.add(3, Text.of("§5Press Shift to show additional info. Original developer tooltip text is below. - CelestialAbyss"))
    })
})