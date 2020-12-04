var me = 10;
var a=0;
var z = "";
var ran=["fly relate house expert charge interview itself because job consider knowledge colour low late hope significant understand business home where entire tonight want heavy such","sell way employee by civil hold executive become station successful enough task exactly reflect about","fear let perform term always industry spend feeling play federal performance season major buy ability evidence treat wall true like","project return popular whether inside especially say size fast really activity final use strategy maintain see add","watch art right century scientist thought radio rule call administration explain conference school line almost economy rise various claim range imagine their central","apart from counting words and characters our online editor can help you to improve word","choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism bookmark"]
function fun2() {
    me = me + 1;
    if(me==100){
        a=a+1;
        me=0;
    }
    var x = document.getElementById("orignal");
    var str1 = x.innerHTML;
    var y = document.getElementById("start1");
    var str2 = y.value;
    var len = str2.length;
    var sub1 = str1.substring(0, len);
    var sub2 = str2.substring(0, len);
    console.log(sub1,sub2,'edf');
    if (sub1 != sub2) {
        y.style.color = "red";
    }
    else {
        y.style.color = "black";
    }
    if (str1 == str2) {
        clearInterval(z);
        document.getElementById("start1").style.display = "none";
        fun3();
    }
    document.getElementById("timer").innerHTML = a + 's';
}
var index=0;
function fun4(){
    a = 0;
    me=0;
    console.log(a);
    index=Math.floor(Math.random() * 7);
    document.getElementById("start1").style.display = "block";
    document.getElementById("orignal").innerHTML=ran[index];
    document.getElementById("result").style.display = "none";
    document.getElementById("start1").value = "";
    clearInterval(z);
    document.getElementById("timer").innerHTML="0s"
}
function fun1(){
    clearInterval(z);
    z = setInterval(fun2, 10);
}
function fun3() {
    document.getElementById("result").style.display = "block";
    var str5=document.getElementById("orignal").innerHTML;
    let spaces=0; let characters=0; let len7=str5.length;
    for(var k1=0;k1<len7;k1++){
        if(str5[k1]==' '){spaces++;}
        characters++;
    }
    let minute = a / 60;
    let words = (spaces+1) / minute;
    words = Math.ceil(words);
    document.getElementById("wpm1").innerHTML = words;
    document.getElementById("ch").innerHTML = characters;
    document.getElementById("timeT").innerHTML=a+"s";
}
var target= document.getElementById("start1");
target.addEventListener('keyup',fun1);
