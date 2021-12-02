# React Notes

- I'm skipping the basics of the terminal and npm because I'm familiar with those already.
- Easy way to create a react app is the "Create React App" package from the official facebook git repo
  - Install with `npm install -g create-react-app`
  - Create a new app with `npx create-react-app my-app`
- Babel is a js compiler that converts new js to old, stable js that's used by most browsers
- Great extensions: Prettier and ES7 React/Redux/GraphQL/React-Native snippets
- To use js inside jsx use {}
- JSX Rules
  - return single element
  - to return additional elements, wrap everything around a div, section, article, or React.Fragment
  - use camelcase for html attributes in jsx. Ex. Instead of onclick use onClick, instead of class use className
  - close every element tag
  - Either the normal way or arrow functions can be used, but the function name must be capitalized for react to recognize it as a special function
- props are arguments that can be sent through components. Any name can be used, but props is convention
  - Any number of arguments can be added, and those arguments can be called with props.argument or props[argument] notation. The props can also be destructured so dot or bracket notation is not needed
    - `const { img, title, author } = props`;
  - Children are a special type of prop that are included between the tags, not as properties
    - `<Book author={firstBook.author} title={firstBook.title} image={firstBook.img}> <p>This is a child prop</p> </Book>`
- Use .map function for dynamic stuff
- Event basics
  - Basic events
    - onClick
    - onMouseOver
  - Make sure to pass a function to the event listeners. Ex. `onClick={() => console.log("Hello world!")}`
- Import/Export files
  - To export, simply insert the 'export' keyword before declaring the variable/structure. Ex. `export const list = [1, 2, 3]`
    - Another way to export is to use the 'export default' structure. This allows you to rename the variable/structure name when importing it to another file. Ex. `export default variable/structureName`
  - To import, use `import {variable/structure name} from 'file name'`
- Hosting
  - Netlify offers free hosting
  - To create a production instance of the website with npm, use `npm run build`. Then a build folder will be created in the directory, which can be uploaded to the hosting website
- Hooks are a way to add dynamic functionality to the web page
  - Hooks must be inside a function body
  - Hooks cannot be called conditionally
  - The components/functions that the hooks are in must be capitalized
  - useState
    - `import React, { useState } from 'react';`
    - Pass in a default value
    - Ex. `const [text, setText] = useState('random title')`

## Questions

What's the difference between import and require()?

- Ex. "import React from 'react'" vs "const http = require('http')"
