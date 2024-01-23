# Dependencies
## Main 
- Express to create the web server
- MondoDB as database
- React library to describe the user interfaces
- React Dom library to render those interfaces on both the front end and the back end

## Development
- Webpack tool to translate modular code into something that browsers understand today. 
- - Webpack package provides the library
- - Webpack CLI package provides the command to control the library

- Loaders to transform the jsx extension code into what react understands
- Babel transform a few of the modern JavaScript features that are not yet supported natively in all browsers

- Nodemon package can monitor the project's files and auto restart node when changes are saved to disk

- EJS: It is needed the server to respond with an HTML view template but with dynamic content inside, so instead of generating a big HTML string, EJS(short for embedded JavaScript) is used as a dynamic template language. The EJS template lenguage engine is used to server render the JavaScript fron-end components


# Concepts
## Virtual dom
Before html is generated, it's possible to represent it as a JavaScript object tree which allows react to compare it against future versions of the same tree and generate parcial HTML nodes to take to the browser

# Validations
## Eslint
the syntax problems are watched on the app displaying warnings, errors, and alerts on the console, keeping the rules defined at the eslint config file. 
<img src="https://i.ibb.co/kKs5XM4/eslint-prop-types.png" alt="eslint-prop-types" border="0">
## Prop-Types
- React component are going to be part of a prop validations in react to validate the type for these props
