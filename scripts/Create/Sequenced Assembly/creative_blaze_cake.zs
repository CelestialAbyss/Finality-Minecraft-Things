import mods.createtweaker.IAssemblyRecipe;
<recipetype:create:sequenced_assembly>.addJsonRecipe("creative_blaze_cake", {
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "create:blaze_cake"
  },
  "loops": 1,
  "results": [
    {
      "chance": 120.0,
      "item": "create:creative_blaze_cake"
    },
    {
      "chance": 8.0,
      "item": "extendedcrafting:ultimate_singularity"
    },
    {
      "chance": 8.0,
      "item": "extendedcrafting:the_ultimate_catalyst"
    },
    {
      "chance": 5.0,
      "item": "extendedcrafting:the_ultimate_component"
    },
    {
      "chance": 3.0,
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "chance": 2.0,
      "item": "extendedcrafting:the_ultimate_nugget"
    },
    {
      "chance": 2.0,
      "item": "mysticalagriculture:supremium_essence"
    },
    {
      "item": "mysticalagriculture:prosperity_shard"
    },
    {
      "item": "extendedcrafting:ender_star"
    }
  ],
  "sequence": [
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
          "item": "extendedcrafting:ultimate_singularity"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "extendedcrafting:ultimate_singularity"
  }
}
);