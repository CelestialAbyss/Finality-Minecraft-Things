// A few things I noticed while looking through the JSON recipe, there were multiple instances of minecraft:copper_nugget even though that does not exist.
// Create crushed ore also does not exist.
let CS = (id) => `create_sa:${id}`
onEvent('recipes', event => {
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:andesite_alloy"}')
    ], 'finality:dormant_singularity_core', [
        event.recipes.createFilling([FIN('incomplete_andesite_alloy_singularity')], [FIN('incomplete_andesite_alloy_singularity'), Fluid.of('finality:condensed_universal_entropy', 250)]),
        event.recipes.createDeploying([FIN('incomplete_andesite_alloy_singularity')], [FIN('incomplete_andesite_alloy_singularity'), 'create:andesite_alloy_block']),
        event.recipes.createPressing([FIN('incomplete_andesite_alloy_singularity')], [FIN('incomplete_andesite_alloy_singularity')]),
        event.recipes.createDeploying([FIN('incomplete_andesite_alloy_singularity')], [FIN('incomplete_andesite_alloy_singularity'), 'create:andesite_alloy_block']),
        event.recipes.createPressing([FIN('incomplete_andesite_alloy_singularity')], [FIN('incomplete_andesite_alloy_singularity')])
    ]).transitionalItem(CS('incomplete_heat_engine')).loops(3).id('finality:create_sa/heat_engine')
})

