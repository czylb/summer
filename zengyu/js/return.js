;(function() {
  var oTop = document.querySelector('.go_top');
  var screenh = document.documentElement.clientHeight||document.body.clientHeight;
  window.addEventListener('scroll', function() {
    scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop >= screenh){
      oTop.style.display='block';
    }else{
      oTop.style.display='none';
    }
    return scrollTop;
  })
  oTop.addEventListener('click', function() {
    document.body.scrollTop =0;
  })
}());
  
