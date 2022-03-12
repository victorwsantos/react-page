export default function Button(props){
  return <button onClick={props.onSubmit} style={props.style} >{props.btnName}</button>
}