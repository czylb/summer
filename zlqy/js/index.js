var jia = document.getElementById("jia"),
    jian = document.getElementById("jian"),
    move = document.getElementById("move"),
    taiji = document.getElementById("taiji"),
    laocao = document.getElementById("laocao"),
    oldlib = document.getElementById("oldlib"),
    bashiwan = document.getElementById("bashiwan"),
    qrp = document.getElementById("qrp"),
    xk = document.getElementById("xk"),
    fengyu = document.getElementById("fengyu"),
    wudong = document.getElementById("wudong"),
    shutu = document.getElementById("shutu"),
    yf = document.getElementById("yf"),
    newgate = document.getElementById("newgate"),
    erjiao = document.getElementById("erjiao"),
    sijiao = document.getElementById("sijiao"),
    sanjiao = document.getElementById("sanjiao"),
    bajiao = document.getElementById("bajiao"),
    close = document.getElementById("close"),
    pre = document.getElementById("pre"),
    next = document.getElementById("next"),
    slider = document.getElementById("slider"),
    tanchuang = document.getElementById("mapBanner");


    function getElementLeft(element){
　　　　var Left = element.offsetLeft - 33;
　　　　return Left;
　　}
    

    function getElementTop(element){
　　　　var top = element.offsetTop + 45;
　　　　return top;
　　}
// $('#inner').onclick(function(){
//         $(this).animate({
//           zoom: 1.1
//           },
//          8000);
//     },function(){
//       $(this).animate({
//           zoom:.8
//           },
//           8000);
//     });
var flag = 0;

next.onclick = function () { 
    slider.style.left = slider.style.left - 465 +'px';
}

pre.onclick = function () {
    if(slider.style.left < 0) {
        slider.style.left = slider.style.left + 465 +'px';
    }
}
    
taiji.onmouseover = function () {
    move.style.top =  getElementTop(taiji) + 'px';
    move.style.left =  getElementLeft(taiji) + 'px'; 
    move.innerHTML = "太极操场";
}
laocao.onmouseover = function () {
    move.style.top = getElementTop(laocao) + 'px';
    move.style.left = getElementLeft(laocao) + 'px';
    move.innerHTML = "老操场";
}
oldlib.onmouseover = function () {
    move.style.top = getElementTop(oldlib) + 'px';
    move.style.left = getElementLeft(oldlib) + 'px'; 
    move.innerHTML = "老图书馆";
}
bashiwan.onmouseover = function () {
    move.style.top = getElementTop(bashiwan) + 'px';
    move.style.left = getElementLeft(bashiwan) + 'px'; 
    move.innerHTML = "八十万";
}
qrp.onmouseover = function () {
    move.style.top = getElementTop(qrp) + 'px';
    move.style.left = getElementLeft(qrp) + 'px'; 
    move.innerHTML = "情人坡";
}
xk.onmouseover = function () {
    move.style.top = getElementTop(xk) + 'px';
    move.style.left = getElementLeft(xk) + 'px'; 
    move.innerHTML = "信科";
}
fengyu.onmouseover = function () {
    move.style.top = getElementTop(fengyu) + 'px';
    move.style.left = getElementLeft(fengyu) + 'px';
    move.innerHTML = "风雨操场";
}
wudong.onmouseover = function () {
    move.style.top = getElementTop(wudong) + 'px';
    move.style.left = getElementLeft(wudong) + 'px'; 
    move.innerHTML = "五栋篮球场";
}
shutu.onmouseover = function () {
    move.style.top = getElementTop(shutu) + 'px';
    move.style.left = getElementLeft(shutu) + 'px'; 
    move.innerHTML = "数字图书馆";
}
yf.onmouseover = function () {
    move.style.top = getElementTop(yf) + 'px';
    move.style.left = getElementLeft(yf) + 'px';
    move.innerHTML = "逸夫科技馆";
}
newgate.onmouseover = function () {
    move.style.top = getElementTop(newgate) + 'px';
    move.style.left = getElementLeft(newgate) + 'px';
    move.innerHTML = "新校门";
}
erjiao.onmouseover = function () {
   move.style.top = getElementTop(erjiao) + 'px';
    move.style.left = getElementLeft(erjiao) + 'px'; 
    move.innerHTML = "二教";
}
sijiao.onmouseover = function () {
    move.style.top = getElementTop(sijiao) + 'px';
    move.style.left = getElementLeft(sijiao) + 'px';
    move.innerHTML = "四教";
}
sanjiao.onmouseover = function () {
    move.style.top = getElementTop(sanjiao) + 'px';
    move.style.left = getElementLeft(sanjiao) + 'px';
    move.innerHTML = "三教";
}
bajiao.onmouseover = function () {
    move.style.top = getElementTop(bajiao) + 'px';
    move.style.left = getElementLeft(bajiao) + 'px';
    move.innerHTML = "八教";
}


taiji.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}

laocao.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
oldlib.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
bashiwan.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
qrp.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
xk.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
fengyu.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
wudong.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
shutu.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
yf.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
newgate.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
erjiao.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
sijiao.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
sanjiao.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
bajiao.onclick = function () {
    tanchuang.style.top = 100 + 'px';
}
close.onclick = function () {
    tanchuang.style.top = 600 + 'px';
}
