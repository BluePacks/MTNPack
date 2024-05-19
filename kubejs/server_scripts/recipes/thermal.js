ServerEvents.recipes((e) => {
    e.recipes.thermal.pulverizer("kubejs:zinc_dust", "#forge:ingots/zinc");

    e.recipes.thermal.crystallizer("kubejs:andesite_alloy_crystal", [
        Fluid.of("kubejs:andesite_aggregate_slurry", 1000),
        "#forge:dusts/zinc",
    ]);
    e.recipes.thermal.pulverizer(
        "4x create:andesite_alloy",
        "kubejs:andesite_alloy_crystal"
    );
    e.custom({
        type: "thermal:compression_fuel",
        ingredient: {
            fluid: "createdieselgenerators:gasoline",
            amount: 1000,
        },
        energy: 100000,
    });
    e.custom({
        type: "thermal:compression_fuel",
        ingredient: {
            fluid: "createdieselgenerators:diesel",
            amount: 1000,
        },
        energy: 100000,
    });
    e.custom({
        type: "thermal:compression_fuel",
        ingredient: {
            fluid: "thermal:refined_fuel",
            amount: 1000,
        },
        energy: 500000,
    });
    e.shaped("thermal:dynamo_compression", ["ARA", "SCS", "AIA"], {
        A: "create:andesite_alloy_block",
        R: "thermal:rf_coil",
        S: "vintageimprovements:iron_spring",
        C: "create:andesite_casing",
        I: "minecraft:iron_block",
    });
});
