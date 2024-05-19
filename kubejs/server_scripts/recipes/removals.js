//priority: 1000
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
    e.remove({ id: "createdieselgenerators:distillation/crude_oil" });
    e.remove({ id: "createdieselgenerators:compacting/plant_oil" });
    e.remove({ id: "createdieselgenerators:basin_fermenting/fermentable" });
    e.remove({
        id: "createdieselgenerators:basin_fermenting/fermented_spider_eye",
    });
    e.remove({ id: "createdieselgenerators:mixing/biodiesel" });
    e.remove({ id: "thermal:machines/refinery/refinery_light_oil" });
    e.remove({ id: "thermal:machines/refinery/refinery_heavy_oil" });
    e.remove({ id: "thermal:machines/refinery/refinery_crude_oil" });
    e.remove({ type: "thermal:gourmand_fuel" });
    e.remove({ type: "thermal:compression_fuel" });
    e.remove({ type: "thermal:lapidary_fuel" });
    e.remove({ type: "thermal:magmatic_fuel" });
    e.remove({ type: "thermal:stirling_fuel" });
    e.remove({ type: "thermal:numismatic_fuel" });
    e.remove({ type: "thermal:disenchantment_fuel" });
    e.remove({ id: "thermal:dynamo_disenchantment" });
    e.remove({ id: "thermal:dynamo_stirling" });
    e.remove({ id: "thermal:dynamo_magmatic" });
    e.remove({ id: "thermal:dynamo_numismatic" });
    e.remove({ id: "thermal:dynamo_lapidary" });
    e.remove({ id: "thermal:dynamo_gourmand" });
    e.remove({ id: "thermal:dynamo_lapidary" });
    e.remove({ id: "thermal:dynamo_compression" });
});
