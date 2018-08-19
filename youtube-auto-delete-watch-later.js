
function clf(e,i){ 
	console.log('click');
	e.click(); 
} 

function c(){  
	d() 
	f() 
	setInterval(f,6000) 
}

function f(){
	var el1=document.getElementsByClassName('load-more-button');  
	el1[0].click();
	}
 
function d(){
	var el = document.getElementsByClassName('pl-video-edit-remove');  
	for (var i=0;i<el.length; i++) {  
	 clf(el[i],i)   
	}
}

c() 
setInterval(d, 15000);


