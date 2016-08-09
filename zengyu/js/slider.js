    // 攻略轮播
    var pic = document.querySelectorAll('.pic_block');
    var shang = document.querySelector('.sli_left');
    var xia = document.querySelector('.sli_right');
    pic[0].style.left = 0 + "px";
    pic[1].style.left = 690 + "px";
    pic[2].style.left = 1380 + "px";
    pic[3].style.left = 2070 + "px";
    shang.addEventListener('mouseover', function() {
      clearInterval(time);
    })
    shang.addEventListener('mouseout', function() {
      time = setInterval("turn();",2000);
    })
    xia.addEventListener('mouseover', function() {
      clearInterval(time);
    })
    xia.addEventListener('mouseout', function() {
      time = setInterval("turn();",2000);
    })
    shang.addEventListener('click', function() {
      turn1();
    })
        xia.addEventListener('click',function() {
      turn();
    })
    var time = setInterval("turn();",2000);
    var flag = 0;
    var num = pic.length; 
        // 轮播函数
    function turn(value) {
      if(value != null) {
        flag = value - 2;
      }
      if(flag < num) {
        flag++; 
      }
      else {
        flag = 0;
       
      }
      if(flag == 0) {
        pic[0].style.left = 0 + "px";
        pic[1].style.left = 690 + "px";
        pic[2].style.left = 1380 + "px";
        pic[3].style.left = 2070 + "px";
      }
      if(flag == 1) {
        pic[0].style.left = -690 + "px";
        pic[1].style.left = 0 + "px";
        pic[2].style.left = 690 + "px";
        pic[3].style.left = 1380 + "px";
      }
      if(flag == 2) {
        pic[0].style.left = -1380 + "px";
        pic[1].style.left = -690 + "px";
        pic[2].style.left = 0 + "px";
        pic[3].style.left = 690 + "px";
      }
      if(flag == 3) {
        pic[0].style.left = -2070 + "px";
        pic[1].style.left = -1380 + "px";
        pic[2].style.left = -690 + "px";
        pic[3].style.left = 0 + "px";
      }
    }
    // 反向轮播
    function turn1(value) {
      if(value != null) {
        flag = value - 2;
      }
      if(flag > 0) {
        flag--; 
      }
      else {
        flag = 3;
       
      }
      if(flag == 0) {
        pic[0].style.left = 0 + "px";
        pic[1].style.left = 690 + "px";
        pic[2].style.left = 1380 + "px";
        pic[3].style.left = 2070 + "px";
      }
      if(flag == 1) {
        pic[0].style.left = -690 + "px";
        pic[1].style.left = 0 + "px";
        pic[2].style.left = 690 + "px";
        pic[3].style.left = 1380 + "px";
      }
      if(flag == 2) {
        pic[0].style.left = -1380 + "px";
        pic[1].style.left = -690 + "px";
        pic[2].style.left = 0 + "px";
        pic[3].style.left = 690 + "px";
      }
      if(flag == 3) {
        pic[0].style.left = -2070 + "px";
        pic[1].style.left = -1380 + "px";
        pic[2].style.left = -690 + "px";
        pic[3].style.left = 0 + "px";
      }
    }

    // 生活轮播
    var day_pic = document.querySelectorAll('.day_sli_block');
    var day_shang = document.querySelector('.day_sli_left');
    var day_xia = document.querySelector('.day_sli_right');
    day_pic[0].style.left = 0 + "px";
    day_pic[1].style.left = 690 + "px";
    day_pic[2].style.left = 1380 + "px";
    day_shang.addEventListener('mouseover', function() {
      clearInterval(day_time);
    })
    day_shang.addEventListener('mouseout', function() {
      day_time = setInterval("turn_day();",2000);
    })
    day_xia.addEventListener('mouseover', function() {
      clearInterval(day_time);
    })
    day_xia.addEventListener('mouseout', function() {
      day_time = setInterval("turn_day();",2000);
    })
    day_shang.addEventListener('click', function() {
      turn_day1();
    })
    day_xia.addEventListener('click',function() {
      turn_day();
    })
    var day_time = setInterval("turn_day();",2000);
    var num = day_pic.length; 
    var d = 0;
        // 轮播函数
    function turn_day(value) {
      if(value != null) {
        d = value - 2;
      }
      if(d < num - 1) {
        d++; 
      }
      else {
        d = 0;
       
      }
      if(d == 0) {
        day_pic[0].style.left = 0 + "px";
        day_pic[1].style.left = 690 + "px";
        day_pic[2].style.left = 1380 + "px";
      }
      if(d == 1) {
        day_pic[0].style.left = -690 + "px";
        day_pic[1].style.left = 0 + "px";
        day_pic[2].style.left = 690 + "px";
      }
      if(d == 2) {
        day_pic[0].style.left = -1380 + "px";
        day_pic[1].style.left = -690 + "px";
        day_pic[2].style.left = 0 + "px";
      }
    }
    // 反向轮播
    function turn_day1(value) {
      if(value != null) {
        d = value - 2;
      }
      if(d > 0) {
        d--; 
      }
      else {
        d = 2;
       
      }
      if(d == 0) {
        day_pic[0].style.left = 0 + "px";
        day_pic[1].style.left = 690 + "px";
        day_pic[2].style.left = 1380 + "px";
      }
      if(d == 1) {
        day_pic[0].style.left = -690 + "px";
        day_pic[1].style.left = 0 + "px";
        day_pic[2].style.left = 690 + "px";
      }
      if(d == 2) {
        day_pic[0].style.left = -1380 + "px";
        day_pic[1].style.left = -690 + "px";
        day_pic[2].style.left = 0 + "px";
      }
    }


    // 美食轮播
    var food_pic = document.querySelectorAll('.food_sli_block');
    var food_shang = document.querySelector('.food_sli_left');
    var food_xia = document.querySelector('.food_sli_right');
    food_pic[0].style.left = 0 + "px";
    food_pic[1].style.left = 690 + "px";
    food_pic[2].style.left = 1380 + "px";
    food_shang.addEventListener('mouseover', function() {
      clearInterval(food_time);
    })
    food_shang.addEventListener('mouseout', function() {
      food_time = setInterval("turn_food();",2000);
    })
    food_xia.addEventListener('mouseover', function() {
      clearInterval(food_time);
    })
    food_xia.addEventListener('mouseout', function() {
      food_time = setInterval("turn_food();",2000);
    })
    food_shang.addEventListener('click', function() {
      turn_food1();
    })
    food_xia.addEventListener('click',function() {
      turn_food();
    })
    var food_time = setInterval("turn_food();",2000);
    var num = food_pic.length; 
    var f = 0;
        // 轮播函数
    function turn_food(value) {
      if(value != null) {
        f = value - 2;
      }
      if(f < num - 1) {
        f++; 
      }
      else {
        f = 0;
       
      }
      if(f == 0) {
        food_pic[0].style.left = 0 + "px";
        food_pic[1].style.left = 690 + "px";
        food_pic[2].style.left = 1380 + "px";
      }
      if(f == 1) {
        food_pic[0].style.left = -690 + "px";
        food_pic[1].style.left = 0 + "px";
        food_pic[2].style.left = 690 + "px";
      }
      if(f == 2) {
        food_pic[0].style.left = -1380 + "px";
        food_pic[1].style.left = -690 + "px";
        food_pic[2].style.left = 0 + "px";
      }
    }
    // 反向轮播
    function turn_food1(value) {
      if(value != null) {
        f = value - 2;
      }
      if(f > 0) {
        f--; 
      }
      else {
        f = 2;
       
      }
      if(f == 0) {
        food_pic[0].style.left = 0 + "px";
        food_pic[1].style.left = 690 + "px";
        food_pic[2].style.left = 1380 + "px";
      }
      if(f == 1) {
        food_pic[0].style.left = -690 + "px";
        food_pic[1].style.left = 0 + "px";
        food_pic[2].style.left = 690 + "px";
      }
      if(f == 2) {
        food_pic[0].style.left = -1380 + "px";
        food_pic[1].style.left = -690 + "px";
        food_pic[2].style.left = 0 + "px";
      }
    }

    // 美景轮播
    var scene_pic = document.querySelectorAll('.scene_sli_block');
    var scene_shang = document.querySelector('.scene_sli_left');
    var scene_xia = document.querySelector('.scene_sli_right');
    scene_pic[0].style.left = 0 + "px";
    scene_pic[1].style.left = 690 + "px";
    scene_pic[2].style.left = 1380 + "px";
    scene_shang.addEventListener('mouseover', function() {
      clearInterval(scene_time);
    })
    scene_shang.addEventListener('mouseout', function() {
      scene_time = setInterval("turn_scene();",2000);
    })
    scene_xia.addEventListener('mouseover', function() {
      clearInterval(scene_time);
    })
    scene_xia.addEventListener('mouseout', function() {
      scene_time = setInterval("turn_scene();",2000);
    })
    scene_shang.addEventListener('click', function() {
      turn_scene1();
    })
    scene_xia.addEventListener('click',function() {
      turn_scene();
    })
    var scene_time = setInterval("turn_scene();",2000);
    var num = scene_pic.length; 
    var s = 0;
        // 轮播函数
    function turn_scene(value) {
      if(value != null) {
        s = value - 2;
      }
      if(s < num - 1) {
        s++; 
      }
      else {
        s = 0;
       
      }
      if(s == 0) {
        scene_pic[0].style.left = 0 + "px";
        scene_pic[1].style.left = 690 + "px";
        scene_pic[2].style.left = 1380 + "px";
      }
      if(s == 1) {
        scene_pic[0].style.left = -690 + "px";
        scene_pic[1].style.left = 0 + "px";
        scene_pic[2].style.left = 690 + "px";
      }
      if(s == 2) {
        scene_pic[0].style.left = -1380 + "px";
        scene_pic[1].style.left = -690 + "px";
        scene_pic[2].style.left = 0 + "px";
      }
    }
    // 反向轮播
    function turn_scene1(value) {
      if(value != null) {
        s = value - 2;
      }
      if(s > 0) {
        s--; 
      }
      else {
        s = 2;
       
      }
      if(s == 0) {
        scene_pic[0].style.left = 0 + "px";
        scene_pic[1].style.left = 690 + "px";
        scene_pic[2].style.left = 1380 + "px";
      }
      if(s == 1) {
        scene_pic[0].style.left = -690 + "px";
        scene_pic[1].style.left = 0 + "px";
        scene_pic[2].style.left = 690 + "px";
      }
      if(s == 2) {
        scene_pic[0].style.left = -1380 + "px";
        scene_pic[1].style.left = -690 + "px";
        scene_pic[2].style.left = 0 + "px";
      }
    }