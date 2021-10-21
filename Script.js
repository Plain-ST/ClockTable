let timeslice;

//１桁を２桁表示するやつ
function set2fig(num){
  return (num<10) ?  ("0" + num) : num
}

//通常デジタル時計の表示（確認用）
function showClock() {
  let TimeNow = new Date();
  let nowHour = set2fig(TimeNow.getHours());
  let nowMin  = set2fig(TimeNow.getMinutes());
  let nowSec  = set2fig(TimeNow.getSeconds());
  let msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("NowTime").innerHTML = msg;
  timeslice = (String(nowHour).split(""));
  timeslice = timeslice.concat((String(nowMin).split("")));
  timeslice = timeslice.concat((String(nowSec).split("")));
  console.log(timeslice)
}
setInterval('showClock()',1000);

//中央の点滅
let centerElement = document.querySelectorAll(".center");
let blinkFlag = 0;
function blink(){
  if(blinkFlag==0){
    centerElement.forEach(function (element) {
      element.classList.add("blink");
    });
    blinkFlag = 1;
  }else{
    centerElement.forEach(function (element) {
      element.classList.remove("blink");
    });
    blinkFlag = 0;
  }
}
setInterval('blink()',500);

//数字部の表示
function selectNum(Array){
  
}
//0の場合の処理
function paintZero(){

}
//1の場合の処理
function paintOne(){

}
//2の場合の処理
function paintTwe(){

}
//3の場合の処理
function paintThree(){
  
}
//4の場合の処理
function paintFour(){

}
//5の場合の処理
function paintFive(){

}
//6の場合の処理
function paintSix(){

}
//7の場合の処理
function paintSeven(){

}
//8の場合の処理
function paintEight(){

}
//9の場合の処理
function paintNine(){

}