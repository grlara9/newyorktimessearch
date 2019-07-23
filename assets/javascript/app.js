$(document).ready(function() {

});
var year= 2008;
var term = "obama";
var queryUrl ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&pub_year=" + year + "&api-key=tnMn7BLY4DOFRSDwPZkEZGQqrTuOgG1z";


function search() {
	// Get Search Values

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });

	// Build Request

		// then Update UI with articles
}

function clearResults() {
	// Empty articleList
}
search();