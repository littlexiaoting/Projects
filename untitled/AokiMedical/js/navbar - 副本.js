/**
 * Created by Administrator on 2017/6/29 0029.
 */
var NavBar = React.createClass({
    render: function () {
        return <div className="nav">
            <ul className="navbar content">
                <li><a href="index.html"></a></li>
                <li className="change"><a href="advantage.html">海外优势</a></li>
                <li className="change"><a href="service.html">服务内容</a></li>
                <li className="change"><a href="cooperation.html">合作医院</a></li>
                <li className="change"><a href="medTour.html">医疗旅游</a></li>
                <li className="change"><a className="info" href="information.html">新闻资讯</a></li>
                <li className="change"><a href="aboutUs.html">关于我们</a></li>
                <li className="tel">
                    <span className="tel"></span>
                    <div>
                        <span>全国服务热线</span>
                        400-880-xxxx
                    </div>
                </li>
            </ul>
            <ul className="fixedNav">
                <li><a className="home" href="index.html"></a></li>
                <li><a className="weiXin" href="javascript:;"><span></span></a></li>
                {/*<li><a className="QQ" href="javascript:;"><span>点击联系客服</span></a><a className="service" target="_blank" href="tencent://message/?uin='+'1966400698'+'&Site=www.xxxxxxx.com.cn&Menu=yes"></a></li>*/}
                <li><a className="QQ" href="javascript:;"><span>点击联系客服</span></a><a className="service" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=822800870&site=qq&menu=yes"></a></li>
                <li><a className="tel" href="javascript:;"><span>400-880-xxxx</span></a></li>
                <li><a className="top" href="javascript:;"></a></li>
            </ul>
        </div>
    }
});
ReactDOM.render(
    <NavBar/>
    ,
    document.getElementById('nav')
);
$(function () {
    // 当前页面对应标签为选中状态
    var htmlName = window.location.pathname;
    var a = htmlName.split("/");
    var b = a[1];
    console.log(a);
    console.log(b);
    $(".nav_ul>li>a").attr("href", function () {
        var c = $(this).attr("href");
        if (b == c) {
            $(this).css({"color":"#16BAB6","border-top": "5px solid #16bbb7"});
        }
    });

    if (b == "wangshi.html" || b == "themePark.html" || b == "tokyoExperience.html" ) {
        $(".nav_ul>li>a.info").css({"color":"#16BAB6","border-top": "5px solid #16bbb7"});
    }

//        返回顶部按钮显示与隐藏
    var $topLi = $(".nav .fixedNav li:last-child");
    $($topLi).hide();
    $($topLi).click(function () {
        $("html,body").animate({scrollTop: 0}, 300);
    });

    $(window).scroll(function () {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        var osHeight = document.documentElement.clientHeight;

        if (osTop >= osHeight) {
            $($topLi).show();
        }
        else {
            $($topLi).hide();
        }
    });
});