import mods.create.MixingManager;

// MixingManager.addRecipe(name as string, heat as HeatCondition, outputs as Percentaged<IItemStack>[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int) as void

<recipetype:create:mixing>.addRecipe("white_conrete_mix", <constant:create:heat_condition:none>, [<item:minecraft:white_concrete> % 100], [<item:minecraft:white_concrete_powder> * 1], [<fluid:minecraft:water> * 250], 200);