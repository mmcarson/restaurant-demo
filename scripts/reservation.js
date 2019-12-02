function checkTimes() {
    let date = document.getElementById("calendar").value;
    console.dir(date);
    let party = document.getElementById("number-people").value;
    let okTypes = [];
    document.getElementById("table-type").childNodes.forEach(box => {
        if (box.name && box.checked) {
            console.log(box.name);
            okTypes.push(box.name)
        }
    });
    $.ajax({
        type: "get",
        url: "http://localhost:8080/checktimes",
        data: { date, party, okTypes },
        dataType: "JSON",
        success: function(response) {
            console.log(response);
            response.forEach(date => {
                let button = document.createElement("button");
                button.innerText = date;
                button.style.margin = ".5rem";
                button.style.backgroundColor = "white";
                button.type = "button";
                let radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "time-selection";
                button.appendChild(radio);
                button.onclick = function() {
                    radio.checked = true
                };
                document.getElementById("times").appendChild(button);
            });
            // document.getElementById("times").innerText = response;
        }
    });
}

reservationSetup = async function() {
    $("#reservation-form").validate({
        rules: {
            firstname: {
                required: //"#lastname:empty"
                {
                    depends: function(element) {
                        if ($("#lastname").val() === "") {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            },
            lastname: {
                required: //"#firstname:empty"

                {
                    depends: function(element) {
                        console.log()
                        if ($("#firstname").val() === "") {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    });
}