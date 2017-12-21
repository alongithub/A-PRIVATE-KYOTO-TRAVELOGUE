var oA=document.getElementById('menu');
var oM_nav=document.getElementById('m_nav');
var oBgc=document.getElementById('bgc');
oA.onclick=function(){
	
	   oM_nav.style.right='0';
	   oM_nav.style.display='block';
	   oA.style.right='75%';
	   document.body.style.cssText='overflow:hidden';
     oBgc.style.display='block';

     
      oBgc.onclick=function(){
         oM_nav.style.right='-75%';
         oA.style.right='3%';
         document.body.style.cssText='overflow:scroll'; 
         oBgc.style.display='none';

      }
}

var oLb1=document.getElementById('lb1');
var oImg=oLb1.getElementsByTagName('img');
var zIndex=1;

setInterval(function(){
  zIndex++;
     oImg[(zIndex-1)%oImg.length].style.cssText='z-index:'+zIndex;
  },4000);

var oLb2=document.getElementById('lb2');
var oImg1=oLb2.getElementsByTagName('img');
var zIndex1=1;

setInterval(function(){
  zIndex1++;
     oImg1[(zIndex1-1)%oImg1.length].style.cssText='z-index:'+zIndex;
  },4500);

