import mods.createtweaker.CrushingRecipe;
<recipetype:create:crushing>.addJsonRecipe("prosperity_shards", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:coarse_dirt"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "chance": 0.25,
      "item": "mysticalagriculture:prosperity_shard"
    },
    {
      "chance": 0.0009765625,
      "item": "mysticalagriculture:prosperity_seed_base"
    },
  ]
}
);