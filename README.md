# React-Learnings
  - Repo includes React codes, concepts, and projects created while learning.
  - _**Checkout branches which contain different topics covered in the react concepts. Don't miss the ReadMe file**_
  
  -  [useState and Management of changing states](https://github.com/Rahul4dev/React-Learnings/tree/useStateManagement)
  -  [Prop Funneling](https://github.com/Rahul4dev/React-Learnings/tree/PropsFunneling)
  -  [HTPP_Request](https://github.com/Rahul4dev/React-Learnings/tree/HTTP_Requests) to send get and post request
  -  [Forms And Inputs](https://github.com/Rahul4dev/React-Learnings/tree/FormsAndInput) with custom Hooks and Validation logic
  -  [Food Delivery App](https://github.com/Rahul4dev/React-Learnings/tree/FoodDeliveryApp) using all the above learnings.
  - [Forms and Input](https://github.com/Rahul4dev/React-Learnings/tree/FormsAndInput) of React and Components which are custom based and can be created to make it more responsive and reactive.
  - [React Router](https://github.com/Rahul4dev/React-Learnings/tree/eventsProject_React_Router) using another package to enhance the functionalities and productivity of React. Using a router and its different hooks makes the React application multipage and content-oriented.
  - [Authentication](https://github.com/Rahul4dev/React-Learnings/tree/Authentication) is an enhancement in the router project where we are adding auth functionality and route protection technique so that we can render and show content conditionally based on the user's authentication status.
  
# [Next.JS Learnings]()
   - NextJS id react framework with some full stack features and easy routing technique that make react more reactive and interactive.
   - Server-side Rendering(SSR):  Automatic page pre-renders, blend client-side and server-side rendering ( fetch data on the server and render finished pages)
   - File-based Routing: Since React require additional code and library for the routing (react-router-dom), Nextjs use the file system for the routing and we can define routes just by creating particular files and folders with their naming convention which can automatically create a route.
   - Full-stack compatibility: Easily add backend code to your Nextjs app, store data, get data, authenticate etc without using express.js and easily connect with the database and create a response for the incoming request using node.js codes.
   - Pre-rendering: Nextjs generates HTML for each page in advance, instead of having it in the script file and run through codes. Through this, every page can have its title and description which is good for performance and SEO.
   - Hydration: Each generated HTML is associated with minimal js code necessary for that page. When a page is loaded through rendering the code makes it fully interactive. This process is called hydration. i.e., js code hydrates the dead code to make it alive. Eg, In React, till the fetch function gets the data from the API, our page content will be blank and that is not good UI. Since Nextjs has already created the skeleton (HTML) of the possible pages so we  already have something to show till the fetch function gets the data from the API.
   - There are two forms of Pre-Rendering:
       - Server Side Rendering(SSR) ( generate the HTML on every request: expensive but useful for quick update type application)
       - Static Site Generation(SSG) (generate the HTML on the build time, i.e, only one time, good, fast and efficient, but require rebuilding for updates)
       - We also have a fusion of SSR and SSG called Incremental Static Regeneration(ISR) ( it generates the HTML on almost every given revalidate value) for this Nextjs has a hook called useSWR ( stale while revalidate) i.e, it will stale(data from cache) till revalidate function gets updated data.
   - Nextjs have two routes for the Application building :
       - [App Route](https://github.com/Rahul4dev/React-Learnings/tree/next-app-route) need index.js or page.js file for routing : newer version and faster build
       - [Page Route](https://github.com/Rahul4dev/React-Learnings/tree/next-page-route-meetup)  need index.js for routing) : older version but still prevalent

  
     
