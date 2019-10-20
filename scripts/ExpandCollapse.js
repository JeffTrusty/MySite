/*  JavaScript Document                       */
/*  Written by Chris Converse for Lynda.com   */

$(document).ready(function() {

	$('.section_title').click(function(){
		if ($(this).parent().is('.open')) {
			$(this).closest('.section').find('.section_container').animate({'height':'0'},500);
			$(this).closest('.section').removeClass('open');
		}else{
			var newHeight = $(this).closest('.section').find('.section_container_links').height() + 'px';
			$(this).closest('.section').find('.section_container').animate({'height':newHeight},500);
			$(this).closest('.section').addClass('open');
		}
	});

	findAnchorLink();

});

function findAnchorLink(){
	if (location.href.indexOf('#') != -1) {
		var namedAnchor = window.location.hash;
		var faqToFind = namedAnchor + ' .section_title';
		$(faqToFind).trigger('click');
	}
}
