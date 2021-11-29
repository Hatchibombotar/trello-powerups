var Promise = TrelloPowerUp.Promise;

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return t
            .card("due")
            .get("due")
            .then(function (dueDate) {
                const d = new Date(dueDate.substr(0, 10));
                let day = d.getDay();
                return {
                    text: days[day],
                    color: "light-gray"
                };
            });
    }
});
