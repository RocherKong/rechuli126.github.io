// JavaScript Document
$(function(){
	$('.WX_xs').click(function(){
			//var yy=$(this).offset().top;
			//var xx=$(this).offset().left;
			$('.WX_Img').css({'top':-136+'px','left':620+'px'}).toggle(500);
		
		})
		
	})
	
	
	
	$(function(){
				var obj = $('.banner_scoll');
				var ww = document.documentElement.clientWidth || document.body.clientWidth;
				var len = obj.find('li').length;
				var _width = obj.find('li').width(ww);
				var dir = 'left';
				var dir = 'right';
				var timer = null;
				obj.find('ul').width(len * ww);
				$('.prev').click(function () {
				
                if (!obj.find('ul').is(':animated')) {
                    obj.find('ul').stop().animate({ 'left': -ww }, 500, function () {
                        $(this).css('left', 0).find('li:first').appendTo($(this));
                    });
                    dir = 'left';
                };
            });
            $('.next').click(function () {
                if (!obj.find('ul').is(':animated')) {
                    obj.find('ul').css('left', -ww).find('li:last').prependTo(obj.find('ul'));
                    obj.find('ul').stop().animate({ 'left': 0 }, 500);
                    dir = 'right';
                };
            });
			
            obj.hover(function () {
                clearInterval(timer);
            }, function () {
                timer = setInterval(function () {
                    dir = 'right' ? $('.prev').click() : $('.next').click();//if(dir=='left'){$('.next').click()}else{$('.prev').click()};
                }, 5000);
            }).trigger('mouseleave');
			})