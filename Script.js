let timeslice;

//１桁を２桁表示するやつ
function set2fig(num) {
  return (num < 10) ? ("0" + num) : num
}

//通常デジタル時計の表示（確認用）
function showClock() {
  let TimeNow = new Date();
  let nowHour = set2fig(TimeNow.getHours());
  let nowMin = set2fig(TimeNow.getMinutes());
  let nowSec = set2fig(TimeNow.getSeconds());
  let msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("NowTime").innerHTML = msg;
  timeslice = (String(nowHour).split(""));
  timeslice = timeslice.concat((String(nowMin).split("")));
  timeslice = timeslice.concat((String(nowSec).split("")));
  console.log(timeslice);
  selectNum(timeslice);

}
setInterval('showClock()', 1000);

//中央の点滅
let centerElement = document.querySelectorAll(".center");
let blinkFlag = 0;
function blink() {
  if (blinkFlag == 0) {
    centerElement.forEach(function (element) {
      element.classList.add("blink");
    });
    blinkFlag = 1;
  } else {
    centerElement.forEach(function (element) {
      element.classList.remove("blink");
    });
    blinkFlag = 0;
  }
}
setInterval('blink()', 500);
//数字部の表示
function selectNum(Array) {
  testnum = "";
  for (let t=1; t<Array.length+1;t++) {
    console.log(t);
    switch (Array[t-1]) {
      case "0":
        paintZero(t);
        break;
      case "1":
        paintOne(t);
        break;
      case "2":
        paintTwe(t);
        break;
      case "3":
        paintThree(t);
        break;
      case "4":
        paintFour(t);
        break;
      case "5":
        paintFive(t);
        break;
      case "6":
        paintSix(t);
        break;
      case "7":
        paintSeven(t);
        break;
      case "8":
        paintEight(t);
        break;
      case "9":
        paintNine(t);
        break;
    }
  }
}
//0の場合の処理
function paintZero(tnum) {
  //aの処理
  paintOn(tnum, "a");
  //bの処理
  paintOn(tnum, "b");
  //cの処理
  paintOn(tnum, "c");
  //dの処理
  paintOn(tnum, "d");
  //eの処理
  paintOn(tnum, "e");
  //fの処理
  paintOn(tnum, "f");
  //gの処理
  paintOff(tnum, "g");
  //hの処理
  paintOn(tnum, "h");
  //iの処理
  paintOn(tnum, "i");
  //jの処理
  paintOn(tnum, "j");
  //kの処理
  paintOn(tnum, "k");
  //lの処理
  paintOn(tnum, "l");
  //mの処理
  paintOn(tnum, "m");
}
//1の場合の処理
function paintOne(tnum) {
  //aの処理
  paintOff(tnum, "a");
  //bの処理
  paintOff(tnum, "b");
  //cの処理
  paintOn(tnum, "c");
  //dの処理
  paintOff(tnum, "d");
  //eの処理
  paintOn(tnum, "e");
  //fの処理
  paintOff(tnum, "f");
  //gの処理
  paintOff(tnum, "g");
  //hの処理
  paintOn(tnum, "h");
  //iの処理
  paintOff(tnum, "i");
  //jの処理
  paintOn(tnum, "j");
  //kの処理
  paintOff(tnum, "k");
  //lの処理
  paintOff(tnum, "l");
  //mの処理
  paintOn(tnum, "m");
}
//2の場合の処理
function paintTwe(tnum) {
  //aの処理
  paintOn(tnum, "a");
  //bの処理
  paintOn(tnum, "b");
  //cの処理
  paintOn(tnum, "c");
  //dの処理
  paintOff(tnum, "d");
  //eの処理
  paintOn(tnum, "e");
  //fの処理
  paintOn(tnum, "f");
  //gの処理
  paintOn(tnum, "g");
  //hの処理
  paintOn(tnum, "h");
  //iの処理
  paintOn(tnum, "i");
  //jの処理
  paintOff(tnum, "j");
  //kの処理
  paintOn(tnum, "k");
  //lの処理
  paintOn(tnum, "l");
  //mの処理
  paintOn(tnum, "m");
}
//3の場合の処理
function paintThree(tnum) {
  //aの処理
  paintOn(tnum, "a");
  //bの処理
  paintOn(tnum, "b");
  //cの処理
  paintOn(tnum, "c");
  //dの処理
  paintOff(tnum, "d");
  //eの処理
  paintOn(tnum, "e");
  //fの処理
  paintOn(tnum, "f");
  //gの処理
  paintOn(tnum, "g");
  //hの処理
  paintOn(tnum, "h");
  //iの処理
  paintOff(tnum, "i");
  //jの処理
  paintOn(tnum, "j");
  //kの処理
  paintOn(tnum, "k");
  //lの処理
  paintOn(tnum, "l");
  //mの処理
  paintOn(tnum, "m");
}
//4の場合の処理
function paintFour(tnum) {
  //aの処理
  paintOn(tnum, "a");
  //bの処理
  paintOff(tnum, "b");
  //cの処理
  paintOn(tnum, "c");
  //dの処理
  paintOn(tnum, "d");
  //eの処理
  paintOn(tnum, "e");
  //fの処理
  paintOn(tnum, "f");
  //gの処理
  paintOn(tnum, "g");
  //hの処理
  paintOn(tnum, "h");
  //iの処理
  paintOff(tnum, "i");
  //jの処理
  paintOn(tnum, "j");
  //kの処理
  paintOff(tnum, "k");
  //lの処理
  paintOff(tnum, "l");
  //mの処理
  paintOn(tnum, "m");
}
//5の場合の処理
function paintFive(tnum) {
  //aの処理
  paintOn(tnum, "a");
  //bの処理
  paintOn(tnum, "b");
  //cの処理
  paintOn(tnum, "c");
  //dの処理
  paintOn(tnum, "d");
  //eの処理
  paintOff(tnum, "e");
  //fの処理
  paintOn(tnum, "f");
  //gの処理
  paintOn(tnum, "g");
  //hの処理
  paintOn(tnum, "h");
  //iの処理
  paintOff(tnum, "i");
  //jの処理
  paintOn(tnum, "j");
  //kの処理
  paintOn(tnum, "k");
  //lの処理
  paintOn(tnum, "l");
  //mの処理
  paintOn(tnum, "m");
}
//6の場合の処理
function paintSix(tnum) {
  //aの処理
  paintOn(tnum, "a");
  //bの処理
  paintOn(tnum, "b");
  //cの処理
  paintOn(tnum, "c");
  //dの処理
  paintOn(tnum, "d");
  //eの処理
  paintOff(tnum, "e");
  //fの処理
  paintOn(tnum, "f");
  //gの処理
  paintOn(tnum, "g");
  //hの処理
  paintOn(tnum, "h");
  //iの処理
  paintOn(tnum, "i");
  //jの処理
  paintOn(tnum, "j");
  //kの処理
  paintOn(tnum, "k");
  //lの処理
  paintOn(tnum, "l");
  //mの処理
  paintOn(tnum, "m");
}
//7の場合の処理
function paintSeven(tnum) {
  //aの処理
  paintOn(tnum, "a");
  //bの処理
  paintOn(tnum, "b");
  //cの処理
  paintOn(tnum, "c");
  //dの処理
  paintOff(tnum, "d");
  //eの処理
  paintOn(tnum, "e");
  //fの処理
  paintOff(tnum, "f");
  //gの処理
  paintOff(tnum, "g");
  //hの処理
  paintOn(tnum, "h");
  //iの処理
  paintOff(tnum, "i");
  //jの処理
  paintOn(tnum, "j");
  //kの処理
  paintOff(tnum, "k");
  //lの処理
  paintOff(tnum, "l");
  //mの処理
  paintOn(tnum, "m");
}
//8の場合の処理
function paintEight(tnum) {
  //aの処理
  paintOn(tnum, "a");
  //bの処理
  paintOn(tnum, "b");
  //cの処理
  paintOn(tnum, "c");
  //dの処理
  paintOn(tnum, "d");
  //eの処理
  paintOn(tnum, "e");
  //fの処理
  paintOn(tnum, "f");
  //gの処理
  paintOn(tnum, "g");
  //hの処理
  paintOn(tnum, "h");
  //iの処理
  paintOn(tnum, "i");
  //jの処理
  paintOn(tnum, "j");
  //kの処理
  paintOn(tnum, "k");
  //lの処理
  paintOn(tnum, "l");
  //mの処理
  paintOn(tnum, "m");
}
//9の場合の処理
function paintNine(tnum) {
  //aの処理
  paintOn(tnum, "a");
  //bの処理
  paintOn(tnum, "b");
  //cの処理
  paintOn(tnum, "c");
  //dの処理
  paintOn(tnum, "d");
  //eの処理
  paintOn(tnum, "e");
  //fの処理
  paintOn(tnum, "f");
  //gの処理
  paintOn(tnum, "g");
  //hの処理
  paintOn(tnum, "h");
  //iの処理
  paintOff(tnum, "i");
  //jの処理
  paintOn(tnum, "j");
  //kの処理
  paintOn(tnum, "k");
  //lの処理
  paintOn(tnum, "l");
  //mの処理
  paintOn(tnum, "m");
}
//黒で表示
function paintOn(tnum, str) {
  let element = document.getElementById("num"+tnum+str);
  if(!(element.classList.contains("numPrint"))){
    element.classList.add("numPrint");
  }
}
//表示削除
function paintOff(tnum, str) {
  let element = document.getElementById("num"+tnum+str);
  if(element.classList.contains("numPrint")){
    element.classList.remove("numPrint");
  }
}