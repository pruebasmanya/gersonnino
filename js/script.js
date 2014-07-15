$(document).ready(function(){
    $('#scene').parallax({
    	limitY: 0
    });
    $('#personaje').jsMovie({
		images : ['kalin.png'],
		folder : 'images/',
		height : 750,
		width: 336,
		grid : {height:750, width:336, columns:1, rows:1},
		showPreLoader : false,
		playOnLoad : true
	});
    $('#personaje').jsMovie('play');
});