// Supporting components
export const Book = (props) => {
  // onClick, onMouseOver
  const clickHandler = () => {
    alert(props.title);
  }
  return <article className='booklist' onMouseOver={() => console.log(props.title)}>
    <Image image={props.image}/>
    <Title title={props.title}/>
    <Author author={props.author}/>
    <button type="button" onClick={clickHandler}>Button</button>
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