
var myVar;

function loading() {
    myVar = setTimeout(showPage, 3000);


    function showPage() {
        document.getElementById("loader.png").style.display = "none";

    }
}
