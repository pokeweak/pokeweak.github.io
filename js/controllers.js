
var pkw = angular.module("Pokeweak", []);


pkw.filter('zpad', function() {
  return function(input, n) {
    if(input === undefined) {
      input = ""
    }
    if(input.length >= n) {
      return input
    }
    var zeros = "0".repeat(n);

    return (zeros + input).slice(-1 * n)
  };
})

pkw.controller("pkCardName", ['$scope','$http', function($scope, $http) {

  $scope.selectedPokemon = false;

  $scope.showPokemon = showPokemon;
  $scope.closePokemon = closePokemon;

  activate();

  ///////////

  function activate() {
    $http.get('pokemon.json').success (function(data){
      $scope.pkData = data;
    });
  }

  function showPokemon(pokemon) {
    $scope.selectedPokemon = pokemon;

    setTimeout(function () { 
    $('.wrapper-fixed').addClass('display');
    $('.content-side').addClass('slideIn');
    $('.overlay').addClass('fadeIn');
    $('.overlay').on('touchstart touchmove', function(e){ 
    e.preventDefault(); 
    });
    }, 200);
    setTimeout(function () {
      $('html').css("overflow", "hidden"); 
      $('.points.CP').css("left",  ($scope.selectedPokemon.maxCP / 4300 * 96) + "%");
      $('.percentage.CP').css("width",  ($scope.selectedPokemon.maxCP / 4300 * 96) + "%");
      $('.points.HP').css("left",  ($scope.selectedPokemon.maxHP / 420 * 96) + "%");
      $('.percentage.HP').css("width",  ($scope.selectedPokemon.maxHP / 420 * 96) + "%");
      $('.points.attack').css("left",  ($scope.selectedPokemon.attack / 300 * 96) + "%");
      $('.percentage.attack').css("width",  ($scope.selectedPokemon.attack / 300 * 96) + "%");
      $('.points.defense').css("left",  ($scope.selectedPokemon.defense / 250 * 96) + "%");
      $('.percentage.defense').css("width",  ($scope.selectedPokemon.defense / 250 * 96) + "%");
      $('.points.stamina').css("left",  ($scope.selectedPokemon.stamina / 520 * 96) + "%");
      $('.percentage.stamina').css("width",  ($scope.selectedPokemon.stamina / 520 * 96) + "%");
    }, 700);
    setTimeout(function () { 
      $('.back').addClass('scaleIn');
    }, 1200);
  }

  function closePokemon() {

    $('.content-side').addClass('slideOut');
    $('.overlay').addClass('fadeOut');
    setTimeout(function () { 
    $(".scroll-content").scrollTop(0);
    }, 399);
    setTimeout(function () { 
    $('html').css("overflow", ""); 
    $('.wrapper-fixed').removeClass('display');
    $('.content-side').removeClass('slideOut');
    $('.content-side').removeClass('slideIn');
    $('.overlay').removeClass('fadeOut');
    $('.overlay').removeClass('fadeIn');
    $('.back').removeClass('scaleIn');
    $('.points.CP').css("left", "");
    $('.percentage.CP').css("width",  "");
    $('.points.HP').css("left", ""); 
    $('.percentage.HP').css("width",  "");
    $('.points.attack').css("left", "");
    $('.percentage.attack').css("width", "");
    $('.points.defense').css("left", "");
    $('.percentage.defense').css("width", "");
    $('.points.stamina').css("left", "");
    $('.percentage.stamina').css("width", "");
    $scope.selectedPokemon = false;
    }, 400);
    }
}]);


