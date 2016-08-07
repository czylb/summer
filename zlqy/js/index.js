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
    inner = document.getElementById("inner"),
    tanchuang = document.getElementById("mapBanner");


function getElementLeft(element){//获取地标水平位置
    var Left = element.offsetLeft - 33;
　　return Left;
}
    

function getElementTop(element){//获取地标垂直位置
　　var top = element.offsetTop + 45;
　　return top;
}
    
inner.style.width = 980 + 'px';
inner.style.height = 532 + 'px';
var num = 0;

function big(value) {//放大函数
    var width = parseInt(inner.style.width);
    var height = parseInt(inner.style.height);
    if(value != null) {
        inner.style.width = width *1.02 + 'px'; 
        inner.style.height = height*1.02 + 'px';
    }
}

function small(value) {//缩小函数
    var width = parseInt(inner.style.width);
    var height = parseInt(inner.style.height);
    if(value != null) {
        inner.style.width = width /1.02 + 'px'; 
        inner.style.height = height/1.02 + 'px';
    }
}

jia.onclick = function () {
    if ( num > 3) {
        alert("图片已放到最大");
        num = null;
    }
    big(num);
    num++;
}

jian.onclick = function () {
    if (num<-2) {
        alert("图片已达最小");
        num = null;
    }
    small(num);
    num--;
}

var flag = 0;
var pic = document.querySelectorAll('.same');
var index = pic.length;
var picon = document.getElementById("picCon");
var picwhole = document.getElementById("picWhole");
var time = setInterval("animate();",3000);



picwhole.addEventListener('mouseover',function() {
    clearInterval(time);
})
picwhole.addEventListener('mouseout',function() {
    time = setInterval("animate();",3000);
})



picon.addEventListener('mouseover',function() {
    pre.style.display = 'block';
    next.style.display = 'block';
    // clearInterval(time);
})
picon.addEventListener('mouseout',function() {
    pre.style.display = 'none';
    next.style.display = 'none';
    // time = setInterval("animate();",3000);
})

pre.addEventListener('mouseover', function() {
    // clearInterval(time);
})
pre.addEventListener('mouseout', function() {
    // time = setInterval("animate();",3000);
})
next.addEventListener('mouseover', function() {
    // clearInterval(time);
})
next.addEventListener('mouseout', function() {
    // time = setInterval("animate();",3000);
})
function animate(val) {//轮播函数
    if(val != null) {
        flag = val - 2;
    }
    if(flag < index - 1) {
        flag++; 
    }
    else {
        flag = 0;
    }
    slider.style.left = flag * -465 + 'px';
    shown(flag);
}
function animate1(valu) {
    if(valu != null) {
        flag = val - 2;
    }
    if(0 < flag < index - 1) {
        flag--; 
    }
    else {
        flag = 0;
    }
    slider.style.left = flag * -465 + 'px';
    shown(flag);
}



next.onclick = function () { 
    // clearInterval(time);
   animate();
}

pre.onclick = function () {
    // clearInterval(time);
   animate1();

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
chqs.onmouseover = function () {
    move.style.top = getElementTop(chqs) + 'px';
    move.style.left = getElementLeft(chqs) + 'px';
    move.innerHTML = "春华秋实广场";
}


taiji.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(9);
    shown(8);
}

laocao.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(15);
    shown(14);
}
oldlib.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(1);
    shown(0);
}
bashiwan.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(3);
    shown(2);
}
qrp.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(7);
    shown(6);
}
xk.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(6);
    shown(5);
}
fengyu.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(5);
    shown(4);
}
wudong.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(8);
    shown(7);
}
shutu.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(16);
    shown(15);
}
yf.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(10);
    shown(9);
}
newgate.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(11);
    shown(10);
}
erjiao.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(4);
    shown(3);
}
sijiao.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(14);
    shown(13);
}
sanjiao.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(13);
    shown(12);
}
bajiao.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(2);
    shown(1);    
}
chqs.onclick = function () {
    tanchuang.style.top = 100 + 'px';
    // clearInterval(time);
    animate(12);
    shown(11);
}
close.onclick = function () {
    tanchuang.style.top = 600 + 'px';
}

var biaoti = document.getElementById("biaoti");
var pa = document.getElementById("pa");

