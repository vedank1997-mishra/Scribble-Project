function deletePost(ID) {
    console.log(ID);
    document.getElementById('hiddenInput').setAttribute('value', ID)
}

function deletePostModal(){
    var x = document.getElementById('hiddenInput').value;
    document.getElementById(x).style.display = "none";
}