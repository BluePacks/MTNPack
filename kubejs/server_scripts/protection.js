BlockEvents.broken("kubejs:mountainous_stone", (e) => {
    if (e.player.isCreative()) {
        return;
    } else {
        e.player.tell("Mystical forces prevent you from breaking this block.");
        e.cancel();
    }
});
