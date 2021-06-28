num1 = 3;
num2 = 12;
num3 = 36;

function myCounter1(Element) {
    num1++;
    console.log(num1);
    document.querySelector("#count1").innerHTML = "the number is " + num1;   

}
function myCounter2(Element) {
    num2++;
    console.log(num2);
    document.querySelector("#count2").innerHTML = "the number is " + num2;    

}
function myCounter3(Element) {
    num3++;
    console.log(num3);
    document.querySelector("#count3").innerHTML = "the number is " + num3;

}