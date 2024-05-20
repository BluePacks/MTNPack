ServerEvents.recipes((e) => {
    /**
     * Helper function to create a compression fuel recipe.
     *
     * @param {string} fluid
     * @param {number} amount
     * @param {number} energy
     */
    function compressionFuel(fluid, amount, energy) {
        e.custom({
            type: "thermal:compression_fuel",
            ingredient: {
                fluid: fluid,
                amount: amount,
            },
            energy: energy,
        });
    }

    e.recipes.thermal.pulverizer("kubejs:zinc_dust", "#forge:ingots/zinc");
    e.recipes.thermal.crystallizer("kubejs:andesite_alloy_crystal", [
        Fluid.of("kubejs:andesite_aggregate_slurry", 1000),
        "#forge:dusts/zinc",
    ]);
    e.recipes.thermal.pulverizer(
        "4x create:andesite_alloy",
        "kubejs:andesite_alloy_crystal"
    );

    compressionFuel("createdieselgenerators:gasoline", 1000, 100000);
    compressionFuel("createdieselgenerators:diesel", 1000, 100000);
    compressionFuel("thermal:refined_fuel", 1000, 500000);

    e.shaped("thermal:dynamo_compression", ["ARA", "SCS", "AIA"], {
        A: "create:andesite_alloy_block",
        R: "thermal:rf_coil",
        S: "vintageimprovements:iron_spring",
        C: "create:andesite_casing",
        I: "minecraft:iron_block",
    });
});
