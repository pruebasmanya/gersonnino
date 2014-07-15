$(document).ready(function(){
    $('#scene').parallax({
    	limitY: 0
    });
    $('#personaje').jsMovie({
		images : ['kalin.png'],
		folder : 'images/',
		height : 711,
		width: 336,
		grid : {height:711, width:336, columns:1, rows:12},
		showPreLoader : false,
		playOnLoad : true
	});
    $('#personaje').jsMovie('play');
    $('#cd-dropdown1').dropdown();
    $('#cd-dropdown2').dropdown();
    $('.shapes .shape').each(function(i){
    	$(this).delay((i++) * 800).fadeTo(1000, 1);
    	console.log(i);
    });
});