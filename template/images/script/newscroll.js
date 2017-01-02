// JavaScript Document

        function AutoScroll(obj) {

            $(obj).find("ul:first").animate({
                marginTop: "-44px"
            }, 500, function() {
                $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
            });
        }
        $(document).ready(function() {
            var myar = setInterval('AutoScroll("#scrollDiv")', 5000)
            $("#scrollDiv").hover(function() { clearInterval(myar); }, function() { myar = setInterval('AutoScroll("#scrollDiv")', 3000) }); //当鼠标放上去的时候，滚动停止，鼠标离开的时候滚动开始，-44px是行高
        });