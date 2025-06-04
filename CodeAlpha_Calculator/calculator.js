let str="";
let btns=document.querySelectorAll("button");
Array.from(btns).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
    if(e.target.innerHTML=='='){
        str=eval(str);
        document.querySelector("input").value=str; 
    }else if(e.target.innerHTML=='AC'){
        str="";
        document.querySelector("input").value=str;
    }else if(e.target.innerHTML=='M+'){
        str="";
        document.querySelector("input").value=str;
    }
    else if(e.target.innerHTML=='M-'){
        str="";
        document.querySelector("input").value=str;
    }
    
    else{   
    console.log (e.target)
    str=str+e.target.innerHTML;
    document.querySelector("input").value=str;      
    }    
})
})