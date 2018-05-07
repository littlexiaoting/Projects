/**
 * Created by Administrator on 2017/3/31 0031.
 */
$(function () {
    FastClick.attach(document.body);

    $("img[name='lazy']").lazyload({
        placeholder: "images/默认图片.jpg",
        effect: "fadeIn"
    });

    $('.icon-arrow_upward').hide();
    $('.table').hide();


    $('.icon-arrow_downward').click(function () {
        $('.icon-arrow_upward').show();
        $('.icon-arrow_downward').hide();
        $('.table').fadeIn();
    });
    $('.icon-arrow_upward').click(function () {
        $('.icon-arrow_upward').hide();
        $('.icon-arrow_downward').show();
        $('.table').hide();
    });

    $('.tab li').each(function () {
        $(this).click(function () {
            $('.icon-arrow_upward').hide();
            $('.icon-arrow_downward').show();
            $('.table').hide();
            var name = $(this).attr("class");
            if (name == "all") {
                $('section div').fadeIn();
            }
            else {
                $('section>div').hide();
                $('#' + name).fadeIn();
            }
        })
    });

    //点击加入购物车按钮
    $('.cart').each(function () {
        $(this).click(function () {
            layer.msg("商品已加入购物车");
        })
    });

    //点击加载更多
    $('.more').click(function () {
        $(this).hide();
    });

});
