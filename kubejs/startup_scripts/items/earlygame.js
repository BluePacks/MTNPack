StartupEvents.registry("item", (e) => {
    e.create("zinc_dust")
        .texture("layer0", "mekanism:item/dust")
        .color(0, 0xb1e9c0)
        .tag("forge:dusts/zinc")
        .tag("forge:dusts");
    e.create("small_pile_of_zinc_dust");
    e.create("andesite_crystal")
        .texture("layer0", "mekanism:item/crystal")
        .color(0, 0xc9caba);
});