function shown (some) {
    switch(some) {
        case 0 : biaoti.innerHTML = "老图书馆" , pa.innerHTML = "沉浸于书海，听不见一丝的声音，只剩知识在脑海里交响，喧腾。翻页，亦或是轻轻合拢，用不着辗转反侧，你所思所求，可都在这殿堂中。"; break;
        case 1 :biaoti.innerHTML = "八教" , pa.innerHTML = "经典的红绿蓝，高高地矗立在云端。浪漫，文艺，汇集于一体，这梦想的帆船载着重邮人的信念一路向前。"; break;
        case 2 :biaoti.innerHTML = "八十万" , pa.innerHTML = "据民间神秘知情人士透露，建造八十万花了整整80万大洋。这二楼小洋房般的豪华公厕给予多少邮子便捷，释放了多少匆匆过客的压力！"; break;
        case 3 :biaoti.innerHTML = "二教" , pa.innerHTML = "在咱们这个学术气息浓厚的皇家大重邮，老图和数字图书馆的自习室座位往往是等不到你的到来的，那么这时候位于老图对面，老操场对面的近便的第二教学楼便是你最好的选择。"; break;
        case 4 :biaoti.innerHTML = "风雨操场" , pa.innerHTML = "这里是挥洒汗水的场馆，这里是见证友谊的舞台，这个地方神采万千，这个地方激情飞扬，起跳后仰，发力扣杀，双眼从不迷茫，胜利，竭尽全力。"; break;
        case 5 :biaoti.innerHTML = "信科" , pa.innerHTML = "也许它不是最别致的建筑，但它却是重邮最高（sao）的建筑。这里还聚集着一群程序猿，是工科学子实现梦想的摇篮。"; break;
        case 6 :biaoti.innerHTML = "情人坡" , pa.innerHTML = "于百花中寻觅，于千草间踱行。池畔桥旁，莺声燕语；鸾凤和鸣，长歌当行。"; break;
        case 7 :biaoti.innerHTML = "五栋篮球场" , pa.innerHTML = "在这里，有排球小将们的身影，有羽球达人们的足迹，更有灌篮高手门的飒爽英姿。"; break;
        case 8 :biaoti.innerHTML = "太极操场" , pa.innerHTML = "这里有我们挥汗拼搏的运动赛事，有我们军训铁一般的坚强意志，更有我们开学典礼上充满希望的新奇。"; break;
        case 9 :biaoti.innerHTML = "逸夫科技楼" , pa.innerHTML = "这里有着其他地方无可比拟的厚度，一个甲子的沉淀，使得历史的气息从一进门便扑面而来，校史馆的每一件展品都藏着一个老故事，只要你看过，就有动力为重邮未来添上一笔。"; break;
        case 10 :biaoti.innerHTML = "新校门" , pa.innerHTML = "谈不上气派，可就是有一种说不清的韵味。一枚小小的邮票，任邮戳在湛蓝的天空下飞舞。站在门前，享受着微风抚摸脸颊，淡淡的书香，吹进耳朵，变成了闲时嬉戏打闹的声音，不一会儿，就成了运动时的呐喊了。"; break;
        case 11 :biaoti.innerHTML = "春华秋实广场" , pa.innerHTML = "当黄桷馨声与草坪音乐的歌声在这里响起，当辛勤的学子从这里经过走进老图，奔向信科...她在这里见证了一代又一代邮子的成长，见证了 一个又一个的成功。"; break;
        case 12 :biaoti.innerHTML = "三教(图片来自网络)" , pa.innerHTML = "国旗飘扬在前，雏鸟啼鸣在侧，鸟语花香，读书之地，波光潋滟，奋斗之初，这里有“三国”，有学子，有故事，最自豪的，便是在清晨看着缓缓升起的国旗，耳边不断传送着国歌。"; break;
        case 13 :biaoti.innerHTML = "四教(图片来自网络)" , pa.innerHTML = "大一的时候，这里有咱们重邮人每周必去的“英语一条街”。这栋拥有着年代感的第四教学楼，也是我们梦想的聚集地。"; break;
        case 14 :biaoti.innerHTML = "老操(图片来自网络)" , pa.innerHTML = "不管秋冬还是春夏，不管刮风还是下雨，不管日升还是日落，重邮人总是奔跑在这儿，坚信自己的梦想风向标就在前方。"; break;
        case 15 :biaoti.innerHTML = "数图(图片来自网络)" , pa.innerHTML = "在这里，有最全面的数字信息，有最前端的科技资讯，有最开阔的“互联网+”平台。"; break;
    }

}

