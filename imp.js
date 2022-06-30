var display= document.getElementById('display');
var box = document.getElementsByClassName('box');
var operation=0;
display.innerText="";
for(var i=0; i<box.length; i++){
    box[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value=='AC'){
            operation=0;
            display.innerText="";
        }else if(value=='+/-'){
            operation = eval("-1*" + display.textContent);
            display.innerText = operation;
        }else if(value=='%'){
            operation = eval("0.01*" + display.textContent);
            display.innerText = operation;
        }else if(value=='='){
            operation = eval(display.textContent);
            display.innerText=operation;
        }else{
            display.innerText += value;
        }
    });
}