<recipetype:create:filling>.addRecipe("living_cobblestone", <item:minecraft:netherrack>, <item:minecraft:cobblestone>, <fluid:create:potion>.withTag({Potion: "minecraft:strong_healing"}) * 250);
// FillingManager.addRecipe(name as string, output as Percentaged<IItemStack>, inputContainer as IIngredient, inputFluid as FluidIngredient, duration as int) as void


/*<recipetype:create:filling>.addJsonRecipe("living_cobblestone", {
  "ingredients": [
    {
      "item": "minecraft:cobblestone"
    },
    {
      "fluid": "create:potion",
      "nbt": {
        "Bottle": "REGULAR",
        "Potion": "minecraft:healing"
      },
      "amount": 25
    }
  ],
  "results": [
    {
      "item": "minecraft:netherrack"
    }
  ]
}
);
*/