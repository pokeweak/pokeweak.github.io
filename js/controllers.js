var pkw = angular.module("Pokeweak", []);
pkw.filter('zpad', function () {
  return function (input) {
    return (input < 10) ? '00' + input : (input < 100) ? '0' + input : '' + input;
  };
})
pkw.controller('TabController', ['$scope', function ($scope) {
  $scope.tab = 1;
  $scope.kmEgg = false
  $scope.setTab = function (newTab) {
    $scope.tab = newTab;
    if (newTab === 1) $scope.kmEgg = false
    if (newTab === 2) $scope.kmEgg = 2
    if (newTab === 3) $scope.kmEgg = 5
    if (newTab === 4) $scope.kmEgg = 10
    $(".scroll-content").scrollTop(0);
  };
  $scope.isSet = function (tabNum) {
    return $scope.tab === tabNum;
  };
  }]);
pkw.controller("pkCardName", ['$scope', '$http', function ($scope, $http) {
  var $sidebarInner = $('.sidebar-inner');
  var $overlay = $('.overlay');
  var $contentSide = $('.content-side');
  var $wrapperFixed = $('.wrapper-fixed');
  //    var $listBg = $('.list-bg');
    
  $scope.selectedPokemon = false;
  $scope.loadStats = loadStats;
  $scope.resetStats = resetStats;
  $scope.openSidebar = openSidebar;
  $scope.closeSidebar = closeSidebar;
  $scope.openSidebarInner = openSidebarInner;
  $scope.closeSidebarInner = closeSidebarInner;
  $scope.showEggs = showEggs;
  $scope.closeEggs = closeEggs;
  $scope.showRanking = showRanking;
  $scope.closeRanking = closeRanking;
  $scope.showPokemon = showPokemon;
  $scope.closePokemon = closePokemon;
  $scope.showPokemonInner = showPokemonInner;
  activate();
  ///////////
  function activate() {
    $http.get('pokemon.json').success(function (data) {
      $scope.pkData = data;
    });
  }
  //    load Stats
  function loadStats() {
    $('.points.CP').css("left", ($scope.selectedPokemon.maxCP / 4300 * 96) + "%");
    $('.percentage.CP').css("width", ($scope.selectedPokemon.maxCP / 4300 * 96) + "%");
    $('.points.HP').css("left", ($scope.selectedPokemon.maxHP / 420 * 96) + "%");
    $('.percentage.HP').css("width", ($scope.selectedPokemon.maxHP / 420 * 96) + "%");
    $('.points.attack').css("left", ($scope.selectedPokemon.attack / 300 * 96) + "%");
    $('.percentage.attack').css("width", ($scope.selectedPokemon.attack / 300 * 96) + "%");
    $('.points.defense').css("left", ($scope.selectedPokemon.defense / 250 * 96) + "%");
    $('.percentage.defense').css("width", ($scope.selectedPokemon.defense / 250 * 96) + "%");
    $('.points.stamina').css("left", ($scope.selectedPokemon.stamina / 520 * 96) + "%");
    $('.percentage.stamina').css("width", ($scope.selectedPokemon.stamina / 520 * 96) + "%");
  }
  //    Reset Stats
  function resetStats() {
    $('.pokemon-detail').addClass('hidden');
    $('.points.CP').css("left", "");
    $('.percentage.CP').css("width", "");
    $('.points.HP').css("left", "");
    $('.percentage.HP').css("width", "");
    $('.points.attack').css("left", "");
    $('.percentage.attack').css("width", "");
    $('.points.defense').css("left", "");
    $('.percentage.defense').css("width", "");
    $('.points.stamina').css("left", "");
    $('.percentage.stamina').css("width", "");
  }
  //    Open Sidebar
  function openSidebar() {
    $wrapperFixed.addClass('display');
    $contentSide.addClass('slideIn');
    $("html").css("overflow", "hidden");
    $overlay.addClass('fadeIn').on('touchstart touchmove', function (e) {
      e.preventDefault();
    });
  }
  //    Close sidebar
  function closeSidebar() {
    $contentSide.addClass('slideOut');
    $overlay.addClass('fadeOut');
    $sidebarInner.addClass('slideOut');
    $('.list-bg').addClass('hidden');
    setTimeout(function () {
      $(".scroll-content").scrollTop(0);
      $("html").css("overflow", "");
      $wrapperFixed.removeClass('display');
      $contentSide.removeClass('slideOut').removeClass('slideIn');
      $overlay.removeClass('fadeOut').removeClass('fadeIn');
      $sidebarInner.addClass('hidden').removeClass('slideIn').removeClass('slideOut');
      closePokemon();
      closeEggs();
      closeRanking();
    }, 400);
  }
  //    Open Sidebar inner
  function openSidebarInner() {
    $sidebarInner.removeClass('hidden').addClass('slideIn');
  }
  //    Close Sidebar inner
  function closeSidebarInner() {
    $sidebarInner.addClass('slideOut');
    setTimeout(function () {
      $(".no-navbar").scrollTop(0);
      $sidebarInner.addClass('hidden').removeClass('slideIn').removeClass('slideOut');
      closePokemon();
    }, 400);
  }
  $(document).keyup(function (e) {
    if (e.keyCode === 27) closeSidebar();
  });
  //    Load pokemon detail
  function showPokemon(pokemon) {
    openSidebar();
    $scope.selectedPokemon = pokemon;
    $('.pokemon-detail').removeClass('hidden');
    setTimeout(function () {
      loadStats();
    }, 800);
  }
  //    Close Pokemon detail
  function closePokemon() {
    setTimeout(function () {
      resetStats();
    }, 400);
    $scope.selectedPokemon = false;
  }
  //    Load pokemon detail inner
  function showPokemonInner(pokemon) {
    openSidebarInner();
    $scope.selectedPokemon = pokemon;
    $('.pokemon-detail-inner').removeClass('hidden');
    setTimeout(function () {
      loadStats();
    }, 800);
  }
  //    Load eggs
  function showEggs() {
    openSidebar();
    $('.eggs').removeClass('hidden');
    setTimeout(function () {
      $('.eggs-list').removeClass('hidden').addClass('fadeIn');
    }, 900);
  }
  //    Close eggs
  function closeEggs() {
    $('.eggs').addClass('hidden');
    $('.eggs-list').removeClass('fadeIn');
  }
  //    Load ranking
  function showRanking() {
    openSidebar();
    $('.ranking').removeClass('hidden');
    setTimeout(function () {
      $('.ranking-list').removeClass('hidden').addClass('fadeIn');
    }, 900);
  }
  //    Close ranking
  function closeRanking() {
    $('.ranking').addClass('hidden');
    $('.ranking-list').removeClass('fadeIn');
  }
}]);

