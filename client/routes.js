angular.module('thymer')

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('Config run');
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home/home.html',
    controller: 'homeController'
  })
  .when('/cooking', {
    templateUrl: 'partials/cooking/cooking.html',
    controller: 'cookingController'
  })
  .when('/newRecipe', {
    templateUrl: 'partials/newRecipe/newRecipe.html',
    controller: 'newRecipeController'
  })
  .when('/searchRecipes', {
    templateUrl: 'partials/searchRecipes/searchRecipes.html',
    controller: 'searchRecipesController'
  })
  .when('/viewRecipe/:id', {
    templateUrl: 'partials/viewRecipe/viewRecipe.html',
    controller: 'viewRecipeController'
  })
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
}]);
