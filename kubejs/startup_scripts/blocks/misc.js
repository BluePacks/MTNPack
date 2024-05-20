const $BlazeBurnerBlock = Java.loadClass(
    "com.simibubi.create.content.processing.burner.BlazeBurnerBlock"
);
const $BlockProperties = Java.loadClass(
    "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
);
const $Block = Java.loadClass("net.minecraft.world.level.block.Block");

StartupEvents.registry("block", (e) => {
    e.create("mountainous_stone")
        .textureAll("minecraft:block/stone")
        .soundType("stone");
    /*e.createCustom( // not working, help me here https://discord.com/channels/303440391124942858/1242048154116034673
        "burner",
        () => new $BlazeBurnerBlock($BlockProperties.of())
    );*/
});
