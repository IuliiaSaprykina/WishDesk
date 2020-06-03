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
    image_url: "https://images.unsplash.com/photo-1536209604112-c4f045f94729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
)
wish2 = Wish.create(
    wish_type: "My Ideal Home",
    description: "House with view on Mountains",
    image_url: "https://images.unsplash.com/photo-1553972854-de90fa0f4740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
)

wish3 = Wish.create(
    wish_type: "My Ideal Home",
    description: "House with view on Ocean",
    image_url: "https://images.unsplash.com/photo-1537042145424-98c3022ed567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
)

wish4 = Wish.create(
    wish_type: "My Ideal Home",
    description: "House in Town",
    image_url: "https://images.unsplash.com/photo-1560026301-88340cf16be7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=668&q=80"
)

wish5 = Wish.create(
    wish_type: "My Ideal Family",
    description: "Full happy family",
    image_url: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"
)

wish6 = Wish.create(
    wish_type: "Travel",
    description: "Paris",
    image_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
)

wish7 = Wish.create(
    wish_type: "Travel",
    description: "Maldives",
    image_url: "https://images.unsplash.com/photo-1540280369237-dea08361593a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
)

wish8 = Wish.create(
    wish_type: "Travel",
    description: "Italy",
    image_url: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
)

wish9 = Wish.create(
    wish_type: "Travel",
    description: "Cappadocia",
    image_url: "https://lisahomsy.com/wp-content/uploads/2019/04/DSC_7188-copy.jpg"
)

wish10 = Wish.create(
    wish_type: "Travel",
    description: "Moscow",
    image_url: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
)

wish11 = Wish.create(
    wish_type: "Travel",
    description: "Ireland",
    image_url: "https://images.unsplash.com/photo-1576659193210-ea6f15948f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
)

wish12 = Wish.create(
    wish_type: "Travel",
    description: "London",
    image_url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
)

wish13 = Wish.create(
    wish_type: "Health",
    description: "Good food - good health",
    image_url: "https://image.shutterstock.com/image-photo/healthy-food-heart-cholesterol-diet-600w-335916848.jpg"
)

wish14 = Wish.create(
    wish_type: "Health",
    description: "I have a good health",
    image_url: "https://images.unsplash.com/photo-1488228469209-c141f8bcd723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
)

wish15 = Wish.create(
    wish_type: "Gadgets",
    description: "New Iphone",
    image_url: "https://images.unsplash.com/photo-1581003989510-ba20094d343c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=744&q=80"
)

wish16 = Wish.create(
    wish_type: "Gadgets",
    description: "My perfect working Area",
    image_url: "https://4.bp.blogspot.com/-awqqjs7QgYU/WH3fbluv46I/AAAAAAAAMnE/fbDqpIcmCUoQo8vU9N-E_XelQbdAUSpDwCLcB/s1600/BelatheeInteriors008.jpg"
)