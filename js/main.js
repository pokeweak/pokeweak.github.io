$(document).ready(function () {
  $(window).on("scrollstart").ready(function () {
    $(".no-navbar").scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll >= 20) {
        $('.pk-header').addClass("shadow");
      }
      else {
        $('.pk-header').removeClass("shadow");
      }
    });
    });
  $('#form').submit(function (e) {
    e.preventDefault();
  });
  $("#pokemon").keyup(function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if ((code == 13) || (code == 10)) {
      jQuery(this).blur();
      return false;
    }
    if ($('#pokemon').val().length > 0) $(".close-icon").addClass('visible');
    else $(".close-icon").removeClass('visible');
    _this = this;
    $.each($(".content").find(".card"), function () {
      if ($(this).find('.name').text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1) $(this).removeClass('showSearch').addClass('hiddenSearch');
      else $(this).removeClass('hiddenSearch').addClass('showSearch');
    });
  });
  $("#pokemon").on("blur", function () {
    if ($('#pokemon').val().length > 0) $(".close-icon").addClass('visible');
    else $(".close-icon").removeClass('visible');
  });
  $('.close-icon').click(function () {
    $(".searchbar").removeClass('moveDown');
    $("#pokemon").val('').trigger('keyup');
    $cards.removeClass('showSearch');
    $cards.removeClass('hiddenSearch');
  });
  $('.show-search').click(function () {
    $(".searchbar").addClass('moveDown');
    $(".close-icon").addClass('visible');
    $('#pokemon').focus();
  });
  $('.search-icon').click(function () {
    $('#pokemon').focus();
  });
  $("input").focus(function () {
    $(".close-icon").addClass('visible');
  });
});