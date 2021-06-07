let result="";
function calculateValue(item){
   if(item.value=="C"){
        reset();    
    }
    else if(item.value=="CE"){
       backSpace();
    }
    else if(item.value=="="){
       evaluateValue();
    }
    else{
       result=result+item.value;
    }
    let a=document.getElementById("display-result");
    a.innerText=result;
}

function backSpace(){
    if (result.length==0){
        result=""; 
     }
     else{
         result=result.substring(0,result.length-1); 
     }
}

function reset(){
    result="";
}

function evaluateValue(){
    try {
        result=eval(result);
        result=result.toString();
        
    } catch (error) {
        result="Error. Press C to Reset";
    }
}