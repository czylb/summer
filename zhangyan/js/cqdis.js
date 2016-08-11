var listLeft = document.querySelectorAll(".cqdis-list");
var lastfour = 0;
var fouInfo = document.querySelectorAll(".cqdis-info");
var orgthree = document.querySelectorAll(".orgthree");
var lastthree = 0;
var lastSix = 0;
var orgthreeInfo = document.querySelectorAll(".orgthreeInfo");

var orgschoolList = document.querySelectorAll(".orgschoolList");
var schoolDisplay = document.querySelectorAll(".school-display")
//校级组织分目录
for(var k = 0, len = orgschoolList.length; k < len; k ++) {
    orgschoolList[k].addEventListener("click", function(k) {
        return (function() {
            if(lastSix == 0) {
                 orgschoolList[lastSix].style.backgroundImage = "url(../images/schoollist.png)";
            }  else {
                orgschoolList[lastSix].style.backgroundImage = "url(../images/schoollist1.png)";
            }
            schoolDisplay[lastSix].style.display = "none";
            schoolDisplay[k].style.display = "block";
            orgschoolList[k].style.backgroundImage = "url(../images/xiaoji.png)";
            lastSix = k;
        })
        
    }(k))
}
//学生组织四个li
var fourtitleLunbo = document.querySelectorAll(".fourtitle-lunbo")[0];
for(var i = 0, len = listLeft.length; i < len; i ++) {
    listLeft[i].addEventListener("click", function(i) {
        return (function() {
            listLeft[lastfour].style.backgroundColor = "#ffe053";
            fouInfo[lastfour].style.color = "#f3860c"
            listLeft[i].style.backgroundColor = "#8fe1df";
            fouInfo[i].style.color = "#fff";
            fourtitleLunbo.style.marginLeft = - i + "00%";//学生组织轮播
            lastfour = i;
        })        
    }(i))
}

function css (el, obj) {
    if (typeof el !== 'object' || typeof obj !== 'object') {
        throw 'el and obj should be object';
    }
    var str = "";

    for (var key in obj) {
        str += key + ":" + obj[key] + ';';
    }
    el.style.cssText = str;
}
(function() {
    var orgthree = document.querySelectorAll(".orgthree");
    var orgDis = document.querySelectorAll(".orgDis");
    var last = 0;
    for(var i = 0, len = orgthree.length; i < len; i ++) {
        orgthree[i].addEventListener("click", function(i) {
            return (function() {
                orgDis[last].style.display = "none";
                orgDis[i].style.display = "block";
                css(orgthree[last], {
                   "background-image" :"url(./images/orgbak.gif)",
                   color: "#ffb31f",
                   "margin-top": 0,
                   height: "45px",
                   width: "303px",
                   "margin-left":"10px",
                   "line-height": "45px"
                });
                orgthreeInfo[last].style.fontSize = "20px";
                orgthreeInfo[i].style.fontSize = "22px";
                css(orgthree[i], {
                   "background-image" :"url(./images/orgclick.png)",
                   color: "#faac3a",
                   "margin-top": "-15px",
                   height: "60px",
                   width:  "336px",
                   "line-height":"60px"
                })
                last = i;
            })        
        }(i))
    }
}())

var goodvideoLunbo = document.querySelectorAll(".good-video-lunbo");
var goodstudentlunbo = document.querySelectorAll(".good-student-lunbo");
var goodteacherlunbo = document.querySelectorAll(".good-teacher-lunbo");
var butLeft = document.querySelectorAll(".button-left");
var butRight = document.querySelectorAll(".button-right");
var videoBox = document.querySelectorAll(".video-box")[0];
var studentBox = document.querySelectorAll(".good-student-box")[0];
var teacherBox = document.querySelectorAll(".good-teacher-box")[0];
function turnAll(box, turnimg, left, right) {
    var num = 0;
    function turnpicLeft(box) {
        if(num) {
            num--;
            box.style.marginLeft = -num + "00%";
        }
    }
    function turnpicRight(box, turnimg) {
        if(num != turnimg.length - 1) {
            num ++;
            box.style.marginLeft = -num + "00%";
        } else {
            box.style.marginLeft = 0;
            num = 0;
        }
    }
    left.addEventListener('click', function() {
        turnpicLeft(box);
    })
    right.addEventListener('click', function() {
        turnpicRight(box, turnimg);
    })
}
turnAll(videoBox, goodvideoLunbo, butLeft[0], butRight[0]);
turnAll(studentBox, goodstudentlunbo, butLeft[1], butRight[1]);
turnAll(teacherBox, goodteacherlunbo, butLeft[2], butRight[2]);


//宣传视频介绍
var eachVideo = document.querySelectorAll(".eachvideo");
var videoHidden = document.querySelectorAll(".video-hidden");
for(var h = 0, len = eachVideo.length; h < len; h ++) {
    eachVideo[h].addEventListener('mouseover', function(h) {
        return (function() {
            videoHidden[h].style.display = "block";
        })
    }(h))
    eachVideo[h].addEventListener('mouseout', function(h) {
        return (function() {
            videoHidden[h].style.display = "none";
        })
    }(h))
}

