app.controller('mainController', function ($scope, service) {

    //'import' functions from service
    $scope.movies = service.movies;

    $scope.populars = service.popularMovies;

    $scope.searchPopular = service.searchPopular;

    $scope.searchTitle = function () {
        service.searchTitle($scope.titleMovie);
    };

    $scope.resultByTitle = service.resultByTitle;

    $scope.guesses = service.guesses;

    $scope.addToGuess = service.addToGuess;

    $scope.cast = service.cast;

    $scope.searchCast = service.searchCast;

    $scope.people = service.people;

    $scope.searchPersonId = service.searchPersonId;

    $scope.topRated = service.topRated;

    $scope.searchTopRated = service.searchTopRated;

    $scope.nowPlaying = service.nowPlaying;

    $scope.searchNowPlaying = service.searchNowPlaying;

    $scope.actors = service.actors;

    $scope.searchActor = service.searchActor;


});
