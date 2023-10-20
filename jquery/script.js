(function ($){
    $(document).ready(function (){

        $(window).scroll(function (){

            if($(window).scrollTop() > 600){
                $('.angle_arrow_area a').fadeIn();
            }

            else{
                $('.angle_arrow_area a').fadeOut();
            }
        });


        $('.slideHero').slick({

            autoplay : true,
            
        });

 








    });
})(jQuery)