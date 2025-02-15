# Flare - A spark of connection

1. Vite + React App
2. Basic setup of react, tailwind and daisyUi
3. Added NavBar component of daisyUi and remove search from it
4. Created a separate NavBar component.
5. Now setting up the routing for different pages without using the createBrowseRoute
6. Created different routes using BrowserRouter, Routes and Route Components.
7. Observed this Error - [hook.js:608 No routes matched location "/"  Error Component Stack:] , So also have to include base route i.e. "/" inside Routes
8. Lets make our Body component Now
9. And lets render the body component inside the base route and add the NavBar component inside the Body component



Basic structure

 - Body
    - NavBar
    - Route : '/' => For Feeds
    - '/login' => For SignIn
    - '/connections' => For Making connections
    - '/profile' => For Profile Info