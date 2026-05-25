$(function () {
    // 回到顶部按钮
    if ($('#back-to-top').length === 0) {
        $('body').append('<button id="back-to-top" title="回到顶部"><i class="fa fa-arrow-up"></i></button>');
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 400);
    });

    // 分享按钮：复制当前页面链接
    $('.btn-share').on('click', function () {
        var url = window.location.href;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(function () {
                alert('链接已复制到剪贴板，快去分享吧！');
            }).catch(function () {
                fallbackCopy(url);
            });
        } else {
            fallbackCopy(url);
        }
    });

    function fallbackCopy(text) {
        var input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        try {
            document.execCommand('copy');
            alert('链接已复制到剪贴板，快去分享吧！');
        } catch (e) {
            prompt('请手动复制以下链接：', text);
        }
        document.body.removeChild(input);
    }
});
