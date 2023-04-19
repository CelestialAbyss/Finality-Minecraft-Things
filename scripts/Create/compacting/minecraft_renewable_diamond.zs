import mods.createtweaker.CompactingRecipe;

<recipetype:create:compacting>.addRecipe("renewable_diamond", <constant:create:heat_condition:superheated>, [<item:minecraft:diamond>], [<item:minecraft:coal_block> * 9], [<fluid:minecraft:lava> * 1000]);

/* Legacy JSON recipe for renewable diamond
<recipetype:create:compacting>.addJsonRecipe("diamond", {
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "minecraft:coal_block"
    },
    {
      "item": "minecraft:coal_block"
    },
    {
      "item": "minecraft:coal_block"
    },
    {
      "item": "minecraft:coal_block"
    },
    {
      "item": "minecraft:coal_block"
    },
    {
      "item": "minecraft:coal_block"
    },
    {
      "item": "minecraft:coal_block"
    },
    {
      "item": "minecraft:coal_block"
    },
    {
      "item": "minecraft:coal_block"
    },
    {
      "fluid": "minecraft:lava",
      "nbt": {},
      "amount": 1000
    }
  ],
  "results": [
    {
      "item": "minecraft:diamond"
    }
  ],
  "heatRequirement": "superheated"
}
);
*/