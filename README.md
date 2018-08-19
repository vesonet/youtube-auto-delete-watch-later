# youtube-auto-delete-watch-later
js script for auto deleting Watch Later Playlist

1. First open your "Watch Later Playlist" youtube page
screenshot here: 
https://imgur.com/mYqAPZk

2. Open Chrome -> Wrench menu -> More tools -> Developer Tools
screenshot here: 
https://imgur.com/lRZlb9H

3. Copy and paste the code into the "console" and hit enter
screenshot here: 
https://imgur.com/rHq7bR9


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
