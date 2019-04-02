var iNow = 1;
$(document).on('swipeUp',function () {
    //moveToTop 添加class "page-1 moveToTop"
    $('.page-'+iNow).attr("class",".page-"+iNow+" moveToTop");
    //找到下一张图片 "page-2 moveFromBottom"(iNow+1)
    $('.page-'+(iNow+1)).attr("class",".page-"+(iNow+1)+" moveFromBottom")

    // 0.6s后 设置图片动画显示
    setTimeout(function(){
        $('.page-'+(iNow+1)).children().removeClass('hide');
        // 滑出的中的小图片 隐藏
        $('.page-'+iNow).children().addClass('hide');
        iNow++;
    }, 600);
});

$(document).on('swipeDown',function(){
    // 当前图片 滑下
    $('.page-'+iNow).attr('class','page-'+iNow+" moveToBottom");
    // 上一张图 滑下来
    $('.page-'+(iNow-1)).attr('class','page-'+(iNow-1)+" moveFromTop");

    setTimeout(function(){
        $('.page-'+(iNow-1)).children().removeClass('hide');
        // 下滑的时候 让出去的小图都隐藏
        $('.page-'+iNow).children().addClass('hide');
        iNow--;
    }, 600);

});