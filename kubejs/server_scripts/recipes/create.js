ServerEvents.recipes((e) => {
    e.shaped(
        "create_mechanical_extruder:mechanical_extruder",
        ["CSC", "GAG", "IGI"],
        {
            C: "create:cogwheel",
            S: "create:shaft",
            G: "#forge:glass",
            A: "create:andesite_casing",
            I: "#forge:ingots/iron",
        }
    );
    e.recipes.create_mechanical_extruder
        .extruding("andesite", [
            Fluid.of("kubejs:andesite_aggregate_slurry"),
            "minecraft:andesite",
        ])
        .requiredBonks(2);
    e.recipes.create_mechanical_extruder
        .extruding("andesite", [
            Fluid.of("kubejs:andesite_aggregate_slurry"),
            "minecraft:andesite",
        ])
        .requiredBonks(1)
        .withCatalyst("quartz_block");
    e.recipes.create.compacting("kubejs:andesite_aggregate_slurry", [
        "3x andesite",
        "#themtn:stones_not_andesite",
        Fluid.of("minecraft:water", 1000),
    ]);
    e.recipes.create.mixing("2x create:andesite_alloy", [
        Fluid.of("kubejs:andesite_aggregate_slurry", 1000),
        "kubejs:small_pile_of_zinc_dust",
    ]);
    e.recipes.create.milling("kubejs:zinc_dust", "#forge:ingots/zinc");
    e.recipes.create.crushing("kubejs:zinc_dust", "#forge:ingots/zinc");
    e.shapeless("create:andesite_alloy", [
        "kubejs:small_pile_of_zinc_dust",
        "andesite",
    ]);
    e.shapeless("4x kubejs:small_pile_of_zinc_dust", "#forge:dusts/zinc").id(
        "kubejs:small_pile_of_zinc_dust_manual_only"
    );
    e.shaped("kubejs:zinc_dust", ["##", "##"], {
        "#": "kubejs:small_pile_of_zinc_dust",
    });

    e.recipes.create
        .mixing(Fluid.of("thermal:refined_fuel", 500), [
            Fluid.of("createdieselgenerators:gasoline", 250),
            Fluid.of("createdieselgenerators:diesel", 250),
        ])
        .superheated();

    e.custom({
        type: "vintageimprovements:vibrating",
        ingredients: [
            {
                tag: "forge:dusts/zinc",
            },
        ],
        results: [
            {
                item: "kubejs:small_pile_of_zinc_dust",
                count: 4,
            },
        ],
        processingTime: 300,
    });

    e.custom({
        type: "createdieselgenerators:distillation",
        ingredients: [
            {
                fluidTag: "forge:crude_oil",
                amount: 100,
            },
        ],
        heatRequirement: "heated",
        processingTime: 100,
        results: [
            {
                fluid: "thermal:heavy_oil",
                amount: 50,
            },
            {
                fluid: "thermal:light_oil",
                amount: 50,
            },
        ],
    });
    e.custom({
        type: "createdieselgenerators:distillation",
        ingredients: [
            {
                fluid: "thermal:light_oil",
                amount: 100,
            },
        ],
        heatRequirement: "heated",
        processingTime: 100,
        results: [
            {
                fluid: "createdieselgenerators:diesel",
                amount: 50,
            },
            {
                fluid: "createdieselgenerators:gasoline",
                amount: 50,
            },
        ],
    });
    e.custom({
        type: "createdieselgenerators:distillation",
        ingredients: [
            {
                fluid: "thermal:heavy_oil",
                amount: 100,
            },
        ],
        heatRequirement: "heated",
        processingTime: 100,
        results: [
            {
                fluid: "createdieselgenerators:diesel",
                amount: 50,
            },
            {
                fluid: "createdieselgenerators:gasoline",
                amount: 50,
            },
        ],
    });
});

ServerEvents.tags("item", (e) => {
    let stonesNotAndesite = [];
    e.get("forge:stone").objectIds.forEach((item) => {
        if (!(item == "minecraft:andesite" || item == "andesite")) {
            stonesNotAndesite.push(item);
        }
    });
    for (let stone of stonesNotAndesite) {
        e.add("themtn:stones_not_andesite", stone);
    }
});
