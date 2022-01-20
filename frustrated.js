(function() {
    var eventsArr = [];

    document.addEventListener("click", function(even) {
        eventsArr.push(new Date());

        if (eventsArr.length > 5) {
            for (var i = eventsArr.length - 5; i <= eventsArr.length - 2; i++) {
                if ((eventsArr[i + 1] - eventsArr[i]) / 3 + (eventsArr[i + 2] - eventsArr[i + 1]) / 3 + (eventsArr[i + 3] - eventsArr[i + 2]) / 3 <= 800) {


                    var customerFrustratedEvent = new CustomEvent(
                        "customerFrustrated", {
                            detail: {
                                message: "Customer is frustrated!",
                                time: new Date(),
                            },
                            bubbles: true,
                            cancelable: true
                        }
                    );


                    eventsArr = [];
                    document.dispatchEvent(customerFrustratedEvent);
                }
            }
        }
    });
})();
