var myForm = document.forms.myForm;
myForm.name.onfocus = function(){
    myForm.name.style.border = "4px solid pink";
};
myForm.name.onblur = function(){
    myForm.name.style.border = "none";
};