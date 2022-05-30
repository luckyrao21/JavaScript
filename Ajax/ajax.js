function loading() {

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    xhttp.send();
    console.log(xhttp.readyState)
    xhttp.onreadystatechange = function() {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            console.log(xhttp.responseText)
            document.getElementById("demon").innerHTML = xhttp.responseText;
        }
    }

}