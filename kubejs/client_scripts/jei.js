//priority: 1000
global.thermalDynamos = [
    "gourmand",
    "lapidary",
    "magmatic",
    "stirling",
    "numismatic",
    "disenchantment",
    // dont include compression dynamo
];
JEIEvents.removeCategories((e) => {
    for (let dynamo of global.thermalDynamos) {
        e.remove(`thermal:${dynamo}_fuel`);
    }
});
JEIEvents.hideItems((e) => {
    for (let dynamo of global.thermalDynamos) {
        e.hide(`thermal:dynamo_${dynamo}`);
    }
});
