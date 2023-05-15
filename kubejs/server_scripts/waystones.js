onEvent('recipes', event => {
    event.remove({output: 'waystones:warp_plate'})
    event.remove({output: 'waystones:attuned_shard'})
    event.remove({output: 'waystones:warp_dust'})
})