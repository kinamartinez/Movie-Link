app.service('service', function ($http) {

      //movies to be displayed on the graph, based on guesses
    var movies = [{
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"

    }, {
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"

    }, {
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"

    }, {
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"

    }, {
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"

    }, {
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"

    }, {
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"

    }, {
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"

    }, {
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"

    }, {
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"

    }];

    var people = [];
    var searchPersonId = function (personId) {
        console.log(personId);
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/person/" + personId + "/movie_credits?api_key=" + api_key
        }).then(function successCallback(response) {
            console.log(response.data.cast);
            people.push(response.data.cast);
            console.log(people["0"]["0"]);


        }, function errorCallback(data) {
            console.log(data.data);
        });

    }


    var cast = [];
    var searchCast = function (movieId) {
        console.log(movieId);
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/" + movieId + "/credits?api_key=" + api_key
        }).then(function successCallback(response) {
            cast.push(response.data.cast);
            console.log(cast["0"]);


        }, function errorCallback(data) {
            console.log(data.data);
        });

    }
    var popularMovies = [];
    var searchPopular = function () {
        console.log("popular is working");
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key + "&language=en-US&page=1"
        }).then(function successCallback(response) {

            popularMovies.push(response.data.results);
            console.log(popularMovies["0"]);

        }, function errorCallback(data) {

        });
    };
    var topRated = [];
    var searchTopRated = function () {
        console.log("topRated is working");
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=" + api_key + "&language=en-US&page=1"
        }).then(function successCallback(response) {

            topRated.push(response.data.results);
            console.log(topRated["0"]);

        }, function errorCallback(data) {

        });
    };
    var nowPlaying = [];
    var searchNowPlaying = function () {
        console.log("NowPlaying is working");
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/now_playing?api_key=" + api_key + "&language=en-US&page=1"
        }).then(function successCallback(response) {

            nowPlaying.push(response.data.results);
            console.log(nowPlaying["0"]);

        }, function errorCallback(data) {

        });
    };


    var resultByTitle = [];
    var searchTitle = function (titleMovie) {
        console.log(titleMovie);
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/search/movie" + '?query=' + titleMovie + '&api_key=' + api_key
        }).then(function successCallback(response) {

            resultByTitle.push(response.data.results);
            console.log(resultByTitle["0"]);

        }, function errorCallback(data) {

        });
    };

    var guesses = [];
    var addToGuess = function (movie) {
        guesses.push(movie)
    };

    var actors = [];
    var searchActor = function (actorName) {
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/search/person?api_key="+ api_key +"&language=en-US&query="+actorName+"&page=1&include_adult=false"
        }).then(function successCallback(response) {

            actors.push(response.data.results);
            console.log(actors["0"]);

        }, function errorCallback(data) {

        });
    };

    //exporting functions to the controller
    return {
        movies: movies,
        popularMovies: popularMovies,
        // searchActor: searchActor,
        //results: results,
        searchTitle: searchTitle,
        resultByTitle: resultByTitle,
        guesses: guesses,
        addToGuess: addToGuess,
        searchCast: searchCast,
        cast: cast,
        people: people,
        searchPersonId: searchPersonId,
        searchPopular: searchPopular,
        topRated: topRated,
        searchTopRated: searchTopRated,
        nowPlaying: nowPlaying,
        searchNowPlaying: searchNowPlaying,
        actors:actors,
        searchActor:searchActor,

    };
});
