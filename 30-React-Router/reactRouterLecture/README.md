## Outline
10m Theoretical Prerequisites
 5m But what does React Router Actually Do?
 5m Setup and Components
40m Using the Router Components

## Server-Side/Static Routing VS Client-Side Routing
- Static routing is what we're used to with Rails. Basically, we define the routes beforehand, and then render their actions separately.

- Now that the React stack is handling routing, that means none of our routes require a new GET request to the backend to get that page's HTML. This allows us to enforce the "Single Page App", since we can render the new route's page without refreshing.

## Benifits of Client-Side-Routing
- It is fast. 
- Because everything is loading upon initial page load, redendering a differnt route is very quick. We long longer have to wait on a get request and then it's repsone and view template to render.
- Gives user a working forward and back button.
- Allows us to share links and use differnt routes as entry points to differnt parts of a SPA.

## React Router
- npm install --save react-router-dom
- Import BrowserRouter and wrap app component in it in index.js.
- Import { BrowserRouter as Router, Route, Link, Switch } from     'react-router-dom';
- <BrowserRouter><App></BrowserRouter>

## But what does React Router Actually Do?
-Ultimately, we're still in a Single-Page application. Show that you can use vanilla JS to change the route in the terminal using the following commands.

- window.history.pushState({}, null, 'page');
- window.history.forward()
- window.history.back();

## Components Used From React-Router-DOM Import
- Router
We'll use this in one place in our application (and one place only). Very top level, essentially listening for when the route changes, and making that info accessible.

- Route
Conditionally render a certain component based on what the route looks like.

- Link
Changes the url we see in the browser, must have a 'to' prop.

- Switch
Pick one of the following routes (the first that matches), don't look at the others (like an if/ else if/ else if).

- Redirect
Forces a redirect to a particular route. We won't use this here.