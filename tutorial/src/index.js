import React from 'react';     // Import React
import ReactDom from 'react-dom';

/*
JSX Rules
- return single element
- to return additional elements, wrap everything around a div, section, article, or React.Fragment
- use camelcase for html attributes in jsx. Ex. Instead of onclick use onClick, instead of class use className
- close every element
*/

// Method 1 (preferred)
//const Greeting = () => {      // Either the normal way or arrow functions can be used, but the function name must be capitalized for react to recognize it as a special function
//  return <h4>This is Mihir and this is my first component!</h4>;     // This is jsx. Always return a single element. To add more elements, wrap everything inside a tag like <div>
//}

// Method 2
const Greeting = () => {
  return React.createElement('h4', {}, 'This is Mihir and this is my first component!')     // React.createElement can be nested inside of itself
}

ReactDom.render(<Greeting/>, document.getElementById('root'));      // Renders the component into the html


// 1:29:05
