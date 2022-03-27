
export default function FormData(props){

  return(
    <>
      <input 
      id={props.id}
      type={props.type}
      name={props.name} 
      onChange={props.onChange}></input>
    </>
  )

}