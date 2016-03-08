var app = window.angular.module('app', [])

app.factory('pokemonFetcher', pokemonFetcher)
app.controller('mainCtrl', mainCtrl)


function pokemonFetcher ($http) {

  var API_ROOT = 'pokemon'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    },
    tryit: function() {
      var politics = '/politics';

      return $http
        .get(politics)
        .then(function (resp) {

          console.log("Get Worked");
          console.log(resp.data);
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, pokemonFetcher) {

  $scope.pokemon = []

  pokemonFetcher.get()
    .then(function (data) {
      $scope.pokemon = data
    })

  pokemonFetcher.tryit()
    .then(function (data) {
      console.log("tryit");
      console.log(data);
    })

    $("#button").click(
        function(e){
        var myQuery = document.getElementById("inputbox").value;
        var urls = "http://pokeapi.co/api/v2/pokemon/"+myQuery;
        console.log(urls);
        console.log("Test");
        $.ajax({
          url: urls,
          dataType: 'json',
          success:  function(data){
            console.log(data.name);
            console.log(data.height);
            console.log(data.sprites.front_default);
            console.log(data.forms);
            console.log(data.forms);
            $("#result").append("<p>"+data.name+"</p>");
	    if(data.id < 10){
               $("#result").append("<img src=http://sprites.pokecheck.org/i/00"+data.id+".gif>");
	    }
	    else if(data.id < 100){
               $("#result").append("<img src=http://sprites.pokecheck.org/i/0"+data.id+".gif>");
	    }
	    else{
               $("#result").append("<img src=http://sprites.pokecheck.org/i/"+data.id+".gif>");
	    }
	    
	    
	    
          }
       });
      });
  }
