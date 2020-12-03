var a = 10;
var z = "";
let x = document.getElementById("orignal");
let str1=x.innerHTML;
function fun2() {
    a = a + 1;
    let y = document.getElementById("start1");
    let str1=x.innerHTML;
    let str2=y.value;
    let len =str2.length;
    let sub1=str1.substring(0,len);
    let sub2=str2.substring(0,len);
    if(sub1!=sub2){
        y.style.color="red"; 
    }
    else{
        y.style.color="black";
    }
    if (str1==str2) {
        clearInterval(z);
        document.getElementById("start1").style.display="none";
        fun3();
    }
    document.getElementById("timer").innerHTML = a+'s';

}
function fun1() {
    a=0;
    document.getElementById("result").style.display="none";
    document.getElementById("start1").style.display="block";
    document.getElementById("start1").value="";
    clearInterval(z);
    z = setInterval(fun2, 1000);
}

function fun3(){
    document.getElementById("result").style.display="block";
    let minute=a/60;
    let words=25/minute;
    words=Math.ceil(words);
    document.getElementById("wpm1").innerHTML=words+" Words";
    document.getElementById("ch").innerHTML="174";

}
