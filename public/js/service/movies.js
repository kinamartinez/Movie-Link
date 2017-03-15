app.service('service', function ($http) {

// search with actor's id to find their *credits*
    var searchPersonId = function (personId) {
        console.log(personId);
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/person/" + personId + "/movie_credits?api_key=" + api_key
        }).then(function successCallback(response) {
            console.log(response.data.cast);
            credits = response.data.cast;
            console.log(people["0"]["0"]);

        }, function errorCallback(data) {
            console.log(data.data);
        });
    };

//  on actor selection, store their credits to check against next link movie input
    var credits = [];

// on movie selection store the movie's cast to check against next link actor input
    var cast = [];

//after picking a movie from search, hold the cast information to check against
//next link actor input
    var searchCast = function (movieId) {
        console.log(movieId);
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/" + movieId + "/credits?api_key=" + api_key
        }).then(function successCallback(response) {
            cast = response.data.cast;
            console.log(cast["0"]);

        }, function errorCallback(data) {
            console.log(data.data);
        });

    };

//array for showing beginning movie lists
    var displayRightList = [];

//function for retrieving popular movies and making display list
    var searchPopular = function () {
        console.log("popular is working");
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key + "&language=en-US&page=1"
        }).then(function successCallback(response) {

            displayRightList = response.data.results;
            console.log(popularMovies["0"]);

        }, function errorCallback(data) {

        });
    };

//function for retrieving top rated movies and making display list
    var searchTopRated = function () {
        console.log("topRated is working");
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=" + api_key + "&language=en-US&page=1"
        }).then(function successCallback(response) {

            displayRightList = response.data.results;
            console.log(topRated["0"]);

        }, function errorCallback(data) {

        });
    };

//function for retrieving current movies and making display list
    var searchNowPlaying = function () {
        console.log("NowPlaying is working");
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/now_playing?api_key=" + api_key + "&language=en-US&page=1"
        }).then(function successCallback(response) {

            displayRightList = response.data.results;
            console.log(nowPlaying["0"]);

        }, function errorCallback(data) {

        });
    };

//array for holding movie search results
    var resultByTitle = [];

//function for finding list of movie's based on user input search
    var searchTitle = function (titleMovie) {
        console.log(titleMovie);
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/search/movie" + '?query=' + titleMovie + '&api_key=' + api_key
        }).then(function successCallback(response) {

            resultByTitle = response.data.results;
            console.log(resultByTitle["0"]);

        }, function errorCallback(data) {

        });
    };

//object and array for shoing user's movie and actor links
    var links = {
        movies: [
        {
        title: "The Grinch",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"
        },
        {
        title: "The Grinch 2",
        year: 1990,
        cast: ["Jim Carrey", "Mumford Mcson"],
        rating: 10,
        poster: "someurl"
        }
        ],
        actors:[
        "Elijah Wood", "Tom Hanks", "Bill Cosby"
        ]
    };

//function for adding specific movie to links obj
    var addMovieLink = function (movie) {
        links.movies.push(movie);
    };

//function for adding specific actor to links obj
    var addActorLink = function (actor) {
        links.actors.push(actor);
    };

//array for listing results of general actor search
    var resultByActor = [];
    var searchActor = function (actorName) {
        var api_key = "8827ea31eb495768c6d732582c199ecc";
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/search/person?api_key="+ api_key +"&language=en-US&query="+actorName+"&page=1&include_adult=false"
        }).then(function successCallback(response) {

            resultsByActor = response.data.results;
            console.log(actors["0"]);

        }, function errorCallback(data) {

        });
    };

    //exporting functions to the controller
    return {

        links: links,
        addMovieLink: addMovieLink,
        addActorLink: addActorLink,
        searchTitle: searchTitle,
        resultByTitle: resultByTitle,
        searchCast: searchCast,
        cast: cast,
        credits: credits,
        searchPersonId: searchPersonId,
        searchPopular: searchPopular,
        searchTopRated: searchTopRated,
        searchNowPlaying: searchNowPlaying,
        resultByActor: resultByActor,
        searchActor:searchActor,
        displayRightList: displayRightList

    };
});
