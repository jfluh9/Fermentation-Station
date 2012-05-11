function loginForm()    {
    document.frmLogin.usrName.focus();
    if(document.frmLogin.usrName.value.length>=5);
        document.frmLogin.pwd.focus();
    if(document.frmLogin.pwd.value.length>=14);
        document.frmLogin.submit.focus();
}



