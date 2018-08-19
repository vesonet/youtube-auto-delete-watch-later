
function wait(ms, cb) {
  var waitDateOne = new Date();
  while ((new Date()) - waitDateOne <= ms) {
    //Nothing
  }
  if (cb) {
    eval(cb);
  }
}
function clf(e,i){ 
	console.log('removed');
	e.click(); 
} 

function c(){  
	d() 
	f() 
	setInterval(f,50000) 
}

function f(){
	var el1=document.getElementsByClassName('load-more-button');  
	el1[0].click();
	}
 
function d(){
	var el = document.getElementsByClassName('pl-video-edit-remove');  
	for (var i=0;i<el.length; i++) {  
	 wait(500,clf(el[i],i));  
	}
}

c() 
setInterval(d, 60000); 
