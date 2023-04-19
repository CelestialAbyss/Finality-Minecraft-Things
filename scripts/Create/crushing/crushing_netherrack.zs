
// Netherite scrap is now renewable, but there are extra steps.
<recipetype:create:crushing>.addRecipe("netherrack_crushing", [<item:create:cinder_flour>, <item:create:cinder_flour> % 50, <item:minecraft:netherite_scrap> % 0.002], <item:minecraft:netherrack>, 250);

/*<recipetype:create:crushing>.addJsonRecipe("netherrack", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:netherrack"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": "create:cinder_flour"
    },
    {
      "chance": 0.5,
      "item": "create:cinder_flour"
    },
    {
      "chance": 0.0009765625,
      "item": "minecraft:netherite_scrap"
    },
  ]
}
);
*/