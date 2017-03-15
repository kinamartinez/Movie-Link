app.controller('mainController', function($scope, service) {

    //'import' functions from service
    $scope.links = service.links;
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
    
    //function for finding movie from input
    $scope.searchTitle = function() {
        service.searchTitle($scope.titleMovie);
    };


    //function for adding movie to links (from search or list)
    $scope.addMovieLink = function (movie) {
        var newMovie = {
            title: movie.title,
            year: movie.release_date,
            id: movie.id,
            rating: movie.vote_average,
            img: "http://image.tmdb.org/t/p/w154"+movie.backdrop_path
        };
        console.log(newMovie);
        service.addMovieLink(newMovie);
    };

    //test function for ng-click
    $scope.test = function () {
        console.log(this);

    };

    //Invoke get Popular movies to display when the page opens
    $scope.searchPopular();

    //Variables to show/hide the pages
    $scope.play = false;

    $scope.playing = function() {
        $scope.play = true;
    };
    //vars to toggle actor/movie search
    $scope.nextActor = true;

    $scope.nextMovie = false;

    $scope.toggleMovieActor = function () {
        $scope.nextActor = !$scope.nextActor;
        $scope.nextMovie = !$scope.nextMovie;
    };


});
