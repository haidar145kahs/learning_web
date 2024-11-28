var myForm = document.forms.myForm ; 
var Massage = document.getElementById("Massage"); 
myForm.onsubmit = function(){
    if(myForm.name.value == ""){
        Massage.innerHTML = "Pleas Enter A Name";
        return false ; 
    }else{
        Massage.innerHTML = "";
        return true;
    }
};