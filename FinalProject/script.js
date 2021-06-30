function hide(){
    document.getElementById('join');
    join.remove();

}


function like1(){
   var temp = document.getElementById("likes1").innerText;
   var value = Number(temp);
   temp++;
   likes1 = temp;
   document.getElementById('likes1').innerText = temp;
}

function like2(){
    var temp = document.getElementById("likes2").innerText;
    var value = Number(temp);
    temp++;
    likes2 = temp;
    document.getElementById('likes2').innerText = temp;
}

 
function like3(){
    var temp = document.getElementById("likes3").innerText;
    var value = Number(temp);
    temp++;
    likes3 = temp;
    document.getElementById('likes3').innerText = temp;
}

function searching() {
    var temp = document.getElementById("search").innerText;
    alert(search.value)
}