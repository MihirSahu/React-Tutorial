import React from 'react';     // Import React
import ReactDom from 'react-dom';
// Import css file. CSS can be added through a css file or inline when returning jsx
import './index.css'
import {books} from './books.js'
import {Book} from './Book.js'

/*
JSX Rules
- return single element
- to return additional elements, wrap everything around a div, section, article, or React.Fragment
- use camelcase for html attributes in jsx. Ex. Instead of onclick use onClick, instead of class use className
- close every element tag
*/

/*
// Method 1 (preferred)
const Greeting = () => {      // Either the normal way or arrow functions can be used, but the function name must be capitalized for react to recognize it as a special function
  return <div>
      <h4>This is Mihir and this is my first component!</h4>
      <Person/>
      <Message/>
  </div>;     // This is jsx. Always return a single element. To add more elements, wrap everything inside a tag like <div>
}

// Method 2
//const Greeting = () => {
//  return React.createElement('h4', {}, 'This is Mihir and this is my first component!')     // React.createElement can be nested inside of itself
//}

// Additional components
const Person = () => <h2>Mihir Sahu</h2>
const Message = () => <p>This is my message</p>

ReactDom.render(<Greeting/>, document.getElementById('root'));      // Renders the component into the html
*/

// Create Book Section
// Main rendered component
const BookList = () => {
  // Return a div that contains Book components depending on how many objects are in the book array
  // books.id is simply a unique key that prevents a warning from react
  return <div>
    {books.map((book) => {
      return <Book key={books.id} image={book.img} title={book.title} author={book.author}/>
    })}
  </div>
}

ReactDom.render(<BookList/>, document.getElementById('root'));