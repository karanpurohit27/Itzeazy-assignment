let app1=document.getElementById("button1")
let app2=document.getElementById("button2")
let name1=document.getElementById("input1")
let Next=document.getElementsByClassName("form-select form-select-sm")
let k=false;
let prev=document.getElementsByClassName("next1")
if(Next!=null){
   k=true;
}

if(k==true){
    replace.location(index2.html);
    Next=null;
}





app1.disable=true;
app2.disable=true;
name1.addEventListener("click",(e) => {
const value=e.currentTarget.value
console.log("op")
if(value==""){
    app1.disabled=true;
    app2.disabled=true;
    
}
else{
    app1.disabled=false;
    app2.disabled=false;
}
});
/*window.addEventListener('load',()=>{
    if(name1==""){
        app1.disabled=true;
        app2.disabled=true;
        
    }
    else{
        app1.disabled=false;
        app2.disabled=false;
    }
})*/
/*function disable(){
    if(name1==""){
        app1.disabled=true;
        app2.disabled=true;
        
    }
    else{
        app1.disabled=false;
        app2.disabled=false;
    }
}*/
