CapeJS.addCapes((event) => {
    let users = ["607c455c-a7de-4030-adf0-363cf08fd54b"];
    for (let user of users) {
        event.register(user, "mountain");
    }
});