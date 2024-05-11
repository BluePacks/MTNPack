ServerEvents.recipes((e) => {
    e.recipes.create_mechanical_extruder
        .extruding("andesite", [
            Fluid.of("kubejs:andesite_aggregate_slurry"),
            Item.of("minecraft:andesite"),
        ])
        .requiredBonks(2);
    e.recipes.create_mechanical_extruder
        .extruding("andesite", [
            Fluid.of("kubejs:andesite_aggregate_slurry"),
            Item.of("minecraft:andesite"),
        ])
        .requiredBonks(1)
        .withCatalyst("quartz_block");
    e.recipes.create.compacting("kubejs:andesite_aggregate_slurry", [
        "3x andesite",
        "#themtn:stones_not_andesite",
    ]);
    e.recipes.create.milling("kubejs:zinc_dust", "#forge:ingots/zinc");
    e.recipes.create.crushing("kubejs:zinc_dust", "#forge:ingots/zinc");
    e.recipes.thermal.pulverizer("kubejs:zinc_dust", "#forge:ingots/zinc");
    e.shapeless("create:andesite_alloy", [
        "kubejs:small_pile_of_zinc_dust",
        "andesite",
    ]);
    e.shapeless("4x kubejs:small_pile_of_zinc_dust", "#forge:dusts/zinc");
    e.shaped("kubejs:zinc_dust", ["##", "##"], {
        "#": "kubejs:small_pile_of_zinc_dust",
    });
    e.recipes.create.mixing("create:andesite_alloy", [
        Fluid.of("kubejs:andesite_aggregate_slurry", 1000),
        "quartz",
    ]);
});

ServerEvents.tags("item", (e) => {
    let stonesNotAndesite = [];
    Ingredient.of("#forge:stone").itemIds.forEach((item) => {
        if (!item === "minecraft:andesite" || !item === "andesite") {
            stonesNotAndesite.push(item);
        }
    });
    for (let stone of stonesNotAndesite) {
        e.get("themtn:stones_not_andesite").add(stone); // for some reason this doesn't work
    }
});