/*
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "item": "create:andesite_alloy"
        },
        "transitionalItem": {
          "item": "create_sa:incomplete_heat_engine"
        },
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create_sa:incomplete_heat_engine"
              },
              {
                "item": "create:cogwheel"
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_heat_engine"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create_sa:incomplete_heat_engine"
              },
              {
                "item": "create:large_cogwheel"
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_heat_engine"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create_sa:incomplete_heat_engine"
              },
              {
                "tag": "forge:nuggets/zinc"
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_heat_engine"
              }
            ]
          },
           {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create_sa:incomplete_heat_engine"
              },
              {
                 "tag": "forge:nuggets/copper"
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_heat_engine"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "create_sa:heat_engine",
            "chance": 180.0
          },
          {
            "item": "create:copper_sheet",
            "chance": 8.0
          },
          {
            "item": "create:andesite_alloy",
            "chance": 8.0
          },
          {
            "item": "create:cogwheel",
            "chance": 5.0
          },
          {
            "item": "create:shaft",
            "chance": 2.0
          },
          {
            "item": "create:crushed_zinc_ore",
            "chance": 2.0
          },
          {
            "item": "create:copper_nugget",
            "chance": 2.0
          },
          {
            "item": "minecraft:iron_ingot"
          },
          {
            "item": "minecraft:compass"
          }
        ],
        "loops": 3
      }).id('finality:create_sa_heat_engine')
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "tag": "forge:plates/copper"
        },
        "transitionalItem": {
          "item": "create_sa:incomplete_hydraulic_engine"
        },
        "sequence": [
           {
            "type": "create:filling",
            "ingredients": [
              {
                "item": "create_sa:incomplete_hydraulic_engine"
              },
              {
                "fluid": "minecraft:water",
                "nbt": {},
                "amount": 250
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_hydraulic_engine"
              }
            ]
          },
          {
            "type": "create:pressing",
            "ingredients": [
              {
                "item": "create_sa:incomplete_hydraulic_engine"
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_hydraulic_engine"
              }
            ]
          },
          {
            "type": "create:pressing",
            "ingredients": [
              {
                "item": "create_sa:incomplete_hydraulic_engine"
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_hydraulic_engine"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "create_sa:hydraulic_engine",
            "chance": 120.0
          },
          {
            "item": "create:copper_sheet",
            "chance": 8.0
          },
          {
            "item": "create:crushed_copper_ore",
            "chance": 2.0
          },
          {
            "item": "create:copper_nugget",
            "chance": 2.0
          }
        ],
        "loops": 3
      }).id('finality:create_sa_hydraulic_engine')
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "tag": "forge:plates/brass"
        },
        "transitionalItem": {
          "item": "create_sa:incomplete_steam_engine"
        },
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create_sa:incomplete_steam_engine"
              },
              {
                "item": "create:cogwheel"
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_steam_engine"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create_sa:incomplete_steam_engine"
              },
              {
                "item": "create:large_cogwheel"
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_steam_engine"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create_sa:incomplete_steam_engine"
              },
              {
                "item": "create:propeller"
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_steam_engine"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create_sa:incomplete_steam_engine"
              },
              {
                "item": "create:andesite_alloy"
              }
            ],
            "results": [
              {
                "item": "create_sa:incomplete_steam_engine"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "create_sa:steam_engine",
            "chance": 180.0
          },
          {
            "item": "create:brass_sheet",
            "chance": 8.0
          },
          {
            "item": "create:andesite_alloy",
            "chance": 8.0
          },
          {
            "item": "create:cogwheel",
            "chance": 5.0
          },
          {
            "item": "create:shaft",
            "chance": 2.0
          },
          {
            "item": "mysticalagriculture:brass_essence",
            "chance": 2.0
          },
          {
            "item": "create:brass_nugget",
            "chance": 2.0
          },
          {
            "item": "minecraft:iron_ingot"
          },
          {
            "item": "minecraft:compass"
          }
        ],
        "loops": 3
      }).id('finality:create_sa_steam_engine')
*/
/* Old JSON recipes directly from create-stuff-additions1.18.2_v2.0.2c.jar
{
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "forge:plates/brass"
  },
  "transitionalItem": {
    "item": "create_sa:incomplete_steam_engine"
  },
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:cogwheel"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:large_cogwheel"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:propeller"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:andesite_alloy"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    }
  ],
  "results": [
    {
      "item": "create_sa:steam_engine",
      "chance": 180.0
    },
    {
      "item": "create:brass_sheet",
      "chance": 8.0
    },
    {
      "item": "create:andesite_alloy",
      "chance": 8.0
    },
    {
      "item": "create:cogwheel",
      "chance": 5.0
    },
    {
      "item": "create:shaft",
      "chance": 2.0
    },
    {
      "item": "create:crushed_brass_ore",
      "chance": 2.0
    },
    {
      "item": "minecraft:brass_nugget",
      "chance": 2.0
    },
    {
      "item": "minecraft:iron_ingot"
    },
    {
      "item": "minecraft:compass"
    }
  ],
  "loops": 3
}

{
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "forge:plates/copper"
  },
  "transitionalItem": {
    "item": "create_sa:incomplete_hydraulic_engine"
  },
  "sequence": [
     {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        },
        {
          "fluid": "minecraft:water",
          "nbt": {},
          "amount": 250
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        }
      ]
    }
  ],
  "results": [
    {
      "item": "create_sa:hydraulic_engine",
      "chance": 120.0
    },
    {
      "item": "create:copper_sheet",
      "chance": 8.0
    },
    {
      "item": "create:crushed_copper_ore",
      "chance": 2.0
    },
    {
      "item": "minecraft:copper_nugget",
      "chance": 2.0
    }
  ],
  "loops": 3
}

{
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "create:andesite_alloy"
  },
  "transitionalItem": {
    "item": "create_sa:incomplete_heat_engine"
  },
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_heat_engine"
        },
        {
          "item": "create:cogwheel"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_heat_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_heat_engine"
        },
        {
          "item": "create:large_cogwheel"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_heat_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_heat_engine"
        },
        {
          "tag": "forge:nuggets/zinc"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_heat_engine"
        }
      ]
    },
     {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_heat_engine"
        },
        {
           "tag": "forge:nuggets/copper"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_heat_engine"
        }
      ]
    }
  ],
  "results": [
    {
      "item": "create_sa:heat_engine",
      "chance": 180.0
    },
    {
      "item": "create:copper_sheet",
      "chance": 8.0
    },
    {
      "item": "create:andesite_alloy",
      "chance": 8.0
    },
    {
      "item": "create:cogwheel",
      "chance": 5.0
    },
    {
      "item": "create:shaft",
      "chance": 2.0
    },
    {
      "item": "create:crushed_zinc_ore",
      "chance": 2.0
    },
    {
      "item": "minecraft:copper_nugget",
      "chance": 2.0
    },
    {
      "item": "minecraft:iron_ingot"
    },
    {
      "item": "minecraft:compass"
    }
  ],
  "loops": 3
}
*/