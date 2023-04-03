import mods.create.SequencedAssemblyManager;
// Creativerite Ingot assembly
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_creativerite_ingot")
                                                      .transitionTo(<item:create:unprocessed_obsidian_sheet>)
                                                      .require(<item:minecraft:netherite_ingot>)
                                                      .loops(16)
                                                      .addOutput(<item:upgradednetherite_creative:creative_upgraded_netherite_ingot> * 1, 120)
                                                      .addOutput(<item:extendedcrafting:ultimate_singularity>, 8)
                                                      .addOutput(<item:minecraft:netherite_ingot>, 8)
                                                      .addOutput(<item:minecraft:netherite_ingot>, 5)
                                                      .addOutput(<item:minecraft:netherite_scrap>, 3)
                                                      .addOutput(<item:minecraft:ancient_debris>, 2)
                                                      .addOutput(<item:mysticalagriculture:prosperity_shard>, 1)
                                                      .addOutput(<item:minecraft:netherite_block>, 1)
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:lava> * 500))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:extendedcrafting:ultimate_singularity>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:create:unprocessed_obsidian_sheet>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:create:unprocessed_obsidian_sheet>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:create:unprocessed_obsidian_sheet>))
                                                      );

import crafttweaker.api.recipe.SmithingRecipeManager;
// SmithingRecipeManager.addRecipe(recipeName as string, result as IItemStack, base as IIngredient, addition as IIngredient)
//Leaving this here because EFFICIENCY for golden_apples!
smithing.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:items:forge:ingots/gold>);

smithing.addRecipe("creativerite_helmet", <item:upgradednetherite_creative:creative_upgraded_netherite_helmet>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_helmet>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_chestplate", <item:upgradednetherite_creative:creative_upgraded_netherite_chestplate>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_chestplate>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_leggings", <item:upgradednetherite_creative:creative_upgraded_netherite_leggings>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_leggings>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_boots", <item:upgradednetherite_creative:creative_upgraded_netherite_boots>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_boots>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_shield", <item:upgradednetherite_creative:creative_upgraded_netherite_shield>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_shield>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);

smithing.addRecipe("creativerite_hammer", <item:upgradedtools:creative_upgraded_netherite_hammer>, <item:upgradedtools:ultimate_upgraded_netherite_hammer>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_sword", <item:upgradednetherite_creative:creative_upgraded_netherite_sword>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_sword>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_pickaxe", <item:upgradednetherite_creative:creative_upgraded_netherite_pickaxe>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_pickaxe>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_shovel", <item:upgradednetherite_creative:creative_upgraded_netherite_shovel>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_shovel>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_axe", <item:upgradednetherite_creative:creative_upgraded_netherite_axe>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_axe>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_bow", <item:upgradednetherite_creative:creative_upgraded_netherite_bow>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_bow>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_cross", <item:upgradednetherite_creative:creative_upgraded_netherite_crossbow>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_crossbow>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_totem", <item:upgradednetherite_items:creative_upgraded_netherite_totem>, <item:upgradednetherite_items:ultimate_upgraded_netherite_totem>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);
smithing.addRecipe("creativerite_horse_armor", <item:upgradednetherite_creative:creative_upgraded_netherite_horse_armor>, <item:upgradednetherite_ultimate:ultimate_upgraded_netherite_horse_armor>, <item:upgradednetherite_creative:creative_upgraded_netherite_ingot>);


/*<recipetype:create:sequenced_assembly>.addJsonRecipe("creativerite_ingot", {
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "minecraft:netherite_ingot"
  },
  "loops": 1,
  "results": [
    {
      "chance": 120.0,
      "item": "upgradednetherite_creative:creative_upgraded_netherite_ingot"
    },
    {
      "chance": 8.0,
      "item": "extendedcrafting:ultimate_singularity"
    },
    {
      "chance": 8.0,
      "item": "minecraft:netherite_ingot"
    },
    {
      "chance": 5.0,
      "item": "minecraft:netherite_ingot"
    },
    {
      "chance": 3.0,
      "item": "minecraft:netherite_scrap"
    },
    {
      "chance": 2.0,
      "item": "minecraft:ancient_debris"
    },
    {
      "chance": 2.0,
      "item": "minecraft:netherite_scrap"
    },
    {
      "item": "mysticalagriculture:prosperity_shard"
    },
    {
      "item": "minecraft:netherite_block"
    }
  ],
  "sequence": [
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "minecraft:netherite_ingot"
        },
        {
          "fluid": "minecraft:lava",
          "nbt": {},
          "amount": 500
        }
      ],
      "results": [
        {
          "item": "upgradednetherite:fire_upgraded_netherite_ingot"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "extendedcrafting:ultimate_singularity"
        },
        {
          "item": "extendedcrafting:ultimate_singularity"
        }
      ],
      "results": [
        {
          "item": "extendedcrafting:ultimate_singularity"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "extendedcrafting:ultimate_singularity"
        },
      ],
      "results": [
        {
          "item": "upgradednetherite_creative:creative_upgraded_netherite_ingot"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "extendedcrafting:ultimate_singularity"
  }
}
);
*/