function makeReservation(data, url) {
    // four steps to a request: create, 
    var request = new XMLHttpRequest();
    request.onreadystatechange() = function() {
        console.log(request.response);
    }
    request.open("POST", url, true);
    request.send(data);
    return;
}