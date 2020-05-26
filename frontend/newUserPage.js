document.addEventListener("DOMContentLoaded", (event) => {
    
    const newUserForm = document.getElementById("new-user-form");
    const passwordInput = document.getElementById('password');
    const userUrl = "http://localhost:3000/users/"
    passwordInput.type = "password"
    
    newUserForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(newUserForm);
        const newUserName = formData.get('name');
        const newUserUserName = formData.get('username');
        const newUserPassword = formData.get('password');
        const newUser = {
            name: newUserName,
            username: newUserUserName,
            password: newUserPassword
        }

        fetch(userUrl, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(parseJSON)
            .then(console.log(newUser))
    })

function parseJSON(response){
    response.json();
}

})