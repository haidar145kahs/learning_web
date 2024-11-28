/*____________________________________________first try_____________________________________________*/
// var myMassage = document.getElementById("Massage");
// function ShowMassage(){
//     myMassage . className ="show";
// }
// setTimeout(ShowMassage,3000)
/*__________________________________________end offirst try_____________________________________________*/


/*____________________________________________second try_________________________________________________*/
var colorChanger = document.getElementById("color-changer");
var colors = ["red","#047669","#84066d","#6ff563"]
var counter = 0;
function changeColor(){
    if(counter>= colors.length){
        counter = 0;
    }
    colorChanger.style.background = colors[counter];
    counter++;
}
var myTimer = setInterval(changeColor,3000);
colorChanger.onclick = function(){
    clearInterval(myTimer);
    colorChanger.innerHTML = "The Timer Has Stopped";
};
