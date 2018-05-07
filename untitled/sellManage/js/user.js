/**
 * Created by Administrator on 2017/3/30 0030.
 */
$(function () {
    FastClick.attach(document.body);

    //除了全部订单显示其余模块隐藏
    $('.order_list:not(:first)').hide();

    //点击导航切换模块
    var $order = $('.order li');
    var $list = $('.order_list');
    for (var i = 0; i < $list.length; i++) {
        $($order[i]).click(function () {
            //点中状态切换
            $($order).removeClass("active");
            $(this).addClass("active");
            //显示对应模块
            var a = $order.index($(this));
            $list.hide();
            $($list[a]).show();
        })
    }

    //单击订单号显示订单详情
    $('.number').each(function () {
        $(this).click(function () {
            var id=$(this).text();
            window.location.href = 'buyed.html?id='+id;
        })
    })

    //点击加载更多
    $('.more').click(function () {
        $(this).hide();
    })
});

