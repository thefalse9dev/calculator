let lastClickedEqls=0;

function operate(){
    lastClickedEqls=1
    var str = document.getElementById("result").innerText;
    //console.log(eval(str))
    document.getElementById("result").innerText = eval(str)
}

function func9(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= 9
    }
    else{
        document.getElementById("result").innerText+= 9
    }
    
    lastClickedEqls=0
}

function func8(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= 8
    }
    else{
        document.getElementById("result").innerText+= 8
    }
    
    lastClickedEqls=0
}

function func7(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= 7
    }
    else{
        document.getElementById("result").innerText+= 7
    }
    
    lastClickedEqls=0
}

function func6(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= 6
    }
    else{
        document.getElementById("result").innerText+= 6
    }
    
    lastClickedEqls=0
}

function func5(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= 5
    }
    else{
        document.getElementById("result").innerText+= 5
    }
    
    lastClickedEqls=0
}
function func4(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= 4
    }
    else{
        document.getElementById("result").innerText+= 4
    }
    
    lastClickedEqls=0
}

function func3(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= 3
    }
    else{
        document.getElementById("result").innerText+= 3
    }
    
    lastClickedEqls=0
}

function func2(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= 2
    }
    else{
        document.getElementById("result").innerText+= 2
    }
    
    lastClickedEqls=0
}

function func1(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= 1
    }
    else{
        document.getElementById("result").innerText+= 1
    }
    
    lastClickedEqls=0
}

function func0(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= 0
    }
    else{
        document.getElementById("result").innerText+= 0
    }
    
    lastClickedEqls=0
}

function funcpt(){
    if (lastClickedEqls==1 || document.getElementById("result").innerText=="0"){
        document.getElementById("result").innerText= "0."
    }
    else{
        document.getElementById("result").innerText+= "."
    }
    
    lastClickedEqls=0
}

function add(){
    document.getElementById("result").innerText+="+"
    lastClickedEqls=0
}

function sub(){
    document.getElementById("result").innerText+="-"
    lastClickedEqls=0
}

function mul(){
    document.getElementById("result").innerText+="*"
    lastClickedEqls=0
}

function div(){
    document.getElementById("result").innerText+="/"
    lastClickedEqls=0
}

function clr(){
    console.log("clicked")
    document.getElementById("result").innerText=0
    lastClickedEqls=0
}

function del(){
    console.log("clicked")
    if (document.getElementById("result").innerText.length>0){
        document.getElementById("result").innerText = document.getElementById("result").innerText.slice(0,-1)
    }
    lastClickedEqls=0
}