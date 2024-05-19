ServerEvents.recipes((e) => {
    e.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "kubejs:andesite_alloy_crystal",
                count: 1,
            },
        },
        output: {
            item: "create:andesite_alloy",
            count: 4,
        },
    });
});
