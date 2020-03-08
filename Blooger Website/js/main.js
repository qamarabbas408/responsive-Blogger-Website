// responsive carousel
const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}

//collapse menu
$(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');
    // click event
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

// owel carousel for blog
$('.owl-carousel').owlCarousel(
    {
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    }
);

// Click up button
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0,
        },2,000);
    });

    // AOS object
    AOS.init();
});