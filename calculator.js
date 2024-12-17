function calculator(operator){
    const a=parseInt(document.getElementById("num-1").value);
    const b=parseInt(document.getElementById("num-2").value);
    const r=document.getElementById("result");

    if(operator === "add"){
        r.innerHTML= a+b;
    }
    
   else if(operator === "sub"){
        r.innerHTML= a-b;
    }
    
   else if(operator === "mul"){
        r.innerHTML= a*b;
    }
    
   else if(operator === "div"){
        r.innerHTML= a/b;
    }
    else{
        alert("error");
    }
}