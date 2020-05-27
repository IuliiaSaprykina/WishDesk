const userId = localStorage.getItem('user_id');
const wishesUrl = "http://localhost:3000/wishes/";
// const yourWishDesk = document.getElementById('canvas');
// context = canvas.getContext('2d');
const pWishes = document.querySelector('.wishes-images')
const userWishesUrl = "http://localhost:3000/user_wishes/";


// console.log(yourWishDesk)

document.addEventListener("DOMContentLoaded", () => {

    fetch(userWishesUrl , {
        headers: {
            'content-type':'application/json',
            Authorization: `bearer ${localStorage.getItem("token")}`
        },
    })
        .then(parseJSON)
        // .then(console.log)
        .then(users_wishes => users_wishes["user_wishes"].forEach(appendWishesToContainer))

    function appendWishesToContainer(user_wish) {
        if (user_wish.user_id == userId){
            
            fetch(wishesUrl)
                .then(parseJSON)
                // .then(console.log)
                .then(wishes => wishes["wishes"].forEach(addYourWishToContainer))
            
            function addYourWishToContainer(wish){
                if (wish.id == user_wish.wish_id){
                    
                    const img = document.createElement('img');
        
                    img.src = wish.image_url;
                    img.width = "380";
                    img.height = "300";
            
                   pWishes.append(img)
                }
            }
        }
    }
})

function parseJSON(response){
    return response.json();
}