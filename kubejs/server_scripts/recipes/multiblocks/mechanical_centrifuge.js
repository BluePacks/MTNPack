if (Platform.isLoaded("mm")) {
    MMEvents.createStructures((event) => {
        event
            .create("mm:mechanical_centrifuge")
            .controllerId("mm:mechanical_centrifuge")
            .name("Mechanical Centrifuge")
            .layout((a) => {
                a.layer(["BCB"])
                    .layer(["ABA"])
                    .key("A", {
                        block: "minecraft:glass",
                    })
                    .key("B", {
                        block: "minecraft:white_wool",
                    });
            });
    });

    MMEvents.createProcesses((event) => {
        event
            .create("mm:my_process_recipe")
            .structureId("mm:mechanical_centrifuge")
            .ticks(1000)
            .input({
                type: "mm:input/consume",
                ingredient: {
                    type: "mm:item",
                    item: "minecraft:glass",
                    count: 10,
                },
            })
            .input({
                type: "mm:input/consume",
                ingredient: {
                    type: "mm:fluid",
                    fluid: "minecraft:water",
                    amount: 1000,
                },
            })
            .output({
                type: "mm:output/simple",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000,
                },
            });
    });
}
