let count=0;
function increase(){
    count++;
    updateCount();
}

function decrease(){
    
    if(count!=0){
        count--;
        updateCount();
    }
    else{
        document.getElementById("count").innerHTML="Reached 0";
    }
}
function reset(){
    count=0;
    updateCount();
}

function updateCount(){
    document.getElementById("count").innerHTML = "<u>" + count + "</u>"; 
}
