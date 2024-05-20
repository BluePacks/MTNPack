//priority: 100
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
    for (let dynamo of global.thermalDynamos) {
        e.remove({ type: `thermal:${dynamo}_fuel` });
        e.remove({ id: `thermal:dynamo_${dynamo}` });
    }
    e.remove({ id: "thermal:dynamo_compression" });
    e.remove({ type: "thermal:compression_fuel" });
});
