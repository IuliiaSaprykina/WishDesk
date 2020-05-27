
const topSecretStuff = document.getElementById('top-secret-stuff');
const wishesContainer = document.querySelector('.wishes-container');
const wishSection = document.querySelector('.wish-section');
const typeButtonSection = document.querySelector('.type-button');
const userWishesUrl = "http://localhost:3000/user_wishes/";
const wishesUrl = "http://localhost:3000/wishes/";

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
    fetch(wishesUrl)
        .then(parseJSON)
        .then(wishes => displayWishes(wishes["wishes"]))
    }
    
    
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
            homeArr.forEach(home => {
                const p = document.createElement('p');
                const img = document.createElement('img')

                p.textContent = home.description;
                img.src = home.image_url;
                img.width = "400";
                img.height = "300";

                wishSection.append(p, img)
            })
        } else if (event.target.textContent == "My Ideal Family"){
    
            familyArr.forEach(el => {
                const p = document.createElement('p');
                const img = document.createElement('img')

                p.textContent = el.description;
                img.src =el.image_url;
                img.width = "400";
                img.height = "300";

                wishSection.append(p, img)
            })
        } else if (event.target.textContent == "Travel") {
            travelArr.forEach(contry => {
                const p = document.createElement('p');
                const img = document.createElement('img')

                p.textContent = contry.description;
                img.src =contry.image_url;
                img.width = "400";
                img.height = "300";

                wishSection.append(p, img)
            })
        } else if (event.target.textContent == "Health"){
            healthArr.forEach(el => {
                const p = document.createElement('p');
                const img = document.createElement('img')

                p.textContent = el.description;
                img.src =el.image_url;
                img.width = "400";
                img.height = "300";

                wishSection.append(p, img)
            })
        } else if (event.target.textContent == "Gadgets"){
            gadgetsArr.forEach(el => {
                const p = document.createElement('p');
                const img = document.createElement('img')

                p.textContent = el.description;
                img.src =el.image_url;
                img.width = "400";
                img.height = "400";

                wishSection.append(p, img)
            })
        }
    }

}
