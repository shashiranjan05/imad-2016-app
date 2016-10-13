var button=document.getElementById('counter');
button.onclick=function(){
    // make a request to the counter
    var req =new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState ===XMLHttpRequest.DONE){
            
            if( request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
    
            }
        
        }
    }
    //capture response and variable
    
    
    //render the variable in the span
    request.open('GET','http://http://shashiranjan05.imad.hasura-app.io/',true);
    request.send(null);
    
};