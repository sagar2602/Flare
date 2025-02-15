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
10. Lets now make the children routes, but for making it we have to replace the <Route /> with <Route></Route> ; if we are using the self close tag
11. Create Login and profile components
12. In previous commit 2 children routes added but when we visit over the specific route like "/login" or "/my-profile" , I cannot see any data rendering of that components.
13. The reason for above behavior is , as the parent componetn i.e. Body component have not render its children in an outlet , so they are not working.
14. Lets create an outlet inside our body component , Outlet component says that any children routes of parent component will render over here 
15. Now both routes working correctly.
16. '/login' route have both the NavBar and its content rendered; same goes for 'my-profile' route have both the NavBar and its content rendered.
17. Adding footer componet from daisyUi
18. Lets fix this footer at the bottom of the page
 


Basic structure

 - Body
    - NavBar
    - Route : '/' => For Feeds
    - '/login' => For SignIn
    - '/connections' => For Making connections
    - '/profile' => For Profile Info