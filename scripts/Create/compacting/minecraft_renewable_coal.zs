import mods.createtweaker.CompactingRecipe;
// Remember, output is always the first [] on the very left! Ingredients are grouped on the right side.
<recipetype:create:compacting>.addRecipe("renewable_coal", <constant:create:heat_condition:heated>, [<item:minecraft:coal>], [<item:minecraft:dried_kelp_block> * 9], [<fluid:minecraft:lava> * 25]);

// Legacy JSON recipe below
/*<recipetype:create:compacting>.addJsonRecipe("coal", {
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "fluid": "minecraft:lava",
      "nbt": {},
      "amount": 250
    }
  ],
  "results": [
    {
      "item": "minecraft:coal"
    }
  ],
  "heatRequirement": "heated"
}
);
*/