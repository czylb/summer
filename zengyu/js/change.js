

// 重邮周边、攻略

;(function() {
	var tab = document.querySelectorAll(".str_list li");
	var act = document.querySelectorAll(".str_content > div");
	for(var i = 0;i < tab.length;i++){
		tab[i].index = i;
		tab[i].addEventListener('click',function(){
			for(i = 0;i < tab.length;i++){
				tab[i].id = '';
				act[i].className = 'str_hid';
			}
			tab[this.index].id = 'str1';
			act[this.index].className = '';
			})
	}
}());

// 重游周边
;(function() {
	var tab0 = document.querySelectorAll(".zb_list li");
	var act0 = document.querySelectorAll(".zb_content > div");
	for(var i = 0;i < tab0.length;i++){
		tab0[i].index = i;
		tab0[i].addEventListener('click',function(){
			for(i = 0;i < tab0.length;i++){
				tab0[i].id = '';
				act0[i].className = 'zb_hid';
			}
			tab0[this.index].id = 'zb1';
			act0[this.index].className = '';
			})
	}
}());

// 重邮攻略
;(function() {
	var tab1 = document.querySelectorAll(".gl_list li");
	var act1 = document.querySelectorAll(".gl_content > div");
	for(var i = 0;i < tab1.length;i++){
		tab1[i].index = i;
		tab1[i].addEventListener('click',function(){
			for(i = 0;i < tab1.length;i++){
				tab1[i].id = '';
				act1[i].className = 'gl_hid';
			}
			tab1[this.index].id = 'gl1';
			act1[this.index].className = '';
			})
	}	
}());

// 入学须知
;(function() {
	var tab2 = document.querySelectorAll(".en_list li");
	var act2 = document.querySelectorAll(".en_word > div");
	for(var i = 0;i < tab2.length;i++){
		tab2[i].index = i;
		tab2[i].addEventListener('click',function(){
			for(i = 0;i < tab2.length;i++){
				tab2[i].id = '';
				act2[i].className = 'en_hid';
			}
			tab2[this.index].id = 'en1';
			act2[this.index].className = '';
			})
	}	
}());
