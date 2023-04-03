// Dark Matter (ingredient)
recipes.removeByName("projecte:dark_matter");
craftingTable.addShaped("crafting_dm", <item:projecte:dark_matter>, [
    [<item:projecte:aeternalis_fuel>,<item:projecte:aeternalis_fuel>,<item:projecte:aeternalis_fuel>],
    [<item:projecte:aeternalis_fuel>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:diamond"}), <item:projecte:aeternalis_fuel>],
    [<item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>]
]);
mods.extendedcrafting.TableCrafting.addShaped("basic_dm", 0, <item:projecte:dark_matter>, [
	[<item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>], 
	[<item:projecte:aeternalis_fuel>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:diamond"}), <item:projecte:aeternalis_fuel>], 
	[<item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>]
]);
// Red Matter (ingredient)
recipes.removeByName("projecte:red_matter");
recipes.removeByName("projecte:red_matter_alt");
craftingTable.addShaped("crafting_rm", <item:projecte:red_matter>, [
    [<item:projecte:aeternalis_fuel>,<item:projecte:dark_matter>,<item:projecte:aeternalis_fuel>],
    [<item:projecte:dark_matter>,<item:extendedcrafting:the_ultimate_catalyst>,<item:projecte:dark_matter>],
    [<item:projecte:aeternalis_fuel>,<item:projecte:dark_matter>,<item:projecte:aeternalis_fuel>]
]);
mods.extendedcrafting.TableCrafting.addShaped("basic_rm", 0, <item:projecte:red_matter>, [
    [<item:projecte:aeternalis_fuel>,<item:projecte:dark_matter>,<item:projecte:aeternalis_fuel>],
    [<item:projecte:dark_matter>,<item:extendedcrafting:the_ultimate_catalyst>,<item:projecte:dark_matter>],
    [<item:projecte:aeternalis_fuel>,<item:projecte:dark_matter>,<item:projecte:aeternalis_fuel>]
]);