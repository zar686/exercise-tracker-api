# Fit Tracker API

Fit Tracker is built using React, React-Bootstrap, HTML, and CSS. There are two main resources in the backend that the client connects to: Users and Posts. Both of these resources are modelled using Mongoose and stored as collections of documents in a non-relational database (MongoDB). Supported user features include sign in, sign up, creating a post, seeing all posts, seeing all users, seeing other people's posts, sign out, change password and update profile (routes can be found in the API repo).
Token authentication is incorporated into the app with the help of crypto (to generate the tokens) and Passport (authentication middleware used with Express). I wrote routes for creating, reading, updating and deleting (CRUD) Posts with Express. Additionally, there were routes for creating, signing in to, and updating User profiles.

# Important Links

- Deployed API - https://blooming-island-23928.herokuapp.com/
- Fit Tracker App - https://zar686.github.io/exercise-tracker-client/
- Fit Tracker Client GitHub Repo - https://github.com/zar686/exercise-tracker-client
- Fit Tracker API GitHub Repo - https://github.com/zar686/exercise-tracker-api


# Planning Story

The vision for DevSpot is to be the Twitter for software developers, where they can share their thoughts, journey, victories, struggles, things in tech that interest them, really anything related to software development. It allows users to also browse other user profiles and see their profile picture, where they are based out of, what languages the write in, how long they have been coding, links to their LinkedIn and Github profiles, all of their posts, etc. The User model includes the properties: email, username, (hashed)password, first name, last name, city, state, country, (coding)languages, years of experience, current role, GitHub profile link, LinkedIn profile link, and a profile picture. Initally, the team included an active property in the user model whose value is a boolean (default value is true) so that user accounts can be enabled and disabled. However, the current iteration of the app does not include deactivating user accounts. This is a feature that the team wishes to incorporate in the future. The Post model simply includes the body/content of the post and the owner of the post (in Mongoose, a reference to a specific user. Initally, a Comment subdocument was written into the Post model. Similar to the active property in the User model, the team did not get to incorporating comments into the app. Comments for each post will be supported in future iterations, as well as likes.

# API End Points

Users
Verb	URI Pattern	Controller#Action	Token Required
POST	/sign-up	users#sign-up	false
POST	/sign-in	users#sign-in	false
PATCH	/change-password	users#change-password	true
PATCH	/user-info	users#update-info.	true
GET	/users	users#index	true
GET	/users/:id	users#show	true
DELETE	/sign-out	users#sign-out	true
Posts
Verb	URI Pattern	Controller#Action	Token Required
GET	/posts	posts#index	true
POST	/posts	posts#create	true
PATCH	/posts/:id	posts#update	true
DELETE	/posts/:id	posts#delete	true
All data returned from the API is formatted as JSON.

# User Stories

As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user, I would like to add a post to my wall.
As a signed in user, I would like to update a post on my wall.
As a signed in user, I would like to delete a post on my wall.
As a signed in user, I would like to see all my posts.
As a signed in user, I would like to view a list of other users and view their walls.

# Technologies Used

Express
MongoDB
Mongoose
JavaScript
NodeJS
nodemon
Passport
bcrypt
crypto

# Future Iterations

A future iteration of the app would support image upload of profile pictures as well picture uploads with posts using AWS.

# Entity Relationship Diagram (ERD)

https://imgur.com/a/vMKguIs
