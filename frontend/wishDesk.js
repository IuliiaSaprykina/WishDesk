

const userId = localStorage.getItem('user_id');
const wishesUrl = "http://localhost:3000/wishes/";
const pWishes = document.querySelector('#wishes-images');
const userWishesUrl = "http://localhost:3000/user_wishes/";


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

function screenshot(){

    html2canvas(document.images[1], {
        onrendered: function(canvas){
            
            let ctx = canvas.getContext("2d");
            
            ctx.globalAlpha = 0.05;
            ctx.fillStyle = "#fff";

            // ctx.fillRect(0, 0, canvas.width, canvas.height);
            // // ctx.fillStyle = "blue";
            // // ctx.fillRect(50, 50, 75, 50);
            // // ctx.fillStyle = "green";
            // // ctx.fillRect(80, 80, 75, 50);
              
            let img = canvas.toDataURL('image/jpeg', 1.0);
            let doc = new jsPDF();
                // console.log(doc.addImage(img, 'JPEG', 20, 20))
            doc.addImage(img, 'JPEG', 0, 0);
            doc.save('Wishes.pdf')
        },
    })

}



