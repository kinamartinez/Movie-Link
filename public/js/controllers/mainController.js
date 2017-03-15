app.controller('mainController', function($scope, service) {

    //'import' functions from service
    $scope.links = service.links;
    $scope.addMovieLink = service.addMovieLink;
    $scope.addActorLink = service.addActorLink;
    $scope.searchTitle = service.searchTitle;
    $scope.resultByTitle = service.resultByTitle;
    $scope.searchCast = service.searchCast;
    $scope.cast = service.cast;
    $scope.credits = service.credits;
    $scope.searchPersonId = service.searchPersonId;
    $scope.searchPopular = service.searchPopular;
    $scope.searchTopRated = service.searchTopRated;
    $scope.searchNowPlaying = service.searchNowPlaying;
    $scope.resultByActor = service.resultByActor;
    $scope.searchActor = service.searchActor;
    $scope.displayRightList = service.displayRightList;
    $scope.searchTitle = function() {
        service.searchTitle($scope.titleMovie);
    };

    //Invoke get Popular movies to display when the page opens
    $scope.searchPopular();


});
