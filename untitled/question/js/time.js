/**
 * Created by Administrator on 2017/7/7 0007.
 */
window.onload = function () {
    var myDate = new Date();
    var myYear = myDate.getFullYear();
    var myMonth = myDate.getMonth() + 1;
    var myDate = myDate.getDate();
    document.getElementById("time").innerHTML = myYear + "-" + myMonth + "-" + myDate;
};