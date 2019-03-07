$(function(){
    var odkazy = $('#odkazy ul');
    odkazyUslechtileRyby.forEach(function(obj){
        odkazy.append('<li><a href="'+obj.link+'" target="_blank">'
        +obj.name+'</a></li>');
    });
})