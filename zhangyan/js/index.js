function goTop(t,o){t=t||.1,o=o||16;var e=0,n=0,r=0,s=0,d=0,u=0;document.documentElement&&(e=document.documentElement.scrollLeft||0,n=document.documentElement.scrollTop||0),document.body&&(r=document.body.scrollLeft||0,s=document.body.scrollTop||0);var d=window.scrollX||0,u=window.scrollY||0,l=Math.max(e,Math.max(r,d)),m=Math.max(n,Math.max(s,u)),c=1+t;if(window.scrollTo(Math.floor(l/c),Math.floor(m/c)),l>0||m>0){var i="goTop("+t+", "+o+")";window.setTimeout(i,o)}}!function(){function t(){var t=(new Date).getTime(),m=new Date("2016/09/05").getTime(),c=m-t,i=Math.floor(c/864e5),g=Math.floor(c%864e5/36e5),a=Math.floor(c%864e5%36e5/6e4),y=Math.floor(c%864e5%36e5%6e4/1e3);i<10&&(i="0"+i),g<10&&(g="0"+g),a<10&&(a="0"+a),y<10&&(y="0"+y),o.style.backgroundPosition="0px "+(0+i.toString().substr(0,1)*-36)+"px",e.style.backgroundPosition="0px "+(0+i.toString().substr(1,1)*-36)+"px",n.style.backgroundPosition="0px "+(0+g.toString().substr(0,1)*-36)+"px",r.style.backgroundPosition="0px "+(0+g.toString().substr(1,1)*-36)+"px",s.style.backgroundPosition="0px "+(0+a.toString().substr(0,1)*-36)+"px",d.style.backgroundPosition="0px "+(0+a.toString().substr(1,1)*-36)+"px",u.style.backgroundPosition="0px "+(0+y.toString().substr(0,1)*-36)+"px",l.style.backgroundPosition="0px "+(0+y.toString().substr(1,1)*-36)+"px"}var o=document.getElementById("daysw"),e=document.getElementById("daygw"),n=document.getElementById("hoursw"),r=document.getElementById("hourgw"),s=document.getElementById("minsw"),d=document.getElementById("mingw"),u=document.getElementById("secsw"),l=(document.getElementById("myimg"),document.getElementById("secgw"));t(),setInterval(t,1e3)}();var gotop=document.getElementById("return");gotop.onclick=function(){return goTop(),!1};