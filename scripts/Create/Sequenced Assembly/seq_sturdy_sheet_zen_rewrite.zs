import mods.create.SequencedAssemblyManager;

// It's literally just 

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_zen_sturdy_sheet")
                                                      .transitionTo(<item:create:unprocessed_obsidian_sheet>)
                                                      .require(<item:create:powdered_obsidian>)
                                                      .loops(1)
                                                      .addOutput(<item:create:sturdy_sheet> * 1, 100)
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:lava> * 250))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:create:unprocessed_obsidian_sheet>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:create:unprocessed_obsidian_sheet>)));



/* I'm using this as a line of reference lol

SequencedAssemblyManager.addRecipe(builder as SequencedAssemblyRecipeBuilder) as void

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_blast_brick")
                                                      .transitionTo(<item:create:incomplete_large_cogwheel>)
                                                      .require(<item:create:andesite_alloy>)
                                                      .loops(3)
                                                      .addOutput(<item:create:large_cogwheel> * 6, 32)
                                                      .addOutput(<item:create:andesite_alloy>, 2)
                                                      .addOutput(<item:minecraft:andesite>, 1)
                                                      .addOutput(<item:create:cogwheel>, 1)
                                                      .addOutput(<item:minecraft:stick>, 1)
                                                      .addOutput(<item:minecraft:iron_nugget>, 1)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<tag:items:minecraft:planks>))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<tag:items:minecraft:wooden_buttons>))
                                                      .addStep<mods.createtweaker.CuttingRecipe>((rb) => rb.duration(50))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 50))
                                                      );
*/