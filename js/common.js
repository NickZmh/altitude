$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(document).ready(function () {

    // for mobile menu

    $('.navi-hamburger').click(function (event) {
        $('.nav-mobile').toggleClass('open');
        $(this).toggleClass('open');
        $('.admittance-desk').slideToggle('slow');
        event.stopPropagation();
        if($('.nav-mobile').hasClass('open')) {
            $('body').css('overflow','hidden');
        }else $('body').css('overflow', 'auto')
    });

    // constructor for mobile menu
    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find('.link');

            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        };

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }

        var accordion = new Accordion($('#collapse'), false);
    });

    // End for mobile menu


    // button location list
    $(".button-location").click(function(){
        $('.location-list').toggle();
        $('.caret').toggleClass('rotate');
        $(this).toggleClass('changes');
        return false;
    });
    $(document).click(function (e) {
        var element = $('.location-list');
        var father = $('.button-location');

        if(e.target != element[0] && !element.has(e.target).length) {
            element.hide();
            $('.caret').removeClass('rotate');
            father.removeClass('changes');
        }
    });
    // button location list



    $(".mail-input").bind('input', function() {
        if($(this).val() == '' || $(this).value == ' ') {
            $('.send-in').removeClass('change-color');
        } else{
            if($('.send-in').hasClass('send-in') && !$('.send-in').hasClass('change-color')) {
                $('.send-in').addClass('change-color');
            }
        }

    });
});