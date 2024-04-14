function Card(props) {

  return (
    <a href={props.link} className={props.class}>{props.name}</a>
  )
}

export default Card
