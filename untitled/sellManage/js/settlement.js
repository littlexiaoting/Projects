/**
 * Created by Administrator on 2017/3/30 0030.
 */
$(function () {
    FastClick.attach(document.body);

    var $date = $('.date li');
    var $time = $('.time li');

    //点击当前li变色
    $($date).each(function () {
        $(this).click(function () {
            change($date, this);
            $('#date').text($(this).text());
        })
    });
    $($time).each(function () {
        $(this).click(function () {
            change($time, this);
            $('#time').text($(this).text());
        })

    });

    $('#submit').click(function () {
        var time = $('#time').text();
        var date = $('#date').text();
        if (time != '' && date != '') {
            var myurl='cart.html?date=' + date+'&time='+time;
            location.assign(encodeURI(myurl));
        }
        else {
            layer.msg('请正确选择配货时间！');
        }
    })

});

function change(color, li) {
    $(color).removeClass('bg');
    $(li).addClass('bg');
}