function getWatchers(root) {
  root = angular.element(root || document.documentElement);
  var watcherCount = 0;

  function getElemWatchers(element) {
    var isolateWatchers = getWatchersFromScope(element.data().$isolateScope);
    var scopeWatchers = getWatchersFromScope(element.data().$scope);
    var watchers = scopeWatchers.concat(isolateWatchers);
    angular.forEach(element.children(), function (childElement) {
      watchers = watchers.concat(getElemWatchers(angular.element(childElement)));
    });
    return watchers;
  }

  function getWatchersFromScope(scope) {
    if (scope) {
      return scope.$$watchers || [];
    }
    else {
      return [];
    }
  }
  return getElemWatchers(root);
}
getWatchers().length
  //function play() {
  //    var audio = document.getElementById("pokemonSound");
  //    audio.load();
  //    audio.play();
  //};
  //
  //var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);
  //
  //angularRoutingApp.config(function($routeProvider) {
  //
  //    $routeProvider
  //        .when('/', {
  //            templateUrl : '../index.html',
  //            controller  : 'mainView'
  //        })
  //        .when('/pokemon-detail', {
  //            templateUrl : '../views/pokemon-detail.html',
  //            controller  : 'pokemonDetailView'
  //        })
  //        .when('/eggs', {
  //            templateUrl : '../views/eggs.html',
  //            controller  : 'eggsView'
  //        })
  //        .when('/ranking', {
  //            templateUrl : '../views/ranking.html',
  //            controller  : 'rankingView'
  //        })
  //        .otherwise({
  //            redirectTo: '/'
  //        });
  //});
  //
  //angularRoutingApp.controller('mainView', function($scope) {
  //    $scope.message = 'Hola, Mundo!';
  //});
  //
  //angularRoutingApp.controller('pokemonDetailView', function($scope) {
  //    $scope.message = 'Esta es la página "Acerca de"';
  //});
  //
  //angularRoutingApp.controller('eggsView', function($scope) {
  //    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
  //});
  //angularRoutingApp.controller('eggsView', function($scope) {
  //    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
  //});