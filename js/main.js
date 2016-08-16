
$( document ).ready(function() {
    $('#form').submit(function(e){    
        e.preventDefault();
});
    $("#pokemon").keyup(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
           if ( (code==13) || (code==10))
           {
                jQuery(this).blur();
                return false;
       }
          if($('#pokemon').val().length > 0)
           $(".close-icon").addClass('visible');
          else
           $(".close-icon").removeClass('visible');

       _this = this;
       $.each($(".content").find(".card"), function() {
           if ($(this).find('.name').text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
               $(this).removeClass('showSearch').addClass('hiddenSearch');
           else
               $(this).removeClass('hiddenSearch').addClass('showSearch');
       });
   });

  $("#pokemon").on( "blur", function() {
      if($('#pokemon').val().length > 0)
           $(".close-icon").addClass('visible');
          else
           $(".close-icon").removeClass('visible');
    } );

    $('.close-icon').click(function(){
     $("#pokemon").val('').trigger('keyup');
        $cards.removeClass('showSearch');
        $cards.removeClass('hiddenSearch');
   });

   $('.search-icon').click(function(){
     $('#pokemon').focus();
   });

   $("input").focus(function() {
       $(".close-icon").addClass('visible');
   });
    
    $('.pk-container').click(function(){
        $(this).css({"box-shadow": "0px 6px 20px 0px rgba(0, 0, 0, 0.15)" });
        setTimeout(function () { 
            $('.wrapper-fixed').addClass('display');
            $('.content-side').addClass('slideIn');
            $('.overlay').addClass('fadeIn');
        }, 200);
    });
    $('.pk-container').on("tap",function(){
      $(this).css({"box-shadow": "0px 6px 20px 0px rgba(0, 0, 0, 0.15)" });
    });
     $('.overlay').click(function(){
        $('.content-side').addClass('slideOut');
        $('.overlay').addClass('fadeOut');
        setTimeout(function () { 
            $('.wrapper-fixed').removeClass('display');
            $('.content-side').removeClass('slideOut');
            $('.content-side').removeClass('slideIn');
            $('.overlay').removeClass('fadeOut');
            $('.overlay').removeClass('fadeIn');
            $('.pk-container').css({"box-shadow": "" });
        }, 400);
    });
    $('.back').click(function(){
        $('.content-side').addClass('slideOut');
        $('.overlay').addClass('fadeOut');
        setTimeout(function () { 
            $('.wrapper-fixed').removeClass('display');
            $('.content-side').removeClass('slideOut');
            $('.content-side').removeClass('slideIn');
            $('.overlay').removeClass('fadeOut');
            $('.overlay').removeClass('fadeIn');
            $('.pk-container').css({"box-shadow": "" });
        }, 400);
    });

    
});


//    <script>
//        
//        $(function() {                       
//            $(".card").click(function() {  
//                $(this).addClass("scale");
//                
//                setTimeout(function () { 
//                $('.card').removeClass('scale');
//                }, 250);
//            });
//        });
//    </script>
