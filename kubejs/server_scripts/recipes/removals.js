ServerEvents.recipes((e) => {
    e.remove({ mod: "ae2" });
    e.remove({ id: "create:mixing/andesite_alloy" });
    e.remove({ id: "create:mixing/andesite_alloy_from_zinc" });
    e.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" });
    e.remove({ id: "create:crafting/materials/andesite_alloy" });
    e.remove({ id: "create_dd:industrial_iron/andesite_alloy" });
    e.remove({ id: "create_dd:industrial_iron/andesite_alloy_mixing" });
    e.remove({
        id: "thermal:compat/create/smelter_create_alloy_andesite_alloy",
    });
    e.remove({ id: "create_mechanical_extruder:mechanical_extruder" });
});
