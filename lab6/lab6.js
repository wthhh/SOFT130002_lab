var imgArr=[
    "images/medium/5855774224.jpg",
    "images/medium/5856697109.jpg",
    "images/medium/6119130918.jpg",
    "images/medium/8711645510.jpg",
    "images/medium/9504449928.jpg"
];
var timer=null;
var alpha=30;
var speed=2;
window.onload=(function(){
    var featured=document.getElementById("featured");
    var figCaption=featured.getElementsByTagName("figcaption")[0];
    var mainPicture= featured.getElementsByTagName('img')[0];
    var thumbnails=document.getElementById("thumbnails");

    function changeImage(x){
        mainPicture.src=imgArr[x];
        figCaption.innerHTML=thumbnails.getElementsByTagName("img")[x].title;
    }


    thumbnails.getElementsByTagName("img")[0].onclick=function(){changeImage(0)};
    thumbnails.getElementsByTagName("img")[1].onclick=function(){changeImage(1)};
    thumbnails.getElementsByTagName("img")[2].onclick=function(){changeImage(2)};
    thumbnails.getElementsByTagName("img")[3].onclick=function(){changeImage(3)};
    thumbnails.getElementsByTagName("img")[4].onclick=function(){changeImage(4)};
    
    mainPicture.onmouseover=function(){
        changeOpacity(80)
    }
    mainPicture.onmouseout=function(){
        changeOpacity(0)
    }

    function changeOpacity(target){
        clearInterval(timer);
        timer = setInterval(function(){
         if(target > alpha){
          speed = 2;
         }else{
          speed = -2;
         }
         if(alpha == target){
          clearInterval(timer);
         }
         else{
          alpha = alpha + speed;       
          figCaption.style.opacity = alpha/100;
         }
        },25)
       }
})