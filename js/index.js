var shake=document.getElementsByClassName("shake")[0];
var pic=document.getElementsByClassName("shake_li");
for(var i=0;i<12;i++){
	shake.innerHTML+="<li class='shake_li'>\
					<img class='shake_li_img' src='images/img_"+(i+1)+".jpeg' alt='shake'>\
				</li>";
}
var xpos=ypos=0;
var flag=0;
for(var i=0;i<pic.length;i++){
	pic[i].index=i;
	pic[i].onmouseover=function(){
		var index=this.index;
		doShake(flag,index,xpos,ypos);
		/*setTimeout("doShake("+index+",-5,0)",100);
		setTimeout("doShake("+index+",0,0)",200);
		setTimeout("doShake("+index+",0,-5)",300);
		setTimeout("doShake("+index+",0,0)",400);*/
	}
}
//抖动函数
function doShake(flag,shakeNum,xpos,ypos){
	if(flag==1||flag==3){
		xpos=0;
		ypos=0;
	}else if(flag==0){
		xpos=-5;
		ypos=0;
	}else if(flag==2){
		xpos=0;
		ypos=-5;
	}else{
		flag=0;	
		return true;
	}
	pic[shakeNum].style.left=xpos+'px';
	pic[shakeNum].style.top=ypos+'px';
	flag++;
	shakeElem=setTimeout("doShake("+flag+","+shakeNum+","+xpos+","+ypos+")",30);		
	/*pic[shakeNum].style.left=xpos+'px';
	pic[shakeNum].style.top=ypos+'px';*/
}