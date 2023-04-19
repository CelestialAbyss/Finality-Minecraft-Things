import mods.create.SequencedAssemblyManager;

// SequencedAssemblyManager.addRecipe(builder as SequencedAssemblyRecipeBuilder) as void

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_blue_ice_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:blue_ice>)
                                                      .loops(16)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:blue_ice"}) * 1, 100)
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 25))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:blue_ice>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );
