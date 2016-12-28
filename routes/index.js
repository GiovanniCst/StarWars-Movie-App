var moviesJson = require('../movies.json');

//vengono definite ed esportate le rotte

//home
exports.home = function(req, res) {
    var movies = moviesJson.movies;
    res.render('home', {
        title : "Star Wars movies",
        movies : movies
    });
};

//pagina episodi
exports.movie_single = function(req, res) {
	var epis_num = req.params.epis_num;

	var movies = moviesJson.movies;

	// Only render the movie_single template for episodes that exist
	if (epis_num >= 1 && epis_num <= 6) {

		var movie = movies[epis_num - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		res.render('movie_single', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters
		});

	} else {
		res.render('not_found', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};


// Route for all other page requests
exports.notFound = function(req, res) {
	var movies = moviesJson.movies;
	res.render('not_found', {
		movies : movies,
		title : "Oops, this page doesn't exist"
	});
};
