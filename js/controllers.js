
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
    }, 200);
      setTimeout(function () { 
          $('.back').addClass('scaleIn');
      }, 1000);
  }

  function closePokemon() {

    $('.content-side').addClass('slideOut');
    $('.overlay').addClass('fadeOut');
    setTimeout(function () { 
      $('.wrapper-fixed').removeClass('display');
      $('.content-side').removeClass('slideOut');
      $('.content-side').removeClass('slideIn');
      $('.overlay').removeClass('fadeOut');
      $('.overlay').removeClass('fadeIn');
      $('.back').removeClass('scaleIn');
      $scope.selectedPokemon = false;
    }, 400);
  }
}]);


