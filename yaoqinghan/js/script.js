var swiper = new Swiper('.swiper-container', {
    //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    direction: 'vertical',
    // 前进按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
});
var MusicBox=document.querySelector("#MusicBox");
var music=document.querySelector("#music");
MusicBox.addEventListener('click',function(){
    if(music.paused){
        music.play();
        MusicBox.style.animationPlayState="running";
           
    }else{
        music.pause();
        MusicBox.style.animationPlayState="paused";
    }
});

