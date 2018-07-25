document.addEventListener('DOMContentLoaded', function () {
	var $lis = $('#hiddenList li');
	var line = -1;

	$('#reveal1').click(function(){
		$('#about').show();
		if (line == -1) {
			$lis.css('display', 'block');
			$lis.css('visibility', 'hidden');
			line = 0;
		}
	});

	function showNext() {
		if (line >=0 && line < 10) {
			$lis.slice(line, line + 1).css('visibility', 'visible');
			line += 1;
		}
	}
	
	$(document).keypress(function(e) {
		if(e.which == 13) {
			showNext();
		}
	});

	$('li').click(function() {
		showNext();
	});
	$('#start').click(function() {
		showNext();
	});
});