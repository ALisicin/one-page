$(function () {
	var nowY = new Date().getFullYear(),
	options = "";
	for(var Y=nowY-18; Y>=1940; Y--) {
	  options += "<div>"+ Y +"</div>";
	}
	
	$("#years .select-dropdown").append( options );
	$("#years .select-active-val").text('1987');

	$("#years .select-dropdown div").click( function() {
		let birthYear = $(this).text();
		$("#years .select-active-val").text(birthYear);
	});
	
	$("#years .select-active-val").click(() => {
		$("#years").addClass('select-expanded');
	});
	
	$(document).mouseup(function(e) {
		var years = $("#years");
		if (!years.is(e.target) && years.has(e.target).length === 0) {
			years.removeClass('select-expanded');
		}
	})
	
	$("#years .select-dropdown div").click(() => {
		$('#years .select-dropdown').addClass('filled');
		$("#years").removeClass('select-expanded');
	});
	
	$("#years .select-dropdown div.select-default-val").click(() => {
		$('#years .select-dropdown').removeClass('filled');
	});

	$('.js-skills__range-controls-item-1').click(() => {
		$('.js-skills__range').removeClass().addClass('range-25')
		.addClass('js-skills__range');
	});
	$('.js-skills__range-controls-item-2').click(() => {
		$('.js-skills__range').removeClass().addClass('range-50')
		.addClass('js-skills__range');
	});
	$('.js-skills__range-controls-item-3').click(() => {
		$('.js-skills__range').removeClass().addClass('range-75')
		.addClass('js-skills__range');
	});
	$('.js-skills__range-controls-item-4').click(() => {
		$('.js-skills__range').removeClass().addClass('range-100')
		.addClass('js-skills__range');
	});

	$('input').change(function(){
		var tmpval = $(this).val();
		
		if(tmpval == '') {
			$(this).removeClass('filled');
		} else {
			$(this).addClass('filled');
		}
	});
	
	$('input').each(function(){
		var defval = $(this).val();
		
		if(defval == '') {
			$(this).removeClass('filled');
		} else {
			$(this).addClass('filled');
		}
	});

    $("a.menu__link[href^='#']").click(function () {
		$('.menu__link').removeClass('menu__link-active');
		$(this).addClass('menu__link-active');
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top - 90 + "px"}, 1500);
        return false;
    });

    $(window).scroll(function () {
        $('.fadeinOnScroll').each(function (i) {
            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 0);
            }
        });
    });

    $('.mobile-nav-toggler').click(function () {
            $(this).toggleClass('expanded');
            $('.menu').toggleClass('expanded');
        }
    )

	$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    });
});
