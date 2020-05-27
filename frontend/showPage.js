const queryParams = new URLSearchParams(window.location.search)
const topSecretStuff = document.getElementById('top-secret-stuff');
const wishesContainer = document.querySelector('.wishes-container');
const wishSection = document.querySelector('.wish-section');
const typeButtonSection = document.querySelector('.type-button');
const yourWishDesk = document.querySelector('.your-wish-desk');
const homeButton = document.getElementById('home-page');
const username = localStorage.getItem('username');
const userId = localStorage.getItem('user_id');
const manageWishDesk = document.getElementById('manage-wish-desk');
const saveButton = document.getElementById('save-wish-desk');
const canvas = document.getElementById('canvas');
const homeSection = document.getElementById('home-section');
const familySection = document.getElementById('family-section');
const travelSection = document.getElementById('travel-section');
const healthSection = document.getElementById('health-section');
const gadgetSection = document.getElementById('gadget-section');
const userWishesUrl = "http://localhost:3000/user_wishes/";
const wishesUrl = "http://localhost:3000/wishes/";
const usersUrl = "http://localhost:3000/users/";


accessPage();

fetch(userWishesUrl, {
    headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
    }
})
    .then(parseJSON)
    .then(parseWishes)

function parseJSON(response){
    return response.json();
}



function accessPage(){
    if (!localStorage.getItem("token")){
        window.location.href = "/"
    }
       
}

function parseWishes(){
    fetch(wishesUrl, {
        headers: {
            "Set-Cookie": "SameSite=None; Secure",
          }

    })
        .then(parseJSON)
        .then(wishes => displayWishes(wishes["wishes"]))
    }

