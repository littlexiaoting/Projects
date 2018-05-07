/**
 * Created by Administrator on 2017/7/5 0005.
 */
$(function () {
    var line=$("tbody>tr");
    for(let i=0;i<line.length;i++){
        if(i%2==0){
            line[i].className = "odd";
        }
        else{
            line[i].className = "even";
        }
    }
})