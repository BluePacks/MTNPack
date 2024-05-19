StartupEvents.registry("item", (e) => {
    e.create("zinc_dust").tag("forge:dusts/zinc").tag("forge:dusts");
    e.create("small_pile_of_zinc_dust")
        .tag("themtn:small_dust/zinc")
        .tag("themtn:small_dust");
    e.create("andesite_alloy_crystal")
        .tag("mekanism:crystals/andesite")
        .tag("mekanism:crystals");
});
