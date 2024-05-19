JEIEvents.removeCategories((e) => {
    e.remove("thermal:gourmand_fuel");
    e.remove("thermal:lapidary_fuel");
    e.remove("thermal:magmatic_fuel");
    e.remove("thermal:stirling_fuel");
    e.remove("thermal:numismatic_fuel");
    e.remove("thermal:disenchantment_fuel");
});
JEIEvents.hideItems((e) => {
    e.hide("thermal:dynamo_disenchantment");
    e.hide("thermal:dynamo_stirling");
    e.hide("thermal:dynamo_magmatic");
    e.hide("thermal:dynamo_numismatic");
    e.hide("thermal:dynamo_lapidary");
    e.hide("thermal:dynamo_gourmand");
    e.hide("thermal:dynamo_lapidary");
});
