var count = 0;
var c = 1;
function addComment() {
    var x = document.getElementById("textArea").value;
    if (count == 0) {
        document.getElementById("addCmnt").innerHTML = "<div id='mainDIV'> </div>";
        document.getElementById("mainDIV").style.padding = "10px";
        document.getElementById("mainDIV").style.backgroundColor = "#d8d8d8";
        document.getElementById("mainDIV").innerHTML = "<div style='background-color:#fff; padding:10px;'>" + x + "</div>";
        count++;
    } else {
        // document.getElementById("addCmnt").innerHTML = "<div>" + x + "</div>";


        var ele = document.getElementById("mainDIV");
        var childEle = document.createElement("div");
        childEle.style.backgroundColor = "#fff";
        childEle.style.marginBottom = "5px";
        childEle.style.padding = "10px";
        var textnode = document.createTextNode(x);
        childEle.appendChild(textnode);

        ele.insertBefore(childEle, ele.childNodes[0]);

        // ele.appendChild(childEle);

    }
}

function edit() {
    document.getElementById("btnEdit").style.display = "none";
    document.getElementById("btnSave").style.display = "block";

    document.getElementById("headingInput").removeAttribute("disabled");
    document.getElementById("headingInput").style.border = "1px solid";

    document.getElementById("authorInput").removeAttribute("disabled");
    document.getElementById("authorInput").style.border = "1px solid";

    document.getElementById("contentInput").removeAttribute("disabled");
    document.getElementById("contentInput").style.border = "1px solid";

}

function save() {
    document.getElementById("btnEdit").style.display = "block";
    document.getElementById("btnSave").style.display = "none";

    document.getElementById("headingInput").setAttribute("disabled", true);
    document.getElementById("headingInput").style.border = "none";

    document.getElementById("authorInput").setAttribute("disabled", true);
    document.getElementById("authorInput").style.border = "none";

    document.getElementById("contentInput").setAttribute("disabled", true);
    document.getElementById("contentInput").style.border = "none";

}

function addLike() {
    document.getElementById("likeText").innerHTML = c + " person like this!";
    c++;
}