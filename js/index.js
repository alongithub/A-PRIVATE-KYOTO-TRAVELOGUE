var oA=document.getElementById('menu');
var oM_nav=document.getElementById('m_nav');
var oBgc=document.getElementById('bgc');
oA.onclick=function(){
	
	   oM_nav.style.right='0';
	   oM_nav.style.display='block';
	   oA.style.right='75%';
	   divBody.style.cssText='overflow-y:hidden;position: relative;overflow-x: hidden;height: 100%;';
     oBgc.style.display='block';

     
    
    
      oBgc.onclick=function(){
         oM_nav.style.right='-75%';
         oA.style.right='3%';
         divBody.style.cssText='overflow-y:scroll;position: relative;overflow-x: hidden;height: 100%;'; 
         oBgc.style.display='none';

      }
}

var oDiv1=document.getElementById('one');
var oDiv2=document.getElementById('two');
var oDiv3=document.getElementById('three');
var oDiv4=document.getElementById('four');
var oDiv5=document.getElementById('five');
var oDrr=[oDiv1,oDiv2,oDiv3,oDiv4,oDiv5];

var oFtop=document.getElementById('ftop');
var oNav=document.getElementById('siderBar');
var oArr=oNav.getElementsByTagName('a');


oFtop.onclick=function(){//点击底部滚动到顶部
  Scroll(oDrr[0]);
}

  var scrollStaff = true;                                             

for(var i=0;i<oArr.length;i++){   
    oArr[0].style.background='#000'; 
    oArr[this.i].style.background='#fff';
    oArr[i].i = i;   
    oArr[i].onclick = function(){  
          scrollStaff = false;                                        
         Scroll(oDrr[this.i]);//滚动到相应版块
         for (var j = 0; j < oArr.length; j++) {
           oArr[j].style.background='#fff';

         }
         currDrr = this.i;                                         
      oArr[this.i].style.background='#000';
           
      }
  }

var timer = null;
  function Scroll(obj/*要滚动到的位置的元素*/){    
    var scrollHeight = parseInt(obj.offsetTop);   
        clearInterval(timer);
             
      timer = setInterval(function(){        
        var bodyScroll = parseInt(divBody.scrollTop);         
        if(bodyScroll == scrollHeight ){         
          clearInterval(timer); 
          scrollStaff = true;        
          }
           else{
        var iSpeed = parseFloat((scrollHeight - bodyScroll) / 7); 
        iSpeed = iSpeed>0? Math.ceil(iSpeed):Math.floor(iSpeed);
        bodyScroll += iSpeed;
        divBody.scrollTop = bodyScroll;
           } 
        },50);
  
  }

 
var currDrr = 0;
// var sbg_List= new Array;//2、
 
function bodyOnScroll(){
  //3、
  // if (oDrr[currDrr].getBoundingClientRect().top<=0) {//滑倒当前快区域内
  //   oArr[currDrr].style.background = '#f00';
  //   lastDrr = currDrr;
  //   console.log('下last：'+(lastDrr+1));
  //   currDrr = currDrr<(oDrr.length-1)? currDrr+1:currDrr;
  //   console.log('下curr：'+(currDrr+1));
  // }
  // if (oDrr[lastDrr].getBoundingClientRect().top>50) {
  //   if (currDrr == lastDrr) {
  //     lastDrr --;
  //   }
  //   else{
  //     currDrr --; 
  //     lastDrr = currDrr --;
  //   }
  //    oArr[lastDrr].style.background = '#0f0';
  //   console.log('上-----last：'+(lastDrr+1));
  //   console.log('上-----curr：'+(currDrr+1));
  // }
if(scrollStaff){
  if (oDrr[currDrr].getBoundingClientRect().top<=0) {//滑倒当前快区域内
    for (var j = 0; j < oArr.length; j++) {
           oArr[j].style.background='#fff';
         }
    oArr[currDrr].style.background = '#000';
    currDrr ++;
    if (currDrr >= 5) {currDrr = 4;}
    console.log("currDrr++"+currDrr);
  }else{
 // if(oDrr[currDrr].getBoundingClientRect().top>0){
     for (var j = 0; j < oArr.length; j++) {
           oArr[j].style.background='#fff';
         }
    currDrr--;
    console.log("currDrr--"+currDrr);
    oArr[currDrr].style.background = '#000';
  }
}


  //2、第一种的循环简写
    // for(var i = 0;i< oDrr.length;i++)
    //   {
    //     sbg_List[i] = oDrr[i].getBoundingClientRect().top;
    //   }


    // for(var i = 0;i<oDrr.length;i++){
    //   if (sbg_List[i]<=20) {
    //    // console.log('sbg_List['+i+']<=10'+sbg_List[i])
    //     for(var j = 0;j<oArr.length;j++)
    //     {
    //       oArr[j].style.background = '#fff';
    //     }
    //     oArr[i].style.background = '#000';
    //   }
    // }


//1、分别获取每个块距离窗口顶部的高度
    /* var sBg0=oDrr[0].getBoundingClientRect().top;
    if (sBg0<=10) {
      oArr[0].style.background='none';      
    }

    var sBg1=oDrr[1].getBoundingClientRect().top;
    if (sBg1<=10) {
      oArr[0].style.background='#fff';
      oArr[1].style.background='none';      
    }else{
       oArr[1].style.background='#fff';
    }
    var sBg2=oDrr[2].getBoundingClientRect().top;
    if (sBg2<=10) {
      oArr[1].style.background='#fff';
      oArr[2].style.background='none';      
    }else{
      oArr[2].style.background='#fff'; 
    }
     var sBg3=oDrr[3].getBoundingClientRect().top;
    if (sBg3<=40) {
      oArr[2].style.background='#fff';
      oArr[3].style.background='none';      
    }else{
      oArr[3].style.background='#fff'; 
    }

      var sBg4=oDrr[4].getBoundingClientRect().top;
    if (sBg4<=20) {
      oArr[3].style.background='#fff';
      oArr[4].style.background='none';      
    }else{
      oArr[4].style.background='#fff'; 
    }
*/




  }