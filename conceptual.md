### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  
  React Router is a library for routing in React applications. Its main purpose is to enable navigation between different views or components in a React app, particularly Single Page Applications (SPAs), without requiring a full page reload. It allows for dynamic route matching, URL parameters, nested routes, and redirects.


- What is a single page application?
  
  A Single Page Application (SPA) is a web app that loads a single HTML page and dynamically updates the content as the user interacts with the app. It does not reload the page from the server on navigation. Instead, it uses JavaScript to update the URL and render the appropriate components, often using libraries like React Router.


- What are some differences between client side and server side routing?
  
  Client-side routing is handled by the browser using JavaScript, where the URL is updated and the page content changes without reloading the entire page. This results in a faster and more seamless experience once the application is loaded. On the other hand, server-side routing requires the server to handle each route change by sending a new HTML page, resulting in slower page transitions because of full reloads. Additionally, client-side routing offers greater control over navigation and transitions, while server-side routing typically has better SEO because search engines can index content more easily.


- What are two ways of handling redirects with React Router? When would you use each?
  
  Using the <Navigate /> component, this is used directly within the JSX to perform a redirect. You would use it when you want to redirect based on certain conditions during the rendering process.
  Using the useNavigate() hook, this hook allows you to programmatically navigate to different routes, typically within event handlers or effects. This is ideal for handling redirects in response to actions, such as form submissions or button clicks.


- What are two different ways to handle page-not-found user experiences using React Router? 

  You can define a route with path="*" to catch any undefined URL and render a custom "Page Not Found" component. 
  You can also place the fallback route for undefined paths within the layout. This approach ensures the 404 page adheres to your app's layout.


- How do you grab URL parameters from within a component using React Router?

  In React Router, you can use the useParams() hook to access URL parameters within a component.


- What is context in React? When would you use it?

  Context in React is a mechanism that allows you to share state or values across the entire component tree without having to pass props manually at every level. It's useful when you need to access certain values or functions globally in your app. Common use cases for context include managing theme preferences, authentication status, and localization settings, where multiple components need access to the same data.


- Describe some differences between class-based components and function
  components in React.

  Class-based components in React use ES6 class syntax, and they require lifecycle methods like componentDidMount or componentDidUpdate to manage side effects and state changes. They also use this.state and this.setState for managing state. On the other hand, function components are simpler, using plain JavaScript functions. With the introduction of hooks, function components can now use useState, useEffect, and other hooks to manage state and side effects, eliminating the need for lifecycle methods. Function components are often preferred because they are more concise and easier to read.


- What are some of the problems that hooks were designed to solve?

  Hooks were introduced to solve several issues with class-based components in React. First, they allow for reusing stateful logic across components without relying on higher-order components (HOCs) or render props, which could often be hard to follow. Second, they simplify the structure of components, eliminating the need for managing this and binding methods in class components. Third, hooks enable better organization of code by grouping related logic together in functions like useEffect, rather than splitting them across different lifecycle methods. Lastly, hooks allow for better composition of logic, making it easier to manage state and side effects in a clean and modular way.