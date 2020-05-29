# WishDesk

Visualize your own dreams and wishes.

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info
I believe that our thoughts have real powers. And if we want something and dream about it every day, it really will come true in your future. So on this site there is a really great tool that allows you to visualize your dreams.

## Intro Video
[Wish Desk on YouTube]()

## Technologies
* ActiveRecord - version 6.0.2.2
* Rails - version 6.0.2 
* Ruby - version 2.6.1 and 2.6.5
* SQLite3 - version 1.4

## Setup
To run this project, install it locally by cloning the GitHub repository and typing:
Open two command terminals. 
On the first one, navigate to the backend folder and run 
```rails s```
On the second terminal, navigate to the frontend folder and run
```lite-server```

## Code Examples
```
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
    
```

## Features
* You can create a new user
* You can log in
* Look through wishes by the theme 
* Add wishes to your Wish Desk
* Manage your Wish Desk
* Save yor Wish Desk

## Status
Project is finished. 

## Contact
Created by [Iuliia Saprykina](https://www.linkedin.com/in/iuliia-saprykina-ab3351100) 




