$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 116 ){
            $('body').addClass('fixed-header');
        }else{
            $('body').removeClass('fixed-header');
        }
    });
    $('.header-acc .box-acc').click(function(){
        $(this).parents('.header-acc').toggleClass('active');
    });
    $('.banner-slider ul').lightSlider({
        item:1,
        loop:true,
        slideMove:1,
        auto:true,
        mode:'fade',
        slideMargin:0,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        pause:3000,
        onSliderLoad: function() {
            $('.banner-slider ul').removeClass('cS-hidden');
        } 
    });  
    $('.slide-endow ul').lightSlider({
        item:3,
        loop:true,
        slideMove:1,
        slideMargin:16,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        pause:3000,
        pager:false,
        responsive : [
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ],
        onSliderLoad: function() {
            $('.slide-endow ul').removeClass('cS-hidden');
        } 
    });  
    $('.slide-partner ul').lightSlider({
        item:6,
        loop:true,
        auto:true,
        slideMove:1,
        slideMargin:16,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        pause:3000,
        pager:false,
        responsive : [
            { breakpoint:1199,
                settings: {
                    item:5,
                    slideMove:1
                  },
                  breakpoint:991,
                  settings: {
                      item:4,
                      slideMove:1
                    },
                    breakpoint:767,
                    settings: {
                        item:3,
                        slideMove:1
                      },
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ],
        onSliderLoad: function() {
            $('.slide-partner ul').removeClass('cS-hidden');
        } 
    });  
    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:5,
        slideMargin:0,
        enableDrag: false,
        galleryMargin:12,
        thumbMargin:12,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }   ,
        onSliderLoad: function() {
            $('#imageGallery').removeClass('cS-hidden');
        } 
    });  
});