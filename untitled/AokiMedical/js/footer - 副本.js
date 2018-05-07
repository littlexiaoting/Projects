/**
 * Created by Administrator on 2017/7/3 0003.
 */
var Footer=React.createClass({
    render:function () {
        return <div className="footer">
            <div className="content">
                <div className="footer_left">
                    <h6>肖婷的测试网页</h6>
                    <span className="tel">TEL: 025-58888xxx</span>
                    <span className="address">南京市浦口区南京信息工程大学对面</span>
                    <a href="javascript:;"><i className="wechat"></i></a>
                    <a href="javascript:;"><i className="qq"></i></a>
                </div>
                <p>@2017 南京xx咨询有限公司版权所有</p>
            </div>
        </div>
    }
});
ReactDOM.render(
    <Footer/>,
    document.getElementById("footer")
);
$(function () {
    var screen=$(window).width();
    var dRight=(screen-1200)/2/2;
    var sWidth=$(".icon-angle-up").width();
    var rRight=dRight-sWidth/2;
    $(".icon-angle-up").css("right",rRight+"px")
})