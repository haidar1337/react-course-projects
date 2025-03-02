/* 
  An alternative syntax is to destructure the passed object CoreConcept({image, title, description})
*/
export default function Concept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}
