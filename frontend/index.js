
document.addEventListener("DOMContentLoaded", () => {


    const createUserButton = document.getElementById('add-new-user');
    const logInButton = document.getElementById('log-in');

    createUserButton.addEventListener('click', showAddUserMenu)
    logInButton.addEventListener('click', showLogInPage)

    function showAddUserMenu(event){
        event.preventDefault();
        
        params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=600,height=300,left=100,top=100`;
        open('newUserPage.html', 'test', params);
        
    }

    function showLogInPage(event){
        event.preventDefault();

        params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=600,height=300,left=100,top=100`;
        open('logInPage.html', 'test', params);
    }

})