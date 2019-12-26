$(document).ready(function () {
    //btnGoTop點擊事件
    $('.btnGoTop').click(function(e){
        e.preventDefault();
        //點擊後讓頁面回到頂部 時間為1秒
        $('html,body').animate({scrollTop: 0},"1000");
    })

    $('.btn-group label').click(function(e){
        $('html,body').animate({scrollTop: 500},"500");
    })

    //畫面滾動事件
    $(window).scroll(function(){
        //宣告scrollPos為取得window目前畫面的高度
        let scrollPos = $(window).scrollTop();
        //如果畫面滾動超過300顯示goTop按鈕 否則就隱藏
        if(scrollPos > 300){
            $('.btnGoTop').addClass('show');
        }else{
            $('.btnGoTop').removeClass('show');
        }
    })
});