function setUpEvents(){
    var contentBox = document.getElementById("content");
    var button = document.getElementById("show-more");
    button.onclick = function(){
        if(contentBox.className =="open"){
            //shrink the text
            contentBox.className = "";
            button.innerHTML = "Show More";
        }
        else{
            //expand the text
            contentBox.className = "open";
            button.innerHTML = "Show Less"
        }
    };
};
// this (window) event make me able to put the script tag in the head on HTML
window.onload = function(){
    setUpEvents();
};
