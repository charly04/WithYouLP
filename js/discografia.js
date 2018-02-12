var url = 'docs/discos.txt';

$.get( url, function( text ) {
  $( "#discos" ).html( text );
});

$("#discos").on("click", "img", function(){
  var id = this.id;
  var url = 'docs/'+id+'.txt';

  $.get( url, function( text ) {
    $( "#discos" ).html( text );
    });
});
