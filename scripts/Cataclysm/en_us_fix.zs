// en_us 1.18.2 tooltip correction for Cataclysm's items.
<item:cataclysm:infernal_forge>.removeTooltip("When in main hand, you can hit the block with a right click to cause wide area damage.");
<item:cataclysm:infernal_forge>.removeTooltip("(FYI, this is a pickaxe)");
<item:cataclysm:infernal_forge>.modifyTooltip((item, tooltip, flags) => {
    tooltip.insert(1, "§6Right click on a block to cause AoE damage around yourself, it sends mobs flying.");
    tooltip.insert(2, "§6Also important to note, this is actually a pickaxe.");
    tooltip.insert(3, "§5CelestialAbyss: If any green text (not the weapon stats) shows up below, then something has changed in the item's tooltip.");
});
<item:cataclysm:monstrous_helm>.removeTooltip("If you fall below half of your hp while wearing it, you will pushing nearby monster and");
<item:cataclysm:monstrous_helm>.removeTooltip("gain buffs that strengthen defense, knockback resistance, and regeneration.");
<item:cataclysm:monstrous_helm>.modifyTooltip((item, tooltip, flags) => {
    tooltip.insert(1, "§6Falling below half of your HP will push away entities and grant buffs.");
    tooltip.insert(2, "§6You are given additional Defense, Knockback Resistance and Regeneration.");
    tooltip.insert(3, "§5CelestialAbyss: If any green text (not the weapon stats) shows up below, then something has changed in the item's tooltip.");
});
<item:cataclysm:the_incinerator>.removeTooltip("Full charge takes 3 seconds, If you stop holding right click after 3 second");
<item:cataclysm:the_incinerator>.removeTooltip("you can summon a flame strike in the direction of looking at.");
<item:cataclysm:the_incinerator>.removeTooltip("WARNING: The item may be lost as the flame strike explodes when it disappears.");
<item:cataclysm:the_incinerator>.modifyTooltip((item, tooltip, flags) => {
    // tooltip is a list, so you can add and remove and whatever
    tooltip.insert(1, "§6Hold right click for 3 seconds until you hear a sound.");
    tooltip.insert(2, "§6After hearing the roar of the flames, let go to unleash devastation in a straight line.");
    tooltip.insert(3, "§6WARNING: Dropped items in the line of fire will be destroyed!");
    tooltip.insert(4, "§5CelestialAbyss: If any green text (not the weapon stats) shows up below, then something has changed in the item's tooltip.");
});
<item:cataclysm:bulwark_of_the_flame>.removeTooltip("If you stop holding right click while sneak, user will charge forward and give damage to the entities in front of you.");
<item:cataclysm:bulwark_of_the_flame>.removeTooltip("if target get hitted by wall, target take more damage and gain stun");
<item:cataclysm:bulwark_of_the_flame>.modifyTooltip((item, tooltip, flags) => {
    tooltip.insert(1, "§6Functions regularly like a shield, but with a charge ability.");
    tooltip.insert(2, "§6While sneaking and blocking, let go of the right mouse button to charge forward.");
    tooltip.insert(3, "§6Entities that collide with a wall are stunned from the impact and take additional damage.");
    tooltip.insert(4, "§5CelestialAbyss: If any green text (not the weapon stats) shows up below, then something has changed in the item's tooltip.");
});
<item:cataclysm:void_scatter_arrow>.modifyTooltip((item, tooltip, flags) => {
    tooltip.insert(1, "§6This arrow explodes on impact, creating many fragments in the process.");
    tooltip.insert(2, "§5CelestialAbyss: If any green text (not the weapon stats) shows up below, then something has changed in the item's tooltip.");
});
<item:cataclysm:void_core>.removeTooltip("when rignt click, you can summon void rune.");
<item:cataclysm:void_core>.modifyTooltip((item, tooltip, flags) => {
    tooltip.insert(1, "§6Right click on the ground to cause Void Rune spikes to erupt in a straight line in front of you.");
    tooltip.insert(2, "§5CelestialAbyss: If any green text (not the weapon stats) shows up below, then something has changed in the item's tooltip.");
});
<item:cataclysm:gauntlet_of_guard>.removeTooltip("When in main hand, you can pull entity with a right click.");
<item:cataclysm:gauntlet_of_guard>.modifyTooltip((item, tooltip, flags) => {
    tooltip.insert(1, "§6When held in your main hand, you can pull entities towards you by holding right click.");
    tooltip.insert(2, "§6Be sure to give them a golden punch afterwards!");
    tooltip.insert(3, "§5CelestialAbyss: If any green text (not the weapon stats) shows up below, then something has changed in the item's tooltip.");
});
