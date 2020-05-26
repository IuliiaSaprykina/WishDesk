# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Wish.destroy_all;

wish1 = Wish.new(
    wish_type: "My Ideal Home",
    description: "Sweet Home in Forest",
    image_url: "https://img1.goodfon.com/original/2880x1800/d/2e/nature-house-home-river-water.jpg?d=1"
)
wish2 = Wish.new(
    wish_type: "My Ideal Home",
    description: "House with view on Mountains",
    image_url: "https://goldwyn.ru/images/mountains/Mountain_Heading_4.jpg"
)

wish3 = Wish.new(
    wish_type: "My Ideal Home",
    description: "House with view on Ocean",
    image_url: "https://wallup.net/wp-content/uploads/2019/09/588739-usa-houses-laguna-beach-mansion-night-cities-house-ocean.jpg"
)

wish4 = Wish.new(
    wish_type: "My Ideal Home",
    description: "House in Towb",
    image_url: "http://2.bp.blogspot.com/-G6qqLRYyAYo/UPw4CS6nboI/AAAAAAAACpU/d7JmgFo5eNc/s1600/greyhome.jpg"
)

wish5 = Wish.new(
    wish_type: "My Ideal Family",
    description: "Full happy family",
    image_url: "http://www.ezratequotes.com/wp-content/uploads/2012/02/Family.jpg"
)

wish6 = Wish.new(
    wish_type: "Travel",
    description: "Paris",
    image_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
)

wish7 = Wish.new(
    wish_type: "Travel",
    description: "Maldives",
    image_url: "https://static.simpsonyachtcharter.com/uploads/2018/12/MALDIVES_shutterstock_1046639452-750x470.jpg"
)

wish8 = Wish.new(
    wish_type: "Travel",
    description: "Italy",
    image_url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1833&q=80"
)

wish9 = Wish.new(
    wish_type: "Travel",
    description: "Cappadocia",
    image_url: "https://lisahomsy.com/wp-content/uploads/2019/04/DSC_7188-copy.jpg"
)

wish10 = Wish.new(
    wish_type: "Travel",
    description: "Moscow",
    image_url: "https://www.vivastour.com/storage/tour-images/29/ujkxNGPnZ3Ih6dMueIBE3KAYBdjPZqjdVN8dUj9F.jpeg"
)

wish11 = Wish.new(
    wish_type: "Travel",
    description: "Ireland",
    image_url: "https://jooinn.com/images/ireland-1.jpg"
)

wish12 = Wish.new(
    wish_type: "Travel",
    description: "London",
    image_url: "https://wallpapercave.com/wp/wp3330450.jpg"
)

wish13 = Wish.new(
    wish_type: "Health",
    description: "Good food - good health",
    image_url: "https://image.shutterstock.com/image-photo/healthy-food-heart-cholesterol-diet-600w-335916848.jpg"
)

wish14 = Wish.new(
    wish_type: "Health",
    description: "I have a good health",
    image_url: "https://images.squarespace-cdn.com/content/v1/52deadc3e4b02ffcb6bcc82b/1422902488034-O2K6MOHPYTXVCBV1280W/ke17ZwdGBToddI8pDm48kOfyDvEHHXPScbb76BOQ0GtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw_NRLlI4YHUKeAre0H6hynZ5GYDdL-qHtx7rCb_L1MstOwIbU9G8H62C_qNhXwhxo/Road+Signs+to+Healthy+Sign.png?format=1000w"
)

wish15 = Wish.new(
    wish_type: "Gadgets",
    description: "New Iphone",
    image_url: "https://service.pcconnection.com/images/inhouse/CFA82593-0180-4626-AADC-78AC1398D027.jpg"
)

wish16 = Wish.new(
    wish_type: "Gadgets",
    description: "My perfect working Area",
    image_url: "https://ux-designmastery.tumblr.com/image/160614091909"
)