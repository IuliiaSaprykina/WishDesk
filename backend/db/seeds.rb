# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Wish.destroy_all;

wish1 = Wish.create(
    wish_type: "My Ideal Home",
    description: "Sweet Home in Forest",
    image_url: "https://i.pinimg.com/originals/80/03/d9/8003d9d41878d03d94dd41949f33f6f7.jpg"
)
wish2 = Wish.create(
    wish_type: "My Ideal Home",
    description: "House with view on Mountains",
    image_url: "https://goldwyn.ru/images/mountains/Mountain_Heading_4.jpg"
)

wish3 = Wish.create(
    wish_type: "My Ideal Home",
    description: "House with view on Ocean",
    image_url: "https://wallup.net/wp-content/uploads/2019/09/588739-usa-houses-laguna-beach-mansion-night-cities-house-ocean.jpg"
)

wish4 = Wish.create(
    wish_type: "My Ideal Home",
    description: "House in Town",
    image_url: "http://2.bp.blogspot.com/-G6qqLRYyAYo/UPw4CS6nboI/AAAAAAAACpU/d7JmgFo5eNc/s1600/greyhome.jpg"
)

wish5 = Wish.create(
    wish_type: "My Ideal Family",
    description: "Full happy family",
    image_url: "http://www.ezratequotes.com/wp-content/uploads/2012/02/Family.jpg"
)

wish6 = Wish.create(
    wish_type: "Travel",
    description: "Paris",
    image_url: "https://wallpapercave.com/wp/uIW2KF5.jpg"
)

wish7 = Wish.create(
    wish_type: "Travel",
    description: "Maldives",
    image_url: "https://static.simpsonyachtcharter.com/uploads/2018/12/MALDIVES_shutterstock_1046639452-750x470.jpg"
)

wish8 = Wish.create(
    wish_type: "Travel",
    description: "Italy",
    image_url: "https://wallpapercave.com/wp/wp4710357.jpg"
)

wish9 = Wish.create(
    wish_type: "Travel",
    description: "Cappadocia",
    image_url: "https://lisahomsy.com/wp-content/uploads/2019/04/DSC_7188-copy.jpg"
)

wish10 = Wish.create(
    wish_type: "Travel",
    description: "Moscow",
    image_url: "https://media.fleetwaytravel.com/0792749b727e175ff7678db2e0debccb_highRes_x2.jpg"
)

wish11 = Wish.create(
    wish_type: "Travel",
    description: "Ireland",
    image_url: "https://jooinn.com/images/ireland-1.jpg"
)

wish12 = Wish.create(
    wish_type: "Travel",
    description: "London",
    image_url: "https://wallpapercave.com/wp/wp3330450.jpg"
)

wish13 = Wish.create(
    wish_type: "Health",
    description: "Good food - good health",
    image_url: "https://image.shutterstock.com/image-photo/healthy-food-heart-cholesterol-diet-600w-335916848.jpg"
)

wish14 = Wish.create(
    wish_type: "Health",
    description: "I have a good health",
    image_url: "https://wallpapercave.com/wp/wp4362166.jpg"
)

wish15 = Wish.create(
    wish_type: "Gadgets",
    description: "New Iphone",
    image_url: "https://service.pcconnection.com/images/inhouse/CFA82593-0180-4626-AADC-78AC1398D027.jpg"
)

wish16 = Wish.create(
    wish_type: "Gadgets",
    description: "My perfect working Area",
    image_url: "https://4.bp.blogspot.com/-awqqjs7QgYU/WH3fbluv46I/AAAAAAAAMnE/fbDqpIcmCUoQo8vU9N-E_XelQbdAUSpDwCLcB/s1600/BelatheeInteriors008.jpg"
)