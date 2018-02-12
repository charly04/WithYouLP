$("#fotosmiembros img").click(function() {
  var id = this.id;
  var url = 'docs/'+id+'.txt';

  $.get( url, function( text ) {
    $( "#contenido" ).hide();
    $( "#contenido" ).html( text );
    $( "#contenido" ).fadeIn(1000);
    });

  $("html, body").animate({ scrollTop: 0 }, "slow");
});
