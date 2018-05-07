$(function () {
    FastClick.attach(document.body);

    //删除模块的val值等于商品详情模块的数量
    for (var i = 0; i < $('.order_list').length; i++) {
        $($('.val')[i]).val($($('.num')[i]).text());
    }

    subtotal();
    total();
    addDel();

    //编辑按钮和商品详情模块
    var $edit = $('.edit');
    var $desc = $('.list_body_right');

    //完成按钮和删除模块隐藏
    var $complete = $('.complete');
    var $delete = $('.list_body_delete');
    $($complete).hide();
    $($delete).hide();


    //单击编辑按钮后，显示对应模块的删除模块
    $edit.click(function () {
        var a = $($edit).index(this);
        $($edit[a]).hide();
        $($complete[a]).fadeIn();
        $($desc[a]).hide();
        $($delete[a]).fadeIn();
    });

    $('#choice').click(function () {
        if ($('.order_list').length == 0) {
            layer.msg("没有选择商品！");
        }
        else {
            window.location.href = 'settlement.html';
        }
    });
    $('#submit').click(function () {
        if ($('.order_list').length == 0) {
            layer.msg("没有选择商品！");
        }
        else if ($('#time').text() == '' || $('#time').text() == '') {
            layer.msg("请选择配送时间！");
        }
        else {
            window.location.href = 'user.html';
        }
    });

    var $_GET = (function () {
        var url = decodeURI(location.href);
        var u = url.split("?");
        if (typeof(u[1]) == "string") {
            u = u[1].split("&");
            var get = {};
            for (var i in u) {
                var j = u[i].split("=");
                get[j[0]] = j[1];
            }
            return get;
        } else {
            return {};
        }
    })();
    var date = $_GET['date'];
    $('#date').text(date);
    var time = $_GET['time'];
    $('#time').text(time);
});

//小计
function subtotal() {
    var $num = $('.val');
    var $unit = $('.unit');
    var $subtotal = $('.subtotal');
    for (var i = 0; i < $num.length; i++) {
        var num = Number($($num[i]).val());
        var unit = Number($($unit[i]).text());
        $($subtotal[i]).text((num * unit).toFixed(2));
    }
}

//合计
function total() {
    var sum = 0;
    $('.subtotal').each(function () {
        sum += Number($(this).text());
        $('.total').text(sum.toFixed(2));
    });
}

//加减按钮
function addDel() {
    //加
    $('.plus').each(function () {
        $(this).click(function () {
            var $val = $(this).parent().prev().children();
            var val1 = $($val).val();
            val1++;
            //得到库存判断选购数量是否超出
            var storage = $(this).parent().parent().parent().find('.storage').text();
            $($val).val(val1);
            if (val1 > storage) {
                layer.msg("选购数量超出商品库存！");
                $($val).val(storage);
            }
            subtotal();
            total();
        });
    });

    //减
    $('.reduce').each(function () {
        $(this).click(function () {
            var $val = $(this).parent().next().children();
            var val1 = $($val).val();
            val1--;
            $($val).val(val1);
            if (val1 < 1) {
                layer.msg("选购数量不能小于1！");
                $($val).val(1);
            }
            subtotal();
            total();
        });
    });


    //点击完成按钮后判断选购商品的数量(用户直接输入数量值)
    $('.complete').each(function () {
        $(this).click(function () {
            var val = Number($(this).parent().next().find('.val').val());
            //得到库存判断选购数量是否超出
            var storage = Number($(this).parent().next().find('.storage').text());
            if (val > storage) {
                layer.msg("选购数量超出商品库存！");
                $(this).parent().next().find('.val').val(storage);
            }
            else if (val < 1) {
                layer.msg("选购数量不能小于1！");
                $(this).parent().next().find('.val').val(1);
            }
            else {
                $(this).parent().next().find('.num').text(val);
                $(this).hide();
                $(this).prev().show();
                $(this).parent().next().find('.list_body_delete').hide();
                $(this).parent().next().find('.list_body_right').fadeIn();
            }
            subtotal();
            total();
        });
    });

    $('.delete').each(function () {
        $(this).click(function () {
            $(this).parent().parent().parent().parent().parent().parent().remove();
            subtotal();
            total();
            if ($('.order_list').length == 0) {
                $('.total').text(0);
            }
        });
    });
}


/**
 * Created by Administrator on 2017/3/30 0030.
 */
