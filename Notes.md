# React Notes

- I'm skipping the basics of the terminal and npm because I'm familiar with those already.
- Easy way to create a react app is the "Create React App" package from the official facebook git repo
  - Install with `npm install -g create-react-app`
  - Create a new app with `npx create-react-app my-app`
- Babel is a js compiler that converts new js to old, stable js that's used by most browsers
- Great extensions: Prettier and ES7 React/Redux/GraphQL/React-Native snippets
- To use js inside jsx use {}
- props are arguments that can be sent through components. Any name can be used, but props is convention
  - Any number of arguments can be added, and those arguments can be called with props.argument or props[argument] notation. The props can also be destructured so dot or bracket notation is not needed
    - `const { img, title, author } = props`;
  - Children are a special type of prop that are included between the tags, not as properties
    - `<Book author={firstBook.author} title={firstBook.title} image={firstBook.img}> <p>This is a child prop</p> </Book>`

## Questions

What's the difference between import and require()?

- Ex. "import React from 'react'" vs "const http = require('http')"
