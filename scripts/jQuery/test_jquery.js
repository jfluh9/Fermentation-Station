// When the page is ready...
$(document) .ready(function() {
    $("#dialog") .dialog( {
        modal: true,
        minWidth: 500,
        minHeight: 300, 
    });
    
        $(".ui-widget") .hide() .fadeIn(1000); //On Load the login section fades into view

            $("#usrName") .focus(); //On load the focus is set to the usrName input form

});
//The following function checks the form after every keypress.
//Once the user name input is 5 characters in length it moves the focus
//to the password input...and then onto the submit button.
$(document) .keyup(function () {

if(document.frmLogin.usrName.value.length>=5) {
    $("#pwd") .focus();
}

if(document.frmLogin.pwd.value.length>=14) {
    $("#submit") .focus();
}

});