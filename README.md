# TO YOU TO ME

## To Do:

### BIGGEST GOAL -> CLEARLY NAME EVERYTHING <-

1. User stories :heavy_check_mark: 
2. Re-create HTML page
3. Use a promise 🤞 (for example, if we need to post to two tables in the same request)
4. Rebuild server
5. Create new routes
- There should be protected routes and unprotected routes that depend on the user having a cookie or not (or what level of access they have).
6. Organise handlers
7. Re-create new database with a couple entries
8. Decide on tables and relationships
9. Login form with 2 fields - username and password
10. Users only have to log in once (i.e. implement a cookie-based session on login)
11. Username is visible on each page of the site after logging in
12. Any user-submitted content should be labelled with the authors username
13. Include thorough tests on the back-end, testing pure functions and testing routes using Supertest. If you make external API calls, use Nock to mock the response for your tests.
14. Test front-end logic, we don't expect tests on the DOM.
15. Encription for login info

## User stories 👬

1. I am a user who likes to try new hobbies and wants to keep track of the things I've tried and where I've tried them.
2. I am a user who likes to try new hobbies and wants suggestions from others in my city.

- Need to register
- Need to login
- Need to see some public content (photos, etc?)
- Need to be able to add, search and view new hobbies
    - Can add photo, address, name of place, type of activity and review
    - Add a like / save to favourites (stretch) 
- Need to edit and/or delete hobbies (stretch)
- Would like to see where activities are on a map

3. As admin, I have all read and write abilities (stretch)

## User Journey
1. Home page includes images of hobbies and a link to a register and login page
    - On an image click you are directed the hobby page, which includes info about that hobby (and a button to review)
    - On a click to register, you are directed to a register page
        - After register, you are taken to login page
    - On a click to login, you are directed to login page

2. On login you are directed to your profile page
    - Here you can see and edit (stretch) your info (username, email, password)
    - You can see your added hobbies
    - There is a button to add hobbies
    - You can see your past reviews

3. On add page
    - A form with input for a new hobbie
        - Name (stretch with autocomplete)
        - Location
        - Type with other
        - Comments

## Backend Journey
1. On load, server calls on hobbies database to populate home page

### Routes
- / 
- /login 
- /register
- /hobbie{name}
- /profile{name}
- /review
- /new-hobbies{username}

## Databases

1. Users table
    - ID
    - Username
    - Email
    - Password

2. Hobbies table
    - ID
    - Name of hobby
    - Location
    - Foreign key: user id

3. Hobby reviews table
    - Id
    - Rating
    - Likes
    - Comments / reviews
    - Foreign key: user id
    - Foreign key: hobby id
