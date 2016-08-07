var listLeft = document.querySelectorAll(".cqdis-list");
var lastfour = 0;
var fouInfo = document.querySelectorAll(".cqdis-info");
var orgthree = document.querySelectorAll(".orgthree");
var lastthree = 0;
var lastSix = 0;
var orgthreeInfo = document.querySelectorAll(".orgthreeInfo");

var orgschoolList = document.querySelectorAll(".orgschoolList");
//校级组织分目录
for(var k = 0, len = orgschoolList.length; k < len; k ++) {
    orgschoolList[k].addEventListener("click", function(k) {
        return (function() {
            if(lastSix == 0) {
                 orgschoolList[lastSix].style.backgroundImage = "url(../images/schoollist.png)";
            }  else {
                orgschoolList[lastSix].style.backgroundImage = "url(../images/schoollist1.png)";
            }
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
//校级组织三个li
for(var j = 0, len = orgthree.length; j < len; j ++) {
    orgthree[j].addEventListener("click", function(j) {
        return (function() {
            css(orgthree[lastthree], {
               "background-image" :"url(../images/orgbak.gif)",
               color: "#ffb31f",
               "margin-top": 0,
               height: "45px",
               width: "303px",
               "margin-left":"10px",
               "line-height": "45px"
            });
            orgthreeInfo[lastthree].style.fontSize = "20px";
            orgthreeInfo[j].style.fontSize = "22px";
            css(orgthree[j], {
               "background-image" :"url(../images/orgclick.png)",
               color: "#faac3a",
               "margin-top": "-15px",
               height: "60px",
               width:  "336px",
               "line-height":"60px"
            })
            lastthree = j;
        })
        
    }(j))
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
var orgredRock = document.querySelectorAll(".orgredRock")[0];
var orgstuTeam = document.querySelectorAll(".orgstuTeam")[0];
var orgSchool = document.querySelectorAll(".orgSchool")[0];
var schoolOrg = document.querySelector("#schoolOrg");
var stuTeam = document.querySelector("#stuTeam");
var REDrock = document.querySelector("#REDrock");

REDrock.addEventListener('click', function() {
    orgstuTeam.style.display = "none";   
    orgredRock.style.display = "block"; 
    orgstuTeam.style.display = "none";  
})
schoolOrg.addEventListener('click', function() {
    orgstuTeam.style.display = "none";   
    orgredRock.style.display = "none"; 
    orgSchool.style.display = "block";  
})
stuTeam.addEventListener('click', function() {
    orgstuTeam.style.display = "block";   
    orgredRock.style.display = "none"; 
    orgSchool.style.display = "none";  
})

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