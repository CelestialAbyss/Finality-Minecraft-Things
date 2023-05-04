onEvent('item.tooltip', tooltip => {
  tooltip.addAdvanced('avaritia:extreme_crafting_table', (item, advanced, text) => {
    text.add(1, Text.of('§bOnce used for crafting, its power was taken away by the Creator.')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
    text.add(2, Text.of('§3Can only be used as a large chest or an extremely large 3x3 Crafting Table.'))
  })
})