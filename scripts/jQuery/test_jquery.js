// When the page is ready...
$(document) .ready(function() {
    $("#dialog") .dialog( {
        modal: true,
        minWidth: 500,
        minHeight: 300, 
    }); $(".ui-widget") .hide() .fadeIn(1000);
});



