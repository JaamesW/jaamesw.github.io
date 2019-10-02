$(".nav-list-item").click(function(e) {
	if ($(this).hasClass('slider')) {
		return;
	}

	var whatTab = $(this).index();
	var howFar = 132 * whatTab;

	$(".slider").css({
		left: howFar + "px"
	});

	var posX = $(this).offset().left,
		posY = $(this).offset().top,
		buttonWidth = $(this).width(),
		buttonHeight = $(this).height();
});

$( ".nav-list-item:first-of-type" ).addClass( "active" );

$(".nav-list-item").on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
 })