
document.addEventListener("DOMContentLoaded", () => {
    const $userError = document.querySelector('.user-error');
    const $loginError = document.querySelector('.login-error')
    const newUserForm = document.getElementById('new-user-form');
    const addUserButton = document.querySelector('.add-new-user');
    const newUserAdded = document.getElementById('new-user-added');
    const logInButton = document.getElementById('log-in');
    const logInForm = document.getElementById('log-in-form');
    const logInMenu = document.getElementById('log-in-menu');
    const logOutButton = document.getElementById('logout');
    const isLoggedIn = document.querySelector('.is-logged-in');
    const loginUrl = "http://localhost:3000/login/";
    const userUrl = "http://localhost:3000/users/";

    welcome();

    function welcome(){
        newUserForm.style.display = 'none';
        logInMenu.style.display = 'none';
    }

    setIsLoggedIn();
    
    function setIsLoggedIn(){
        isLoggedIn.textContent = localStorage.getItem("token")
            ? "You logged in!"
            : "Please type your username and password to log in"
    }

    addUserButton.addEventListener('click', () => newUserForm.style.display = 'block');
    logInButton.addEventListener('click', () => logInMenu.style.display = 'block');
    logOutButton.addEventListener('click', logOut);
    
    newUserForm.addEventListener('submit', (event) => {
        event.preventDefault();
            
        const formData = new FormData(event.target);
        const newUserName = formData.get('name');
        const newUserUserName = formData.get('username');
        const newUserPassword = formData.get('password');
        const newUser = {
            name: newUserName,
            username: newUserUserName,
            password: newUserPassword
        };

        fetch(userUrl, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => {
                if (!response.ok){
                    console.log($userError);
                    $userError.textContent = "Please write a different username, this username already exist";
                } else {
                    welcome();
                    newUserAdded.textContent = "New User Added. Please log in";
                }
            })
            
        newUserForm.reset();
    })

    logInForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(logInForm);
        const newUserUserName = formData.get('username');
        const newUserPassword = formData.get('password');
        const loginUser = {
            username: newUserUserName,
            password: newUserPassword
        }
        // localStorage.setItem('username', newUserUserName);

        fetch(loginUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginUser)
        })
            .then(response => response.json())
            .then(result => {
                // if (!result.ok){
                //     $loginError.textContent = "Please type corret username and password"
                // } else {
                    // $loginError.remove();
                    console.log('result: ', result.token)
                    console.log('username: ', newUserUserName)
                    console.log('userid', result.user_id);
                    localStorage.setItem('token', result.token)
                    localStorage.setItem('username', newUserUserName)
                    localStorage.setItem('user_id', result.user_id)
                    setIsLoggedIn()
                // }
        })
        logInForm.reset();
    })

function logOut(){
    localStorage.removeItem("token");
    setIsLoggedIn();
}

})

