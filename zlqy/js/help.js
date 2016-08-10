var tip1 = document.getElementById('tips1'),
    tip2 = document.getElementById('tips2'),
    tip3 = document.getElementById('tips3'),
    tip4 = document.getElementById('tips4');
  var  w = document.querySelectorAll('.w'); 
  var  tip = document.querySelectorAll('.tips');
  var ques = document.querySelectorAll('.ques');

    function shown (index) {
        for (var i = 0 ; i<4 ; i++) {
            tip[i].className = 'tips';
            ques[i].style.display = 'none';
        }
        tip[index].className = 'tips on';
        ques[index].style.display = 'block';
    }
    
    tip[0].onclick = function () {
        shown(0);
    }
    tip[1].onclick = function () {
        shown(1);
    }
    tip[2].onclick = function () {
        shown(2);
    }
    tip[3].onclick = function () {
        shown(3);
    }

   


