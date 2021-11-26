import React from 'react';     // Import React
import ReactDom from 'react-dom';
// Import css file. CSS can be added through a css file or inline when returning jsx
import './index.css'

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
  return <div>
    <Book author={author} title={title} image={img}/>
    <Book author="Mihir Sahu" title="Am I a Joke to You?" image="https://images-na.ssl-images-amazon.com/images/I/410HuA8C58S._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"/>
  </div>
}

// Variables
const author = 'Amelia Hepworth';
const title = 'I Love You to the Moon and Back';
const img = 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';

// Supporting components
const Book = (props) => {
  return <article className='booklist'>
    <Image image={props.image}/>
    <Title title={props.title}/>
    <Author author={props.author}/>
  </article>
}

const Title = (props) => {
  return <h1>{props.title}</h1>
}

const Image = (props) => {
  return <img src={props.image}></img>
}

const Author = (props) => {
  return <h4>{props.author}</h4>
}

ReactDom.render(<BookList/>, document.getElementById('root'));