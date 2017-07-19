window.onload = function(){
  var $button = $('#request');

  $button.on("click", function(e) {

      e.preventDefault();
      var $inputValue = $('#query').val;  
      /*var sArtistToFind = $inputValue.val();*/
      //var sGetArtistsUrl = "https://api.spotify.com/v1/search?type=artist&query=" + sArtistToFind;

       function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
                  q = window.location.hash.substring(1);
              while ( e = r.exec(q)) {
                 hashParams[e[1]] = decodeURIComponent(e[2]);
              }
              return hashParams;
            }

      var params = getHashParams();

      var access_token = params.access_token;

    $.ajax({
       url: 'https://api.spotify.com/v1/search',
       dataType: 'json',
       data: {
          type: "artist",
            query : "beyonce"
        },
       headers: {
           'Authorization': 'Bearer ' + access_token
       },
       success: function(response) {      
            qwerty = response;
            document.getElementById('ajaxContainer').innerHTML = response;
            console.log(response);
            var cadena = "<ul>";
            response.artists.items.forEach(function(element) {
              cadena = cadena + "<li>" + element.name + "</li>"
            });     

            cadena = cadena + "</ul>"
            document.getElementById('ajaxContainer').innerHTML = cadena;
            console.log(cadena);
       }
    });
  });

}