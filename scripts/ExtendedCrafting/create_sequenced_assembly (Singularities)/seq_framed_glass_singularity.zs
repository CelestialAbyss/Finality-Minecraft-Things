import mods.create.SequencedAssemblyManager;

// SequencedAssemblyManager.addRecipe(builder as SequencedAssemblyRecipeBuilder) as void

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_framed_glass_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:create:framed_glass>)
                                                      .loops(32)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:framed_glass"}) * 1, 100)
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:lava> * 25))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:framed_glass>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );
