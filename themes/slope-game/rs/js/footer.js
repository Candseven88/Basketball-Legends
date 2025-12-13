window.onload = function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#back-to-top').fadeIn();
            $('.menu').css({ "background": "#2757a5" });
        } else {
            $('#back-to-top').fadeOut();
            $('.menu').css({ "background": "rgba(39,87,165,.4)" });
        }
    });
    $("#back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
    });
    $("#txt-search").on('click', function () {
        $(".overlay").show();
        $(".list-cate-ajax").hide();
        $("#chevron").css({ 'transform': "rotate(0)" });
        $(this).data('status', 'off');
    })
    $("#txt-search").on('input', function (e) {
        let url = "/query.ajax"
        let q = $(this).val();
        if (q.length == 0) {
            $("#list-suggest").html('');
            return;
        }
        $.ajax({
            type: "POST",
            url: url,
            data: { q: q },
            success: function (data) {
                let parser_data = JSON.parse(data);
                $("#list-suggest").html(parser_data);
            }
        });
    });
    $(".overlay").on('click', function () {
        // console.log('here');
        $(this).hide();
        $("#list-suggest").html('');
    });

    $("#show-menu").on('click', function (e) {
        $(".mobile-menu").css({ left: 0 });
        $(".overlay-full").show();
        e.stopPropagation();
    });
    $(".close-mobile").on('click', function () {
        $(".mobile-menu").css({ left: "-300px" });
        $(".overlay-full").hide();
    })
    $(".overlay-full").on('click', function () {
        $(".mobile-menu").css({ left: "-300px" });
        $(this).hide();
    })

}
// 全屏功能 - 只全屏游戏iframe
$(document).ready(function() {
    $("#expand").on('click', function () {
        var iframe = document.getElementById('iframehtml5');
        if (!iframe) return;
        
        // 直接全屏iframe元素
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    });
});