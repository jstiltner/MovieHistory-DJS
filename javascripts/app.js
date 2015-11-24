require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(

 ["dependencies", "auth", "ajax", "find", "populate-dom"], 
 function(_$_, auth, ajax, find, populateDom) {
 	
 	$("#signup").on("click", function(){
 		var newEmail = $("#emailInput").val();
 		var newPassword= $("#passwordInput").val();
 		auth.createNewUser(newEmail, newPassword);
    $("#allMovies").show();
    $("#pageLinks").show();
    $("#navBar").show();
    $("#splashPage").hide();
 	});

 	$("#login").on("click", function(){
 		var userEmail = $("#emailInput").val();
 		var userPassword= $("#passwordInput").val();
 		
 		auth.loginUser(userEmail, userPassword);

    $("#allMovies").show();
    $("#pageLinks").show();
    $("#navBar").show();
    $("#splashPage").hide();

    console.log(" auth ", auth);
 		console.log(" Email ", userEmail);
 		console.log(" Password ", userPassword);

 	});

  // THIS WILL SHOW AND HIDE CARDS
    $(document).ready(function() {
      $("#splashPage").show();
      $("#allMovies").hide();
      $("#unwatchedMovies").hide();
      $("#watchedMovies").hide();
      $("#favoriteMovies").hide();
      $("#pageLinks").hide();
      $("#navBar").hide();
    });


    $("body").on("click", "#allLink", function() {
        $("#allMovies").show();
        $("#unwatchedMovies").hide();
        $("#splashPage").hide();
        $("#watchedMovies").hide();
        $("#favoriteMovies").hide();
      });

  $("body").on("click", "#unwatchedLink", function() {
        $("#unwatchedMovies").show();
        $("#allMovies").hide();
        $("#splashPage").hide();
        $("#watchedMovies").hide();
        $("#favoriteMovies").hide();
      });

  $("body").on("click", "#watchedLink", function() {
        $("#watchedMovies").show();
        $("#unwatchedMovies").hide();
        $("#splashPage").hide();
        $("#allMovies").hide();
        $("#favoriteMovies").hide();
      });

   $("body").on("click", "#favoriteLink", function() {
        $("#favoriteMovies").show();
        $("#watchedMovies").hide();
        $("#splashPage").hide();
        $("#unwatchedMovies").hide();
        $("#allMovies").hide();
      });

   $("body").on("click", ".add", function() {
      console.log(find)
      var title = $(this).attr("title");
      var image = $(this).attr("image");
      auth.movieAdded(title, image)
      // populateDom.postToFindMovies(find.oData)
   });

//navBar begun not finished
   $("#navBar").on("keypress", function() {
    if (event.which == 13 ) {
      
    event.preventDefault();
      }

   });
 });











