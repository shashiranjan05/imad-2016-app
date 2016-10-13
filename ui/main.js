var button=document.getElementById("counter");
var counter=0;
button.onclick=function(){
    // make a request to the counter
    
    //capture response and variable
    
    
    //render the variable in the span
    counter = counter + 1;
    var span= document.getElementById('count');
    span.innerHTML=counter.toString();
    
};