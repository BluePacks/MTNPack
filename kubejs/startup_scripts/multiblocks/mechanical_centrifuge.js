if (Platform.isLoaded("mm")) {
    MMEvents.registerControllers((event) => {
        event
            .create("mechanical_centrifuge")
            .name("Mechanical Centrifuge")
            .type("mm:machine");
    });

    MMEvents.registerPorts((event) => {
        event
            .create("item_input")
            .name("Item Input")
            .controllerId("mm:mechanical_centrifuge")
            .config("mm:item", (c) => {
                c.rows(1).columns(1);
            });
    });
}
