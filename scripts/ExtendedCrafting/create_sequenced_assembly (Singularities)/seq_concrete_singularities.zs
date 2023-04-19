import mods.create.SequencedAssemblyManager;

// black Concrrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_black_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:black_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_black"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:black_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );
// gray Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_gray_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:gray_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_gray"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:white_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// light_gray Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_light_gray_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:light_gray_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_light_gray"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:light_gray_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// white Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_white_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:white_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_white"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:white_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// brown Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_brown_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:brown_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_brown"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:brown_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// pink Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_pink_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:pink_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_pink"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:pink_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// cyan Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_cyan_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:cyan_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_cyan"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:cyan_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// blue Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_blue_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:blue_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_blue"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:blue_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// lime Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_lime_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:lime_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_lime"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:lime_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// green Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_green_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:green_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_green"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:green_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// yellow Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_yellow_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:yellow_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_yellow"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:yellow_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// purple Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_purple_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:purple_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_purple"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:purple_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// magenta Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_magenta_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:magenta_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_magenta"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:magenta_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// orange Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_orange_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:orange_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_orange"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:orange_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// red Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_red_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:red_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_red"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:red_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

// light_blue Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_light_blue_concrete_singularity")
                                                      .transitionTo(<item:extendedcrafting:singularity>)
                                                      .require(<item:minecraft:light_blue_concrete>)
                                                      .loops(128)
                                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_light_blue"}) * 1, 100)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:light_blue_concrete_powder>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                                      );

