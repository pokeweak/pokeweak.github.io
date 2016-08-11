
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
       $.each($(".content").find(".cell"), function() {
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

   $cells = $( '.cell' );
      $cells.click(function() {
        $cells.addClass('expanded');
        $el = $(this);
        $.each($(".content").find(".cell"), function() {
           if ($el.hasClass ('expanded')) 
                $el.removeClass('expanded');
            else 
                $el.addClass('expanded');
       });

      });

    $('.close-icon').click(function(){
     $("#pokemon").val('').trigger('keyup');
        $cells.removeClass('showSearch');
        $cells.removeClass('hiddenSearch');
   });

   $('.search-icon').click(function(){
     $('#pokemon').focus();
   });

   $("input").focus(function() {
       $(".close-icon").addClass('visible');
   });

    
if ('ontouchstart' in window) {
   /* cache dom references */ 
   var $body = $('body');

   /* bind events */
   $(document)
   .on('focus', 'input', function() {
       $body.addClass('fixfixed');
   })
   .on('blur', 'input', function() {
       $body.removeClass('fixfixed');
   });
}
    
});


//    <script>
//        
//        $(function() {                       
//            $(".cell").click(function() {  
//                $(this).addClass("scale");
//                
//                setTimeout(function () { 
//                $('.cell').removeClass('scale');
//                }, 250);
//            });
//        });
//    </script>