homeButton.addEventListener('click', () => window.location.href = "/");
manageWishDesk.addEventListener('click', yourWishDeskDisplay);
saveButton.addEventListener('click', () => {
    window.open("wishDesk.html")
})
    
    
function displayWishes(wishArr){
        const homeArr = wishArr.filter(e => e.wish_type == "My Ideal Home");
        const familyArr = wishArr.filter(e => e.wish_type == "My Ideal Family");
        const travelArr = wishArr.filter(e => e.wish_type == "Travel");
        const healthArr = wishArr.filter(e => e.wish_type == "Health");
        const gadgetsArr = wishArr.filter(e => e.wish_type == "Gadgets");
        const typeArray = wishArr.map(e => e.wish_type)
        
        const uniqArray = typeArray.filter(e => {
        return !this[e] && (this[e] = true)
        })

        uniqArray.forEach(el => {
            const wishTypeButton = document.createElement('button');

            wishTypeButton.textContent = el;

            wishTypeButton.addEventListener('click', displayWishesImage)

            typeButtonSection.append(wishTypeButton);

})

function displayWishesImage(event) {
    event.preventDefault();
    
    if (event.target.textContent == "My Ideal Home"){
        // familySection.remove();
        // travelSection.remove();
        // healthSection.remove();
        // gadgetSection.remove();
        homeArr.forEach(home => {
            console.log(home)
            const p = document.createElement('p');
            const img = document.createElement('img');
            const addButton = document.createElement('button');
           

            p.textContent = home.description;
            img.src = home.image_url;
            img.width = "400";
            img.height = "300";
            addButton.textContent = "Add Wish";
            
            addButton.addEventListener('click', () =>{
                event.preventDefault();
                // const img = document.createElement('img');

                img.src = home.image_url;
                img.width = "400";
                img.height = "300";

                const newUserWish = {
                    user_id: userId,
                    wish_id: home.id
                }
                    
                fetch(userWishesUrl, {
                    method: "POST",
                    headers: {
                        'content-type':'application/json',
                        Authorization: `bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(newUserWish)
                })
                    .then(parseJSON)
                    .then(console.log)
        })

    homeSection.append(p, img, addButton)
})
    } else if (event.target.textContent == "My Ideal Family"){
        homeSection.remove();
        familyArr.forEach(el => {
            wishSection.style.display = 'block'
            const p = document.createElement('p');
            const img = document.createElement('img');
            const addButton = document.createElement('button');

            p.textContent = el.description;
            img.src =el.image_url;
            img.width = "400";
            img.height = "300";
            addButton.textContent = "Add Wish";

            addButton.addEventListener('click', () =>{
                event.preventDefault();
                const img = document.createElement('img');

                img.src = el.image_url;
                img.width = "400";
                img.height = "300";

                const newUserWish = {
                    user_id: userId,
                    wish_id: el.id
                }
                    
                fetch(userWishesUrl, {
                    method: "POST",
                    headers: {
                        'content-type':'application/json',
                        Authorization: `bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(newUserWish)
                })
                    .then(parseJSON)
                    .then(console.log)
            })

       familySection.append(p, img, addButton)
    })
    } else if (event.target.textContent == "Travel") {
        familySection.remove();
        travelArr.forEach(country => {
            const p = document.createElement('p');
            const img = document.createElement('img');
            const addButton = document.createElement('button');

            p.textContent = country.description;
            img.src =country.image_url;
            img.width = "380";
            img.height = "300";
            addButton.textContent = "Add Wish";

            addButton.addEventListener('click', () =>{
                event.preventDefault();
                const img = document.createElement('img');

                img.src = country.image_url;
                img.width = "400";
                img.height = "300";

                const newUserWish = {
                    user_id: userId,
                    wish_id: country.id
                }
                    
                fetch(userWishesUrl, {
                    method: "POST",
                    headers: {
                        'content-type':'application/json',
                        Authorization: `bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(newUserWish)
                })
                    .then(parseJSON)
                    .then(console.log)
            })

            travelSection.append(p, img, addButton)
        })
    } else if (event.target.textContent == "Health"){
        travelSection.remove();
        healthArr.forEach(el => {
            const p = document.createElement('p');
            const img = document.createElement('img');
            const addButton = document.createElement('button');

            p.textContent = el.description;
            img.src =el.image_url;
            img.width = "400";
            img.height = "300";
            addButton.textContent = "Add Wish";

            addButton.addEventListener('click', () =>{
                event.preventDefault();
                const img = document.createElement('img');

                img.src = el.image_url;
                img.width = "400";
                img.height = "300";

                const newUserWish = {
                    user_id: userId,
                    wish_id: el.id
                }
                    
                fetch(userWishesUrl, {
                    method: "POST",
                    headers: {
                        'content-type':'application/json',
                        Authorization: `bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(newUserWish)
                })
                    .then(parseJSON)
                    .then(console.log)
            })

            healthSection.append(p, img, addButton)
        })
    } else if (event.target.textContent == "Gadgets"){
        healthSection.remove();
        gadgetsArr.forEach(el => {
            const p = document.createElement('p');
            const img = document.createElement('img');
             const addButton = document.createElement('button');

            p.textContent = el.description;
            img.src =el.image_url;
            img.width = "400";
            img.height = "400";
            addButton.textContent = "Add Wish";

            addButton.addEventListener('click', () =>{
                event.preventDefault();
                const img = document.createElement('img');

                img.src = el.image_url;
                img.width = "400";
                img.height = "300";

                const newUserWish = {
                    user_id: userId,
                    wish_id: el.id
                }
                    
                fetch(userWishesUrl, {
                    method: "POST",
                    headers: {
                        'content-type':'application/json',
                        Authorization: `bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(newUserWish)
                })
                    .then(parseJSON)
                    .then(console.log)
            })
                
            gadgetSection.append(p, img, addButton)
         })
    }
}
}

function yourWishDeskDisplay(){
    // healthSection.remove();
    gadgetSection.remove();
    fetch(userWishesUrl , {
        headers: {
            'content-type':'application/json',
            Authorization: `bearer ${localStorage.getItem("token")}`
        },
    })
        .then(parseJSON)
        .then(users_wishes => users_wishes["user_wishes"].forEach(appendWishesToContainer))

    function appendWishesToContainer(user_wish) {
        if (user_wish.user_id == userId){
            fetch(wishesUrl)
                .then(parseJSON)
                .then(wishes => wishes["wishes"].forEach(addYourWishToContainer))
            
            function addYourWishToContainer(wish){
                if (wish.id == user_wish.wish_id){
                    
                    const img = document.createElement('img');
                    const deleteButton = document.createElement('button');
        
                    img.src = wish.image_url;
                    img.width = "400";
                    img.height = "300";
                    deleteButton.textContent = "Remove this Wish";
    
                    deleteButton.addEventListener('click', () => {
                        img.remove();
                        deleteButton.remove();
    
                        fetch(userWishesUrl + user_wish.id, {
                            method: "DELETE", 
                            headers: {
                                'content-type':'application/json',
                                Authorization: `bearer ${localStorage.getItem("token")}`
                            },
                        })
    
                    })
                    
                    yourWishDesk.append(img, deleteButton);
                    return yourWishDesk
                    
                }
            }
        }
    }
}

function wishDeskDisplayForSave(){
    yourWishDeskDisplay();
    console.log(yourWishDesk)
    var fullQuality = canvas.toDataURL('image/jpeg', 1.0);
    console.log(fullQuality);
    
}
