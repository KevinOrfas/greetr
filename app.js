var g = G$('Kevin', 'Orfas', 'es')

$('#login').click(function(){
    var loginGrtr = G$('Joe', 'Doe');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
